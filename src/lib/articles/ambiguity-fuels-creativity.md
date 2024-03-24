---
title: 'Ambiguity Fuels Creativity'
category: 'personal'
tags: ['writing', 'design', 'personal']
description: Exploring how ambiguity serves as a catalyst for innovation in creative endeavors.
date: 2024-02-23
og_img_url: https://banthonio.nyc3.cdn.digitaloceanspaces.com/article_images/ambiguity-fuels-creativity/ambiguity-and-creativity-600w.jpg
---

<script>
    import {imgHostRootURL} from '$lib/config'
    import Figure from '$lib/components/Images/Figure.svelte'

    let lgImgURL = `${imgHostRootURL}/article_images/ambiguity-fuels-creativity/ambiguity-and-creativity-1800w.jpg`
    let mdImgURL = `${imgHostRootURL}/article_images/ambiguity-fuels-creativity/ambiguity-and-creativity-1200w.jpg`
    let smImgURL = `${imgHostRootURL}/article_images/ambiguity-fuels-creativity/ambiguity-and-creativity-600w.jpg`
    let altText = "An abstract image"
    let caption = "Prompt: abstract minimalist illustration of ambiguity fueling creativity --ar 16:9 --v 6"
</script>



<div class="my-5">
	<Figure {caption}>
		<slot>
			<img
				srcset="{lgImgURL}  1800w,  {mdImgURL} 1200w, {smImgURL} 600w"
				alt={altText}
				src={smImgURL}
				sizes="(max-width: 48rem) 100vw, 72rem"
				loading="lazy"
				class="mx-auto mb-2 block rounded"
			/>
		</slot>
	</Figure>
</div>


What do you think of when you hear the word “ambiguity”? Some people regard it as an adversary to conquer. For others, the concept might evoke feelings of being trapped in a maze. I used to have such feelings. 

But after reading the book [*Navigating Ambiguity*](https://dschool.stanford.edu/book-collections/navigating-ambiguity) by Andrea Small and Kelly Schmutte, I’ve since understood that ambiguity isn’t to be feared. Indeed, it fuels creativity.

## The Role of Ambiguity in Creativity
Ambiguity arises when the end goal for a project isn’t defined with extreme precision. This provides room to experiment with multiple approaches. For instance, in writing, you might rewrite a sentence or paragraph several ways until it feels just right. 

This freedom lends a personal touch to creative work and uncovers surprising possibilities. Yet, I haven’t always found it easy to accept. 

## How I've Learned to Leverage Ambiguity

I previously struggled to embrace ambiguity because of my perfectionism. As a result, I would rush to the obvious solution to a challenge and perfect it, instead of permitting myself to discover other directions. 

Nowadays, I treat the open-ended aspects of my projects as opportunities to go beyond the obvious. 

For instance, when planning vacations, I no longer immediately pick one destination. I first make a list of potential destinations and eliminate a few of these after researching fun activities and the best times to travel to each place. Only then do I make a final selection.

In writing software, I've found that brainstorming various software architectures and examining their tradeoffs has enabled me to avoid overengineering solutions and find opportunities to simplify my code.

I’ve also found creative exploration necessary in doing web design. This has pushed me to experiment with different fonts, layouts, and visual motifs to see what matches the brand I’m designing for. Here, I've been able to discover interesting design ideas I wouldn't have previously thought of. 

## Handling Too Much Ambiguity

With that being said, too much ambiguity hinders progress. If the breadth of potential avenues is endlessly vast, it becomes cumbersome to identify which ones to explore. 

These instances require a clearer vision, which necessitates setting narrower constraints. Doing so empowers you to leverage ambiguity as a bridge towards meaningful opportunities for innovation. 

## Conclusion
Ambiguity is a crucial ingredient in all creative endeavors. 

Treat it as an asset rather than a deficit. Lean into it to add a personal touch to your work and discover innovative approaches you wouldn’t have thought possible. Constrain it when it hinders your progress. 

In doing so, you’ll transform the unknown into a canvas for your imagination. 