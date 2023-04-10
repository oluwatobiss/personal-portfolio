import educativeAnswers from "@/public/guest-posts/educative/educative-answers-oluwatobi-sofela.webp";

const educativeAnswersPostsInfoArray = [
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "What is a non-primitive data type?",
    about:
      "Non-primitive data types are JavaScript objects used to bundle multiple items into a single value. In other words, objects allow us to store multiple items in a JavaScript variable—that accepts only a single element.",
    publishedDate: "2022-11-28",
    link: "https://www.educative.io/answers/what-is-a-non-primitive-data-type",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "How to use async and await in JavaScript",
    about:
      "An async keyword turns a regular function into an asynchronous function. An await keyword instructs a function to wait for a promise to be settled before continuing its execution.",
    publishedDate: "2022-11-24",
    link: "https://www.educative.io/answers/how-to-use-async-and-await-in-javascript",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "What is a primitive data type?",
    about:
      "Primitive data types are the basic values we use to build a webpage. A primitive value is neither a property nor a method. It is a basic value used in a property, method, variable, or function.",
    publishedDate: "2022-11-24",
    link: "https://www.educative.io/answers/what-is-a-primitive-data-type",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "How to use an ES modules aggregator file",
    about:
      "An aggregator file is a script we solely use to import and re-export the exported items of other modules. This article shows the required steps to create and use an aggregator file.",
    publishedDate: "2022-06-03",
    link: "https://www.educative.io/answers/how-to-use-an-es-modules-aggregator-file",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "How to rename exports and imports in ES Modules",
    about:
      'We use the "as" keyword to rename the code we import and export. You can rename multiple imports or exports by separating each "as" statement with a comma.',
    publishedDate: "2022-06-02",
    link: "https://www.educative.io/answers/how-to-rename-exports-and-imports-in-es-modules",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "How to publish apps to NPM",
    about:
      "NPM is a free registry for public package authors. We can use it to publish projects that have a package.json file. The article shows the steps required to share your package with the world!",
    publishedDate: "2022-05-25",
    link: "https://www.educative.io/answers/how-to-publish-apps-to-npm",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "How to use an ES module and webpack",
    about:
      "ES module is a file that allows us to export its code. Webpack is a tool developers use to bundle an application's modules and dependencies into a single browser-compatible JavaScript file.",
    publishedDate: "2022-05-20",
    link: "https://www.educative.io/answers/how-to-use-an-es-module-and-webpack",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "How to edit text on double-click in ReactJS",
    about:
      "This article shows the steps required to edit the text of a page on double-click. To follow along, make sure you've installed Node 10.16 and NPM 5.6 on your system.",
    publishedDate: "2022-04-15",
    link: "https://www.educative.io/answers/how-to-edit-text-on-double-click-in-reactjs",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "What is declaration vs. initialization vs. invocation?",
    about:
      "Declaration declares the creation of variables and functions. Initialization assigns initial values to variables. Invocation executes a piece of code.",
    publishedDate: "2022-02-10",
    link: "https://www.educative.io/answers/what-is-declaration-vs-initialization-vs-invocation",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "What is array and object destructuring in JavaScript?",
    about:
      "Array destructuring extracts an array's value into new variables neatly. Object destructuring extracts an object's value into new variables neatly.",
    publishedDate: "2022-01-15",
    link: "https://www.educative.io/answers/what-is-array-and-object-destructuring-in-javascript",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "What are rest parameters and rest variables in JavaScript?",
    about:
      "A JavaScript rest parameter comprises the rest operator and a regular parameter name. A JavaScript rest variable consists of the rest operator and a variable.",
    publishedDate: "2021-11-24",
    link: "https://www.educative.io/answers/what-are-rest-parameters-and-rest-variables-in-javascript",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "What is a web address?",
    about:
      "A web address or URL is a website's specific location. In other words, a URL is a text string that specifies the location of webpages, images, or videos on the internet.",
    publishedDate: "2021-10-30",
    link: "https://www.educative.io/answers/what-is-a-web-address",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "What is DNS Hierarchy?",
    about:
      'A DNS hierarchy is a system used to sort the parts of a domain according to their importance. This article uses "www.codesweetly.com" to explain the DNS Hierarchy tree.',
    publishedDate: "2021-10-21",
    link: "https://www.educative.io/answers/what-is-dns-hierarchy",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "What is a CSS unit?",
    about:
      "A CSS unit is the standard of measurement used in CSS to express the size of a specific element's property. This article uses examples to discuss the two types of CSS units.",
    publishedDate: "2021-07-26",
    link: "https://www.educative.io/answers/what-is-a-css-unit",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "Pure function vs. impure function",
    about:
      "An impure function is a function that contains one or more side effects. A pure function is a function without any side effects.",
    publishedDate: "2021-07-23",
    link: "https://www.educative.io/answers/pure-function-vs-impure-function",
  },
  {
    imgSrc: educativeAnswers,
    imgAlt: "Educative Answers Logo",
    host: "Educative Answers",
    title: "What is a side effect?",
    about:
      "Side effect occurs in a program when you use an external code in your function, which impacts the function's ability to perform its task.",
    publishedDate: "2021-07-20",
    link: "https://www.educative.io/answers/what-is-a-side-effect",
  },
];

export default educativeAnswersPostsInfoArray;
