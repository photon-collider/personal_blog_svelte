---
title: Sentiment Analysis with Naive Bayes
description: How to implement sentiment analysis using a naive Bayes classifier.
date: 2021-07-24
tags: ['machine-learning', 'nlp', 'statistics']
permalink: blog/{{title | slug}}/
imagebucket: 'article_images/p8_naive_bayes'
header_image: 'copyright-bryan-anthonio_com-curiosity'
---

<svelte:head>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css" integrity="sha384-zTROYFVGOfTw7JV7KUu8udsvW2fx4lWOsCEDqhBreBwlHI4ioVRtmIvEThzJHGET" crossorigin="anonymous">
</svelte:head>

[Naive Bayes classifiers](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) are used in various natural language processing tasks. These include [sentiment analysis](https://arxiv.org/abs/1610.09982), [spam filtering](https://en.wikipedia.org/wiki/Naive_Bayes_spam_filtering), and other types of document classifications. In this post, I will present Bayes' theorem, the building block of naive Bayes classifiers, describe how naive Bayes classifiers work, and show how to implement these algorithms.

## What is Bayes' Theorem?

The Naive Bayes classifier represents an application of Bayes' theorem. Given two events $A$ and $B$, this theorem states that the conditional probability $P(A \ | \ B)$ that event $A$ occurs given that event $B$ has occurred is expressed as

```math
 \displaystyle P(A | B) = \frac{P(B | A) \times P(A)}{P(B)}.
```

Here, $P(A)$ and $P(B)$ are the probabilities that $A$ and $B$ occur, respectively. Bayes' theorem allows us to take an unknown quantity $P(A \ | \ B)$ and define it in terms of other relevant probabilities that we may already know.

If reading this equation makes you feel like you're reading heiroglyphics, try the following example:

```math
\displaystyle P(\textrm{fun year} \;|\; \textrm{no covid}) = \frac{P(\textrm{no covid} \; | \; \textrm{fun year}) \times P(\textrm{fun year})}{P(\textrm{no covid})}
```

In other words, the probability that 2020 would have been a fun year, given that the COVID-19 pandemic hadn't occurred, can be computed if we have prior knowledge of the terms on the right-hand side. These include:

- $P(\textrm{no covid} \ | \ \textrm{fun year})$: the probability that COVID-19 doesn't occur in a fun year
- $P(\textrm{fun year})$: the probability that any year is fun
- $P(\textrm{no covid})$: the probability that COVID-19 doesn't occur in any given year

The term $$P(\textrm{no covid})$$ can be written as the probability that COVID-19 doesn't occur regardless of whether the year is fun or not. This is given as

```math
\displaystyle P(\textrm{no covid}) = P(\textrm{no covid} \; | \; \textrm{fun year}) \times P(\textrm{fun year}) + P(\textrm{no covid} \; | \; \textrm{bad year}) \times P(\textrm{bad year})
```

Now, lets assume we know the following:

- $P(\textrm{fun year}) = 0.8$
- $P(\textrm{bad year}) = 1 - P(\textrm{fun year}) = 0.2$
- $P(\textrm{no covid} \; | \; \textrm{fun year}) = 0.95$
- $P(\textrm{no covid} \; | \; \textrm{bad year}) = 1 - P(\textrm{no covid} \; | \; \textrm{fun year}) = 0.05$

These probabilities suggest that

```math
\begin{aligned} P(\textrm{no covid}) &=  0.95 \times 0.8 + 0.05 \times 0.2 \\ &= 0.77 \end{aligned}
```

Using these results, we can determine that

```math
\begin{aligned}\displaystyle P(\textrm{fun year} \;|\; \textrm{no covid}) &= \frac{0.95 \times 0.8}{0.77} \\ &= 0.99 \end{aligned}
```

In other words, the probability that any year is fun, given that the COVID-19 pandemic doesn't occur during that same year, is about 99%. Next, I will describe how Bayes' theorem relates to the Naive Bayes classifier.

## The Naive Bayes Classifier

In sentiment analysis applications, the goal of the Naive Bayes classifier is to predict the most probable sentiment for a given text. This requires a training set of text samples that have been labeled as having either a positive or negative sentiment. Using Bayes' theorem, the probability of interest is expressed as

```math
\displaystyle P(s \ | \ \textrm{text}) = \frac{P(\textrm{text} \ | \ s) \times P(s)}{P(\textrm{text})} \quad s \in \{ \textrm{pos},\;\textrm{neg} \}
```

where the sentiment $$s$$ can correspond to either a positive ($$\mathrm{pos}$$) or negative ($$\mathrm{neg}$$) sentiment. The probability $$P(s)$$ is the fraction of text samples in the training set that have sentiment $$s$$.

It may not always be straightforward to determine $$P(\textrm{text} | s)$$ and $$P(\textrm{text})$$. One way to simplify this is to assume that the words occurring in the text are independent of each other. In practice, this assumption is typically not correct which is why this algorithm is known as _naive_ Bayes. Regardless, this simplification allows us to define the conditional probability $$P(s \ | \ w)$$, the probability of a sentiment $$s$$ given the word $$w$$, as

```math
\displaystyle P(s\;| \; w) = \frac{P(w \; | \; s) \times P(s)}{P(w)}
```

where $$P(w)$$ represents the probability that the word $$w$$ occurs in the training set. Now we can determine the probability that a piece of text has sentiment $$s$$ as

```math
 \displaystyle P(s\;| \; \mathrm{text}) = P(s) \times \prod_i \frac{P(w_i \; | \; s) }{P(w_i)},
```

where $$w_i$$ represents the $$i$$-th word in the text.

Naive Bayes performs classifications by first computing $$\displaystyle P(\textrm{pos} \ | \ \mathrm{text})$$ and $$\displaystyle P(\textrm{neg} \ | \ \mathrm{text})$$. We can calculate the ratio of these two probabilities, known as the likelihood, to obtain

```math
\displaystyle \frac{P(\textrm{pos}\;| \; \mathrm{text})}{P(\textrm{neg}\;| \; \mathrm{text})} = \frac{P(\mathrm{pos})}{P(\mathrm{neg})} \prod_i \frac{P(w_i \; | \; \mathrm{pos})  \times \cancel{P(w_i)}}{P(w_i \; | \; \mathrm{neg})  \times \cancel{P(w_i)} }
```

If the likelihood is greater than 1, the model predicts a positive sentiment. But if the likelihood is less than 1, the model instead predicts a negative sentiment. One advantage of computing the likelihood function is that we can avoid calculating $$P(w_i)$$ as it occurs in the numerator and the denominator.

The term $$P(\mathrm{pos})/P(\mathrm{neg})$$ is known as a prior. It is relevant if there are more samples having one particular sentiment than the other. If the training set contains an equal number of positive and negative text samples, $$P(\mathrm{pos}) = P(\mathrm{neg}) = 0.5$$ and thus, $$P(\mathrm{pos})/P(\mathrm{neg}) = 1$$.

The conditional probability <span>$$\displaystyle P(w \ | \ s)$$ </span> that a word $$w$$ occurs in the presence of sentiment $$s$$ is given by the expression

```math
\displaystyle P(w \;|\; s) = \frac{\mathrm{freq}(w, \; s)}{N_s}
```

The function $$\displaystyle \mathrm{freq}(w, \ s)$$ represents how often the word $$w$$ occurs with sentiment $$s$$ in the training set. Furthermore, $$N_s$$ is the total number of words in text samples that have sentiment $$s.$$

These are the building blocks needed to implement naive Bayes for sentiment classification. In the next section, I will describe how to implement a Naive Bayes classifier from scratch.

## Implementing Naive Bayes

Let's now implement this in some code. I'll start by creating a small dataset:

```python
import pandas as pd

dataset = pd.DataFrame(
    {
        "text": [
            "2020 was a fun year",
            "Cats was a great movie",
            "NLP is not fun",
            "I hate tacos",
        ],
        "sentiment": ["positive",
                      "positive",
                      "negative",
                      "negative"],
    }
)
```

The table below represents this dataset:

<pre class="language-text">
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: left;">
      <th></th>
      <th>text</th>
      <th>sentiment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2020 was a fun year</td>
      <td>postive</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Cats was a great movie</td>
      <td>postive</td>
    </tr>
    <tr>
      <th>2</th>
      <td>NLP is not fun</td>
      <td>negative</td>
    </tr>
    <tr>
      <th>3</th>
      <td>I hate tacos</td>
      <td>negative</td>
    </tr>
  </tbody>
</table>
</pre>

Now, we need to determine how often each word in our dataset occurs for both sentiment labels. The function <code class="language-text">get_freqs</code> defined below takes care of this. It uses the functions <code class="language-text">word_tokenize</code> and <code class="language-text">FreqDist</code> imported from the [NLTK](https://www.nltk.org/) library. The function <code class="language-text">word_tokenize</code> splits a string into a list of words, also known as word tokens. Furthermore, the function <code class="language-text">FreqDist</code> takes these word tokens to generate a dictionary showing how often each word occurs.

```python
from nltk import word_tokenize
from nltk import FreqDist

def get_freqs(dataset, sentiment):
    senti_dataset = dataset.loc[dataset["sentiment"] == sentiment]
    total_text = senti_dataset["text"].to_list()
    total_text = " ".join(total_text)
    words = word_tokenize(total_text)
    return FreqDist(words)
```

Here's how <code class="language-text">get_freqs</code> works in practice. First, we can generate a frequency dictionary for the words in the text samples with a positive sentiment.

```python
pos_freqs = get_freqs(dataset, "positive")
pos_freqs
```

```text
FreqDist({'was': 2, 'a': 2, '2020': 1, 'fun': 1, 'year': 1, 'Cats': 1, 'great': 1, 'movie': 1})
```

Similarly, we can compute a frequency dictionary for text samples with a negative sentiment.

```python
neg_freqs = get_freqs(dataset, "negative")
neg_freqs
```

```text
FreqDist({'NLP': 1, 'is': 1, 'not': 1, 'fun': 1, 'I': 1, 'hate': 1, 'tacos': 1})
```

For convenience, let's combine these dictionaries in a DataFrame. The function <code class="language-text">get_freq_table</code> defined below achieves this. It first creates two dataframes using <code class="language-text">pos_freqs</code> and <code class="language-text">neg_freqs</code>, respectively. These are then merged using the <code class="language-text">[DataFrame.merge](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.merge.html)</code> function. In the final step, this implementation uses the <code class="language-text">[DataFrame.fillna](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.fillna.html)</code> function to replace any missing values with a <code class="language-text">0</code>.

```python
def get_freq_table(dataset):
    pos_freqs = get_freqs(dataset, "positive")
    neg_freqs = get_freqs(dataset, "negative")

    pos_freq_table = pd.DataFrame.from_dict(pos_freqs, orient="index")
    pos_freq_table.columns = ["positive"]

    neg_freq_table = pd.DataFrame.from_dict(neg_freqs, orient="index")
    neg_freq_table.columns = ["negative"]

    freq_table = pos_freq_table.merge(
        neg_freq_table, how="outer", left_index=True, right_index=True
    )
    freq_table = freq_table.fillna(0)
    return freq_table
```

We can now compute a frequency table showing how often words in the training set occur with positive and negative sentiments.

```python
freq_table = get_freq_table(dataset)
freq_table
```

<pre class="language-text">
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>positive</th>
      <th>negative</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2020</th>
      <td>1.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>Cats</th>
      <td>1.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>I</th>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>NLP</th>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>a</th>
      <td>2.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>fun</th>
      <td>1.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>great</th>
      <td>1.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>hate</th>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>is</th>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>movie</th>
      <td>1.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>not</th>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>tacos</th>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>was</th>
      <td>2.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>year</th>
      <td>1.0</td>
      <td>0.0</td>
    </tr>
  </tbody>
</table>
</pre>

Given this frequency table, we can now define a function <code class="language-text">prob</code> to compute the conditional probability $$P(w \ | \ s) = \mathrm{freq}(w, \ s)/N_s$$ that a word $$w$$ occurs with a sentiment $$s$$.

```python
def prob(word, freq_table, sentiment):
    vocab = freq_table.index.to_list()
    if word in vocab:
        word_freq = freq_table.loc[word, sentiment]
    else:
        word_freq = 0
    n_senti = freq_table[sentiment].sum()
    return word_freq/n_senti
```

s an example, we can use this function to compute the probability that the word "was" occurred given that the sentiment was positive. In this case, the probability is 20% since "was" occurred twice and the total number of words in the positive text samples is 10.

```python
prob("was", freq_table, "positive")
```

```text
0.2
```

Similarly, we can compute the probability that the word "was" occurred given that the sentiment was positive. The probability here is 0 because this word didn't occur in the samples with a negative sentiment.

```python
prob("was", freq_table, "negative")
```

```text
0
```

Next, let's define a <code class="language-text">likelihood</code> function that we can use to predict the sentiment of any given text:

```python
def likelihood(text, freq_table, prior=1):
    word_lst = word_tokenize(text)
    output = prior
    for word in word_lst:
        pos_prob = prob(word, freq_table, sentiment="positive")
        neg_prob = prob(word, freq_table, sentiment="negative")
        output *= pos_prob/neg_prob
    return output
```

Here, the argument <code class="language-text">prior</code> corresponds to the ratio $$P(\mathrm{pos})/P(\mathrm{neg})$$. If the training set contains more text samples having one sentiment than the other, this argument will have to be adjusted to account for this. We can compute the likelihood for the string <code class="language-text">"Cats was great"</code> by running the following expression:

```python
likelihood("Cats was great", freq_table)
```

```text
RuntimeWarning: divide by zero encountered in double_scalars
  output *= pos_prob/neg_prob
```

Uh oh! What happened here? The problem with this implementation is that if $$P(w_i \ | \ s) = 0$$ for any word in the input text then $$P(s \ | \ \mathrm{text}) = 0$$. In this case, <code class="language-text">neg_prob</code> is zero because none of the words in the string <code class="language-text">"Cats was great"</code> ever occur with a negative sentiment in the training set. This can be addressed using a method known as Laplacian smoothing.

### Laplacian Smoothing

When using Laplacian smoothing, the probability $$P(w \ | \ s)$$ is revised to become

```math
\displaystyle P(w \;|\; \textrm{s}) = \frac{\mathrm{freq}(w,\; \mathrm{s}) + 1}{N_\mathrm{s} + V} \quad \textrm{s} \in \{ \textrm{pos}, \;\textrm{neg} \}.
```

In this expression, $$V$$ represents the number of unique words that occur in the training set. Now, if $$\mathrm{freq}(w, \ s) = 0$$, then $$ P(w \ | \ s) = 1/(N_s + V)$$ instead of 0. Let's now define a new probability function <code class="language-text">prob_lps</code> to implement this:

```python
def prob_lps(word, freq_table, sentiment):
    vocab = freq_table.index.to_list()
    v = len(vocab)

    if word in vocab:
        word_freq = freq_table.loc[word, sentiment]
    else:
        word_freq = 0

    n_senti = freq_table[sentiment].sum()
    return (word_freq + 1)/(n_senti + v)
```

Let's see how this works on the word "was." Before, the probability was 20%. Now, it's 12.5%.

```python
prob_lps("was", freq_table, "positive")
```

```text
0.125
```

For negative sentiments, we originally got a probability of 0. After including Laplacian smoothing, the probability is now about 4.76%.

```python
prob_lps("was", freq_table, "negative")
```

```text
0.047619047619047616
```

Let's now define a new likelihood function that uses Laplacian smoothing.

```python
def likelihood_lps(text, freq_table, prior=1):
    word_lst = word_tokenize(text)
    output = prior
    for word in word_lst:
        pos_prob = prob_lps(word, freq_table, sentiment="positive")
        neg_prob = prob_lps(word, freq_table, sentiment="negative")
        output *= pos_prob/neg_prob
    return output
```

This time, we don't run into any runtime errors when computing likelihoods

```python
likelihood_lps("Cats was great", freq_table)
```

```text
8.0390625
```

How does the likelihood change if instead input the string <code class="language-text">"Cats was not great"</code>?

```python
likelihood_lps("Cats was not great", freq_table)
```

```text
3.51708984375
```

The likelihood drops by almost 50% in this case. Here, the model will still predict a positive sentiment. This is because the word "not" is the only word in the input text that appears with a negative sentiment in the training set.

### Computing the Log-Likelihood

It is best practice to compute log probabilities for numerical stability. As the number of words in the vocabulary $$V$$ increases, the probability of any word will become smaller and smaller. Thus, when computing the likelihood for a very long string of text, computing the product of small probabilities will yield a number so small there might not be enough numerical precision to properly represent this number accurately. This is known as [underflow](https://en.wikipedia.org/wiki/Arithmetic_underflow). It represents one of the subtle nuances of performing arithmetic on decimal numbers using a computer. A more in-depth review of floating-point computations can be found in [this article](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html).

Computing the logarithm of probability will mitigate the presence of underflow errors. This is due to following the property of the logarithm function:

```math
\displaystyle \log \left( \prod_{i}^{m}p_i \right)=  \sum_i^m \log(p_i).
```

In the event that we have have to multiply several small probabilities $$p_i$$, we can prevent underflow by taking the log of this product and instead computing the sums of the log probabilities $$\log(p_i)$$. Using this property, we can then define the log-likelhood as:

```math
\displaystyle \log\left(\frac{P(\mathrm{pos})}{P(\mathrm{neg})} \times \prod_{i}^{m}\frac{P(w_i \;|\; \mathrm{pos})}{P(w_i \;|\; \mathrm{neg})} \right) = \log \frac{P(\mathrm{pos})}{P(\mathrm{neg})} + \sum_i^m \log \frac{P(w_i \;|\; \mathrm{pos})}{P(w_i \;|\; \mathrm{neg})}.
```

This is implemented in the function <code class="language-text">log_likelihood_lps</code> shown below:

```python
import numpy as np

def log_likelihood_lps(text, freq_table, prior=1):
    word_lst = word_tokenize(text)
    output = np.log(prior)
    for word in word_lst:
        numerator = prob_lps(word, freq_table, sentiment="positive")
        denom = prob_lps(word, freq_table, sentiment="negative")
        output += np.log(numerator/denom)
    return output
```

In this case, a positive sentiment is predicted when the likelihood is greater than zero. Otherwise, the model will predict a negative sentiment, as seen in the following examples:

```python
log_likelihood_lps("Cats are great", freq_table)
```

```text
0.9857001832463227
```

```python
log_likelihood_lps("I hate pineapple pizza", freq_table)
```

```text
-1.9204199316179813
```

## Conclusion

In this post, I introduced Bayes' theorem and showed how it's used to build a simple classifier, known as naive Bayes, for sentiment analysis. I also showed how to implement Laplacian smoothing and compute log-likelihoods to make the classifier more numerically robust.
