---
title: Simplifying My Website's CSS Using Tailwind
category: 'swe'
tags: ['web-development', 'programming']
description: Discussing my transition from using a centralized CSS style sheet to adopting a component-based approach with Tailwind CSS.
date: 2023-08-05
---

Have you ever struggled to organize your CSS styles, especially as your project scales? Indeed, my own experiences have taught me that learning best practices for maintaining CSS for larger projects isn't straightforward. It was only after working through Josh Comeau's [Joy of React course](https://www.joyofreact.com/) that I stumbled upon some insights regarding this. 

Despite the course's focus on creating React apps, it presented strategies for maintaining CSS applicable across component-based frameworks like React or Svelte, the latter of which I've used to build my website. One game-changing lesson was the practice of scoping CSS styles to individual components instead of applying these styles globally. 

This got me to reconsider how I've implemented CSS for my website. Initially, I defined custom CSS classes used throughout the website in just one file. However, I eventually shifted towards making better use of the utility classes provided by the [Tailwind CSS](https://tailwindcss.com/) framework. 

In this post, I'll go over some of the pitfalls of my previous approach, describe some solutions I could have adopted, and reveal why I decided to stick with using Tailwind. 

## The Pitfalls of Centralizing All CSS Styles

When I created my first website using [Eleventy](https://www.11ty.dev), I kept all of the CSS styles in a single stylesheet. At the time, this seemed reasonable for a small project. I even continued with this practice after rebuilding my website using SvelteKit.

However, after working through the first module of the Joy of React course (specifically the section titled *Styling in React*) I began to recognize a drawback to this approach.

As a project gets larger, it can become cumbersome to keep all styles within a single stylesheet. For instance, you might have several different types of buttons, each of which may require a `.button` class. But over time, you may need to add more classes to style different types of buttons such as `.button-primary`, `.button-secondary`, and `.button-submit`. 

Sometimes, refactoring old CSS rules may not be feasible. This can lead you to adopt the practice of applying multiple CSS classes to style one element. For example, you may end up having to use both the `.button` and `.primary-button` styles to style a primary button. This will solve short-term problems with styling. But it may add more complexity to your code in the long run as you add new features. 

The bigger problem that can occur is that your stylesheet will eventually become bloated with a lot of CSS classes. If you need to create a new class you would have to look over your existing CSS to make sure you haven't already defined this class elsewhere for a different purpose. This adds unnecessary friction to defining new style classes, hampering your productivity.

So, how can we mitigate this issue? Are there strategies to manage the chaos of clashing CSS classes and the complexity of multiple classes for a single element? The good news is that component-based frameworks have tools to address this challenge.

## Scoped CSS: A Component-Based Approach

In the Joy of React course, Josh, the instructor, talked about components as abstractions that encapsulate three things: HTML markup, JavaScript logic, and CSS styles. Here, locally scoping CSS styles to components mitigates the problem of making sure you don't have duplicate CSS classes defined throughout the project. Modern frontend frameworks provide easy ways to achieve this. 

React external libraries such [CSS Modules](https://github.com/css-modules/css-modules) and [Emotion](https://github.com/emotion-js/emotion) scope style definitions to components. In contrast, Svelte allows you to [define locally-scoped style rules directly within the component definition](https://svelte.dev/docs/svelte-components#style). 

I learned about this feature early on as I rebuilt my website using Svelte. But I opted not to use it. However, after working through Josh's course I decided to reconsider this choice.

## Tailwind CSS:  The Game Changer in my CSS Workflow

There's one curious aspect regarding how I defined used to define my CSS rules. I had been using [Tailwind CSS](https://tailwindcss.com/)  but never to its full potential. I liberally incorporated the framework's utility classes into my custom CSS classes using the [`@apply` directive](https://tailwindcss.com/docs/functions-and-directives#apply) instead of directly using the provided utility classes to style my components. 

Given the [official documentation's](https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction) stance on this, I realized this was a mistake. After reading the documentation, along with  [this article](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b), and [other discussions on Hacker News](https://news.ycombinator.com/item?id=35353182) I soon recognized that Tailwind CSS solves two major problems:

1. Eliminating the need for unique descriptive names for style classes
2. Facilitating locally scoped styles for components

Interestingly enough, when styling components the issue of how to name the style classes remains. The challenge is not so much to do with how to name them to avoid duplicating style class definitions. Instead, the issue now has to do with how to name classes such that their intended purpose is clear. This challenge arises especially in cases where you have multiple nested `div` tags in a component.

The [official Tailwind CSS documentation illustrates this](https://tailwindcss.com/docs/utility-first), using a chat notification component as an example. This component requires multiple classes to style nested elements such as the title of the notification, the notification message, a container for both, and more. At a certain point, coming up with unique descriptive names becomes tedious, especially when a class needs only one style.

A common workaround is to use inline styles. But in most cases I would prefer keeping CSS styles defined in one place unless it's necessary.

The utility classes provided by Tailwind CSS provide a more convenient alternative. In combination with component-based frameworks, modifying styling becomes as easy as adding or removing classes from relevant components, or creating entirely new components to implement new features.

## Refactoring My Website's CSS

I refactored my CSS by styling components using Tailwind's utility classes as often as possible. Despite how easy this process was, it wasn't a perfect solution in all situations.

For instance, I had to use `@apply` directive in my `ArticleBodyText` Svelte component that I use as a container for my blog posts. This component wraps text content, from markdown files, within `section` tags. Within this component, the style tag included rules such as these two below:

```html
<style lang="postcss">
section {
	@apply text-gray-600 pb-12;
}

section :global(p) {
	@apply font-normal text-base;
	@apply leading-8 mb-5;
}
</style>
```

I needed to apply these specific styles to the text content inside my articles. To achieve this, I used the [`:global(...)` modifier](https://svelte.dev/docs#component-format-style). This modifier is necessary because my blog posts are written in markdown and pre-processed using [mdsvex](https://github.com/pngwn/MDsveX) before the content is passed into the `ArticleBodyText` component slot. The `:global(...)` modifier ensures that these styles are applied correctly to this pre-processed content.


## Conclusion

Learning to manage CSS effectively has been a journey of discovery. As I continued to develop my website, it became evident that maintaining a single CSS file was an impractical approach. Resources like the Joy of React course and practical experiences guided me towards embracing component-scoped CSS, a strategy applicable across different frameworks.

Tailwind CSS greatly simplified this transition. Its utility-first ideology proved to be both flexible and efficient, helping me to keep styles encapsulated and well-organized.
