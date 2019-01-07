---
title: The Funky World of Frontend Dev
date: "2018-08-19T16:25:03.284Z"
---

I've been progressing pretty steadily as a web developer over the years, and I find myself especially enjoying UI design and front-end development. However, I never got to work with one of the cool, hip frontend JavaScript frameworks / libraries. And there's probably good reason for this, because the world of frontend JavaScript is [notoriously crazy](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f).

This summer, I dove straight into the world of frontend. I decided to try my hand at the big three frontend libraries / frameworks (React, Vue, and Angular) and have lived to tell the tale. These are some of my thoughts on working with each of the three, from the perspective someone completely new to these libraries / frameworks.

**Note**: Just like every other blog post talking about frameworks and libraries, everything written here are my opinions.

## Angular (2+)
When you search for Angular online, you'll find that it has a lot of baggage that isn't relevant to how it works as a framework. A lot of people online are either mad about how Google "botched" the transition between AngularJS and Angular 2+, or that Angular is a big, opinionated framework that makes you do everything the way they require. I will say, it was sort of confusing understanding why there was an AngularJS when there was also an Angular, and how they were different.

After seeing a lot of this, I didn't really want to learn Angular. I wanted to learn something with more cachet like React or Vue. However, this summer I was working at Fidelity, where they exclusively use Angular on the frontend, so I was definitely willing to give it a shot.

Over the summer, I developed one Angular application from scratch and extended an existing application, so I got to dive pretty deep into all that Angular has to offer.

These were my initial thoughts:
* The talk about Angular being big does seem true. You can't plop it down in an existing project and start working with it; you'll likely have to use the Angular CLI (which is pretty solid though) to get a project up and running.
    * Building with Angular feels a lot more like building a fully fledged application rather than just a simple website, which of course, is neither good nor bad. It all depends on your use cases.
    * Since Angular is a framework, it does force you to do certain things, like dependency injection, services, and registering all the components and services and stuff into the app module.
* Once you get past that though (and I could because I had a decent amount of time on my hands the first few weeks at Fidelity), it is a good framework, especially for building applications in an enterprise setting. 
    * I think the way Angular organizes itself with components and services lends itself to being useful for a lot of corporations which have bigger needs, and need a structure in place that addresses those needs.
* I also think that Angular is a good stepping stone from HTML + CSS + JS / jQuery because it sticks with that general philosophy throughout the framework.
    * It introduces users to a more modern philosophy of developing for the web, that is through web components (i.e. a header component, a login component, etc.), where each component has a structure (HTML), style (CSS), and logic (TypeScript, a superset of JavaScript).
* The different directives, event listeners, and other stuff are decent. I don't think passing things into a component is as easy as React and Vue, because Angular has some weird names

Overall, I think Angular gets a bad rap because its messy past, which definitely caused many developers to not trust the development team. I will say though, working with Angular is still pretty nice, and it is definitely a great framework, especially for enterprise applications which require a lot of structure.

## React
My software engineering professor compared React and jQuery by saying jQuery was like sprinkling in functionality here and there into a website, whereas React is like "Hey, hold my hand, and we'll jump off this cliff together" - that is it's radically different, but once you get used to it, it's a great tool to develop with. I didn't really know what he meant at the time, but I sort of get it now.

I think at first glance, React seems like it has annoying quirks. The JSX thing is weird because it's supposed to look like and function like HTML, but it's not. And there's the notorious `<div className="something">`, which just seems like you have to learn some BS new terminology for no reason even though it eventually gets compiled into the attribute "class" anyway.

I have heard people say before that React is relatively easy to pick up, and I'm not 100% sure I agree with them. I think there are things that are easy, but if you have been working with HTML, CSS, and JS, it does require a decent amount of re-thinking the way you build your applications.

Unlike Angular, it is possible to plop in a link to the React and React DOM scripts through a CDN and start using it, but I don't think that's a very practical way to learn / start using React. This is because the way that you use React to write structure, style, or logic is generally radically different than traditional HTML, CSS, and JavaScript. React embraces the world of "everything is JavaScript". You don't write HTML, you write JSX, which is actually just HTML-looking code that compiles into JavaScript, which React then renders into the webpage itself. And people say "well, you don't need to use JSX to use React", but generally speaking the syntax for making a div is something like `React.createElement('div', ...)`, which is definitely significantly more foreign looking than what you're used to with HTML, CSS, and JavaScript. There's also a wave of people who prefer using CSS-in-JS rather than just CSS files.

The fact that everything is moved into JavaScript makes React different than your traditional HTML, CSS, and JavaScript, and thus, there is definitely a learning curve for moving into the React ecosystem.

However, it is also worth noting that moving structure and style into JavaScript gives React power, in terms of the fact that you don't really have to deal with new, arbitrary directives that someone came up with for a library or a templating language that still relies on HTML. Instead, you can leverage the power of JavaScript to create the structure of your application (like a map or a filter), rather than trying to make plain old HTML work better.

React was built to manage state in applications, and I think a lot of the design choices (like the focus it puts on setState and other stuff) reflects that.

I'm still in the beginning stages of learning React, but I think it has a lot of potential, and I can sort of see why so many people use it. 

Maybe setState makes it easier to keep track of what your state is?

The commenting is pretty weird `{/* */}`

You always have to access properties through state, which I guess is good? but it's extra typing and seems weird (definitely different from Vue)

Y'know what? I'm really enjoying React! I like that everything is JavaScript. It feels nice to use logic everywhere. The structure, style, and logic are mingled together. 

I hated how the CSS names were kabob-case and the JavaScript style stuff was camelCase, but I kind of like it now. Everything feels unified.

Other frameworks have different languages for representing everything - HTML for the structure, CSS for the style, JavaScript for functionality and logic. Then, the framework adds on directives and all this other stuff on top of it all.

React seems to unify it all together, and for some reason, it is fun to work with. (I think part of it is also just how fast it responds to my changes whenever I make them).

lol media queries and pseudo-selectors requiring a third party package is still pretty wack tho

There are some annoying, kind of counterintuitive things with it I don't like:
* this.state.askldlksdflk.dsfosad so many nested variables
* className? really? onClick, weird JSX stuff that is kinda like HTML but not
* have to use arrow functions to not deal with problems with "this" keyword
    * this also applies to Vue
    * nvm, it's more important for React because you can't pass state changing event handlers without using functionName = () => {}, you can't use ES6 function syntax
* set state
* .bind(this)

## Vue
Yo, I love this framework. Moving over from HTML, CSS, and JS / jQuery to using HTML, CSS, and Vue.js feels so intuitive, and I really appreciate that a lot. Especially because I learned Angular before these other frameworks, I found the v-for, v-model directives to be great and an intuitive way of making dynamic, interactive web applications. 

I'm not saying that the philosophy that Vue follows is necessarily "better" than Angular or React, but in my opinion, it does the best job giving developers a stepping stone between tradition HTML, CSS, and JS development into newer web development practices.


## No Framework or Library
Frameworks and libraries should be used if they can help you tackle the problem you're trying to solve, not for the sake of just using it to use it. In fact, many people have given talks about [not using frameworks whatsoever](https://www.youtube.com/watch?v=k7n2xnOiWI8).

I've been able to make plenty of cool projects before learning a frontend framework or library, and anyone else can too. As long as you get the fundamentals down (HTML, CSS, JavaScript), you'll be fine. Don't sweat it.