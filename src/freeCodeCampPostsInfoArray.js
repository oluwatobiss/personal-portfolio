import cssGrid from "@/public/guest-posts/freecodecamp/complete-css-grid-guide.jpg";
import cssFlexbox from "@/public/guest-posts/freecodecamp/complete-css-flexbox-guide.jpg";
import functionsInJS from "@/public/guest-posts/freecodecamp/javascript-function-explained.png";
import testDrivenDevelopment from "@/public/guest-posts/freecodecamp/tdd-tutorial.jpg";
import javaScriptModules from "@/public/guest-posts/freecodecamp/javascript-es-modules.jpg";
import packageManager from "@/public/guest-posts/freecodecamp/package-manager-explained.jpg";
import temporalDeadZone from "@/public/guest-posts/freecodecamp/tdd-explained.jpg";
import destructuring from "@/public/guest-posts/freecodecamp/array-vs-object-destructuring.jpg";
import restVsSpread from "@/public/guest-posts/freecodecamp/rest-vs-spread-operators.png";
import lexicalScope from "@/public/guest-posts/freecodecamp/javascript-lexical-scope.jpg";
import pureVsImpureFunctions from "@/public/guest-posts/freecodecamp/pure-vs-impure-function.png";
import minimaxAlgorithm from "@/public/guest-posts/freecodecamp/minimax-algorithm.jpg";
import gitVsGitHub from "@/public/guest-posts/freecodecamp/git-vs-github.jpg";

const freeCodeCampPostsInfoArray = [
  {
    imgSrc: cssGrid,
    imgAlt: "CSS Grid Handbook",
    host: "freeCodeCamp",
    title:
      "CSS Grid Handbook – Complete Guide to Grid Containers and Grid Items",
    about:
      "CSS Grid gives you the tools to create basic and advanced website layouts in responsive ways that look great on mobile, tablet, and desktop devices. This tutorial discusses everything you need to know to use CSS Grid like a pro.",
    publishedDate: "2023-03-16",
    link: "https://www.freecodecamp.org/news/complete-guide-to-css-grid/",
  },
  {
    imgSrc: cssFlexbox,
    imgAlt: "CSS Flexbox Article",
    host: "freeCodeCamp",
    title:
      "CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items",
    about:
      "CSS Flexbox gives you the tools to create basic and advanced website layouts in flexible and responsive ways. This tutorial discusses everything you need to know to use Flexbox like a pro.",
    publishedDate: "2022-10-28",
    link: "https://www.freecodecamp.org/news/css-flexbox-complete-guide/",
  },
  {
    imgSrc: functionsInJS,
    imgAlt: "JavaScript Functions Tutorial",
    host: "freeCodeCamp",
    title:
      "JavaScript Functions Tutorial – IIFE, Function Parameters, and Code Blocks Explained",
    about:
      "Functions are one of the most widely-used features in programming. So, it helps to have a solid understanding of how they work. This tutorial discusses everything you need to know to use JavaScript functions like a pro.",
    publishedDate: "2022-10-05",
    link: "https://www.freecodecamp.org/news/javascript-function-iife-parameters-code-blocks-explained/",
  },
  {
    imgSrc: testDrivenDevelopment,
    imgAlt: "Test-Driven Development Tutorial",
    host: "freeCodeCamp",
    title:
      "Test-Driven Development Tutorial – How to Test Your JavaScript and ReactJS Applications",
    about:
      "Understanding test-driven development is an essential part of being a prolific software developer. Testing provides a solid platform for building reliable programs. This tutorial will show you all you need to implement test-driven development in your JavaScript and React applications.",
    publishedDate: "2022-07-26",
    link: "https://www.freecodecamp.org/news/test-driven-development-tutorial-how-to-test-javascript-and-reactjs-app/",
  },
  {
    imgSrc: javaScriptModules,
    imgAlt: "The JavaScript Modules Handbook",
    host: "freeCodeCamp",
    title:
      "The JavaScript Modules Handbook – Complete Guide to ES Modules and Module Bundlers",
    about:
      "Modules and Module Bundlers are essential components of modern web development. But understanding how they work can quickly become overwhelming. This handbook will show you all you need to know about ES Modules and Module Bundlers in plain English.",
    publishedDate: "2022-05-11",
    link: "https://www.freecodecamp.org/news/javascript-es-modules-and-module-bundlers/",
  },
  {
    imgSrc: packageManager,
    imgAlt: "JavaScript Package Manager",
    host: "freeCodeCamp",
    title: "JavaScript Package Manager – Complete Guide to NPM and Yarn",
    about:
      "A package manager is a tool developers use to automate finding, downloading, installing, configuring, upgrading, and removing a system's packages. This article will show you all you need to get started with package managers like NPM and Yarn.",
    publishedDate: "2022-04-05",
    link: "https://www.freecodecamp.org/news/javascript-package-manager-npm-and-yarn/",
  },
  {
    imgSrc: temporalDeadZone,
    imgAlt: "Temporal Dead Zone",
    host: "freeCodeCamp",
    title:
      "Temporal Dead Zone (TDZ) and Hoisting in JavaScript – Explained with Examples",
    about:
      "Temporal Dead Zone and Hoisting are two essential terms in JavaScript. But understanding how they work can easily confuse you if you don't approach them properly. But don't fret! This article is here to help you get a good grasp of the two terms.",
    publishedDate: "2022-01-24",
    link: "https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/",
  },
  {
    imgSrc: destructuring,
    imgAlt: "Array vs Object Destructuring",
    host: "freeCodeCamp",
    title:
      "Array vs Object Destructuring in JavaScript – What's the Difference?",
    about:
      "The destructuring assignment in JavaScript provides a neat and DRY way to extract values from your arrays and objects. This article aims to show you exactly how array and object destructuring assignments work in JavaScript.",
    publishedDate: "2021-11-10",
    link: "https://www.freecodecamp.org/news/array-vs-object-destructuring-in-javascript/",
  },
  {
    imgSrc: restVsSpread,
    imgAlt: "Rest vs Spread Operator",
    host: "freeCodeCamp",
    title: "JavaScript Rest vs Spread Operator – What's the Difference?",
    about:
      "JavaScript uses three dots (...) for both the rest and spread operators. But these two operators are not the same. The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array",
    publishedDate: "2021-09-15",
    link: "https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/",
  },
  {
    imgSrc: lexicalScope,
    imgAlt: "Lexical Scope",
    host: "freeCodeCamp",
    title: "Lexical Scope in JavaScript – What Exactly Is Scope in JS?",
    about: `The term "lexical scope" may seem tricky to grasp at first glance. But it's helpful to understand what each word means. So this article will explain lexical scope by first examining the meaning of "lexical" and "scope".`,
    publishedDate: "2021-08-19",
    link: "https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/",
  },
  {
    imgSrc: pureVsImpureFunctions,
    imgAlt: "Pure vs Impure Functions",
    host: "freeCodeCamp",
    title:
      "Pure vs Impure Functions in Functional Programming – What's the Difference?",
    about:
      "Pure functions and impure functions are two programming terms you will often see in functional programming. One core difference between these two types of functions is whether or not they have side effects.",
    publishedDate: "2021-08-09",
    link: "https://www.freecodecamp.org/news/pure-function-vs-impure-function/",
  },
  {
    imgSrc: minimaxAlgorithm,
    imgAlt: "Minimax Algorithm Guide",
    host: "freeCodeCamp",
    title: "Minimax Algorithm Guide: How to Create an Unbeatable AI",
    about:
      "Recently I wondered – how can I program the computer to be unbeatable in a tic-tac-toe game? Well, I thought I could easily get an answer to this question. But as I went back and forth from articles to videos to a series of coding meditations, I only succeeded in becoming more confused.",
    publishedDate: "2020-12-09",
    link: "https://www.freecodecamp.org/news/minimax-algorithm-guide-how-to-create-an-unbeatable-ai/",
  },
  {
    imgSrc: gitVsGitHub,
    imgAlt: "Git vs GitHub",
    host: "freeCodeCamp",
    title: "Git vs GitHub – What is Version Control and How Does it Work?",
    about:
      "Have you ever been confused by how Git and GitHub work? Don't fret — you are not alone. Git and GitHub can be tricky sometimes, but by the end of this post you will have a good grasp of the two.",
    publishedDate: "2020-08-19",
    link: "https://www.freecodecamp.org/news/git-and-github-overview/",
  },
];

export default freeCodeCampPostsInfoArray;
