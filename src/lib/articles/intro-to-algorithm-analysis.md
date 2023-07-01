---
title: A Beginner's Intro to Algorithm Analysis
tags: ['algorithms', 'programming']
description: Exploring fundamentals of algorithm analysis by breaking down Big O notation, time complexity classes, and performance scenarios.
date: 2023-07-01
renderEqs: true
---

When I first read Chapter 2 of the Algorithm Design Manual by Steven Skiena I was surprised to learn that there are algorithms so inefficient that it could take a supercomputer even longer than the age of the universe to run them. 

This insight alone helped me understand the relevance of algorithm analysis and Big O notation. These provide frameworks for evaluating and comparing the efficiency of algorithms. In this blog post, I'll distill what I've learned about Big O Notation, delve into a few different classes of time complexity, and discuss analyzing algorithms under best-, worst-, and average-case scenarios.

## What is Big O Notation?

Big O notation expresses how the algorithm's runtime increases as the size of its input increases. In other words, as we give our algorithm more work (by increasing the input size), the time it takes to complete this work may also increase.

Not all algorithms handle large inputs as efficiently as others. Therefore, comparing the performance of different algorithms requires examining how the number of computations an algorithm performs grows with the input size $n$. We can represent this relationship as some function $f(n)$. 

Now, $f(n)$ may include several terms and constants. But when using Big O notation, it's more important to focus on the term that grows the fastest as $n$ gets very large, known as the dominant term. 

Why only the dominant term? That's because Big O notation aims to capture the rate at which the runtime grows with $n$, not the precise number of computations. For this reason, we also typically ignore constants as they don't change with $n$. Let's illustrate this with an example.

Suppose we've observed that the function $f(n) = 6n^2 + n + 5$ describes an algorithm's runtime. This function has three terms but the one that grows the fastest as $n$ gets larger is $6n^2$. Thus, we can say that $f(n) = O(n^2)$. Notice that we've dropped the constant '6' to emphasize how our function grows with $n$ instead of the exact number of computations the algorithm performs. 

The expression $f(n) = O(g(n))$ means that there's a function $g(n)$ that satisfies the condition $c \cdot g(n) \geq f(n)$ for $n > n_0$ where $c$ and $n_0$ are constants. This $n_0$ is a point beyond which $g(n)$ (scaled by the constant $c$) always surpasses $f(n)$. In our example, we found that $g(n) = n^2$ and $c=6$. Although we haven't specified $n_0$, it's implied that this inequality holds for sufficiently large $n$. 

## Exploring Time Complexity Classes

Building on the concept of Big O notation we explored in the previous section, we'll now focus on understanding time complexity classes, a key concept in algorithm analysis. 

These classes represented using Big O notation, provide a shorthand to describe how an algorithm's runtime scales with input size. For example, when we say that an algorithm is $O(n^2)$ this means that its time complexity is quadratic, a particular class of time complexity.

In this section, we'll explore four key time complexity classes: Constant, Logarithmic, Linear, and Quadratic. Understanding these classes will provide insights into how different algorithms perform as the size of their inputs grow.

### Constant

Constant time, given as $O(1)$, represents the simplest time complexity class. This corresponds to one basic unit of computation, including operations such as adding two numbers together or creating a new variable. 

### Logarithmic

Algorithms with a logarithmic runtime obey $O(\log(n))$. These are typically binary search algorithms. Binary search is used in situations where you need to retrieve an item from a sorted list. The steps for this retrieval are as follows:
1. Look at the center-most item. If it's the item we seek then return this.
2. If the item of interest isn't the center-most item then determine whether the item of interest appears before or after the center-most item depending on the sorting of the list
3. Repeat this procedure with either the left or right partition of the list

When I first learned about logarithmic time I was confused about where the $\log(n)$ comes from. This is easy to explain. 

Let's say we have $n$ items which can be expressed as $n$ = $2^s$. The variable $s$ tells us how many times we can divide $n$ in half. Now, take the logarithm of both sides to get $log(n) = s$. Here, $s$ tells us the number of times we may have to divide this number of items, in the worst case, until we get what we're looking for. 

### Linear

Linear runtimes correspond to cases where for $n$ items we need to inspect each item once. 

For a practical example let's say we're looking for the cheapest item in a shop. If don't have a list of the items sorted by price we may have to look at each one to identify the cheapest item. 

### Quadratic

Quadratic runtimes occur in cases where for $n$ items we need to inspect all unique pairs of the items in the set. 

Sorting algorithms such as bubble sort and insertion sort are $O(n^2)$. In the worst case, you have to sort a list that has been sorted in reverse order. This will require $n^2$ comparisons to sort the list.

For example, let's say you're organizing a party and are creating a list of invitees. You may want to inspect all possible pairs of invitees to ensure you don't invite two people who don't get along. This would require a runtime of $O(n^2)$.

## Understanding Algorithm Performance: Best, Average, and Worst-Case Scenarios

Algorithm analysis typically involves assessing an algorithm's performance in three scenarios: the best, worst, and average cases. 

The best-case scenario represents instances where the algorithm completes its work in the shortest amount of time. In contrast, the worst case measures the upper bound of the algorithm's runtime. Finally, the average case falls between these extremes.

To illustrate, consider an algorithm tasked with sorting items in a list. In the best-case scenario, the list is already sorted and the algorithm doesn't need to make any changes. The worst-case scenario occurs when the list is in reverse order, requiring the algorithm to rearrange every item. The average-case scenario assumes the list is in random order as only a subset of the items may need to be rearranged.

You might think that the average-case scenario would be the most representative, but it's typically a difficult case to analyze. The average case depends on the specific distribution of inputs, which we can't always determine. 

For instance, for sorting items in a list could we identify the most probable inputs that the algorithm would have to sort? Most likely not. In contrast, it's much easier to identify the types of inputs that correspond to the worst case.

It's often the worst case that should interest us the most for a few reasons. First, the worst case is generally simpler to analyze. Understanding it well may expose opportunities to optimize an algorithm. Finally, It also guarantees an upper limit on the algorithm's runtime, regardless of the specific input. This is particularly important for software systems where predictability is key. 

Consider a real-time system that requires the completion of tasks within specific time constraints. Knowing the worst-case scenario allows us to make guarantees about the system's ability to perform these tasks within an acceptable time frame even under unfavorable conditions.

One example of a real-time system is a social media platform. Here, it may be favorable to establish guarantees of how long it takes for new posts and comments by users to become available to other users on the platform. If we find that these guarantees don't hold, then it would be necessary to optimize the worst-case runtime.

Lastly, while the best-case scenario may seem desirable, it's the least informative about an algorithm's performance. In most real-world scenarios inputs may not always resemble those of the best case. Hence, analyzing an algorithm's best-case performance may provide an overly optimistic view that doesn't reflect its practical utility.

## Conclusion 

Algorithm analysis is a fundamental skill in computer science. Understanding the basics of Big O notation is necessary to recognize the runtime of your algorithms, and hence, the speed and scalability of your code.

In this blog post, we've examined the different classes of time complexity from constant to quadratic and their implications on an algorithm's runtime. Despite this, there's no 'one-size-fits-all' solution when choosing the most efficient algorithm. The best algorithm for a given task depends on many factors, including the input size and specific constraints of the problem.

These foundational concepts can help you evaluate algorithms under best-, worst- and average-case scenarios. But remember that algorithm analysis is a broad field with so much more to explore. Other topics including space complexity, trade-offs between time and space, more complex time complexities, and the use of data structures for optimizing algorithms are all worthy of further study.
