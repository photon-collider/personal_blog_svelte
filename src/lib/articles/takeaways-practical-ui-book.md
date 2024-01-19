---
title: "My Top Takeaways from 'Practical UI'"
tags: ['design']
description: Recapping some practical tips from Adham Dannaway's book on web design.
date: 2024-01-19
---

<script>
    import ArticleScreenshot from '$lib/components/ArticleScreenshot.svelte'
    let imageBucket = 'article_images/takeaways-practical-ui'
</script>


How do UI designers create sleek and elegant web designs? This question puzzled me each time I redesigned my personal website.  

However, my understanding of web design fundamentals improved after reading the book [*Practical UI* by Adham Dannaway](https://www.practical-ui.com). The book offered many useful tips on color, typography, layouts, and buttons. In this post, I’ll share key insights from the book that helped me my latest website design. 

## Color

**Prioritize accessibility when choosing colors.** It’s crucial ensure sufficient color contrast in user interfaces for readability and differentiation. Two standards for this include the Web Content Accessibility Guidelines 2 (WCAG) and the Accessible Perceptual Contrast Algorithm (APCA). Furthermore, tools such as the [Chrome DevTools](https://developers.google.com/codelabs/devtools-cvd#0) and the [A11y Figma plugin](https://www.figma.com/community/plugin/733159460536249875) can help address color contrast issues.

<ArticleScreenshot
    imageBucket="{imageBucket}"
    imageName="text_contrast"
    altText="Two lines of text, with the first line showing poor contrast and second line showing accessible contrast."
    caption="An example of good and bad text contrast."
/>

**Embrace the HSB to create color palettes.** Unlike RBG or Hex, the hue-saturation-brightness (HSB) is more intuitive for describing colors. Creating variations of a single color requires fixing the hue and adjusting and the saturation and brightness. Learn more about it [here](https://www.learnui.design/blog/the-hsb-color-system-practicioners-primer.html).

**Highlight interactive elements using one color.** This principle can provide a unified look to a design and minimize confusion. However, it isn’t always necessary to follow when it’s obvious that elements, such as nav bars, are interactive. 

## Typography 

**Select a type scale for font sizes.** Instead of randomly picking font sizes, pick a type scale. This involves choosing a base font size and scaling factor to generate a range of sizes. Here’s a [handy tool](https://typescale.com) for this.

**Keep line lengths between 40 - 80 characters**. Lines that are too long or short disrupt the reading experience for users. I doubted this wisdom at first. But, there’s plenty of [research to back up this claim](https://www.researchgate.net/publication/234578707_Optimal_Line_Length_in_Reading--A_Literature_Review#:~:text=Research%20has%20led%20to%20recommendations,about%2070%20characters%20per%20line.). 

<ArticleScreenshot
    imageBucket="{imageBucket}"
    imageName="line_length"
    altText="Two example paragraphs showing the difference between a reasonable and a very long line length."
    caption="Example paragraphs showing the difference between a long and a more legible line length."
/>

## Layout

**Limit spacing options for simplicity.** This reduces friction in deciding how to space elements. It also prevents picking arbitrary spacing units, which can make designs look inconsistent. Nowadays, I use spacing units such as `2px`, `4px`, and integer multiples of `8px`.

**Apply the law of proximity.** When two visual elements are closely associated, they should be closer together. This principle provides structure and organization in visual designs. Learn more [about this here](https://lawsofux.com/law-of-proximity/).

## Buttons

**Avoid solely relying on color to establish a button hierarchy.** Consider using shape and style to accommodate colorblind users. An easy way to do this is to use a filled button, unfilled button, and an ‘empty’ button for the primary, secondary, and tertiary buttons, respectively, as shown below.

<ArticleScreenshot
    imageBucket="{imageBucket}"
    imageName="buttons"
    altText="A filled primary button next to an unfilled secondary button and a tertiary button that has an underline."
    caption="An accessible button hierarchy."
/>

**Use secondary or tertiary buttons when presenting the user with several options.** Reserve the primary button for the most important option, as it for multiple options can be visually overwhelming. Hence, it’s better to reduce the visual weight of each option by using the secondary or tertiary buttons.

**Require buttons to be at least 48 by 48 pixels in size.** This ensures that buttons are easy to click. 


## Conclusion

In summary, *Practical UI* introduced me to fundamentals of visual design that helped me redesign my website. This experience also sparked my deeper curiosity of UI design. I’m eager to learn how to create even more user-friendly and aesthetically pleasing websites.