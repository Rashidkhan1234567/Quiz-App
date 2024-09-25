const htmlQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "High Text Machine Language",
      "Hyperlink Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which tag is used for the largest heading?",
    options: ["<heading>","<h1>", "<h6>", "<h3>"],
    answer: "<h1>",
  },
  {
    question: "Which tag is used for a line break?",
    options: ["<br>", "<lb>", "<break>", "<line>"],
    answer: "<br>",
  },
  {
    question: "What is the correct HTML element for inserting an image?",
    options: [ "<picture>", "<image>", "<photo>" , "<img>"],
    answer: "<img>",
  },
  {
    question: "Which HTML element is used to define the title of a document?",
    options: ["<title>", "<head>", "<meta>", "<document>"],
    answer: "<title>",
  },
];

const cssQuestions = [
  {
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "back-color"],
    answer: "background-color",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size",
  },
  {
    question: "Which property is used to make text bold?",
    options: ["font-weight", "font-style", "text-bold", "text-weight"],
    answer: "font-weight",
  },
  {
    question: "How do you select an element with id 'header' in CSS?",
    options: ["#header", ".header", "header", "*header"],
    answer: "#header",
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: ["text-color", "color", "font-color", "background-color"],
    answer: "color",
  },
];

const javascriptQuestions = [
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"],
    answer: "Netscape",
  },
  {
    question: "What is the correct syntax for referring to an external script?",
    options: [
      "<script href='xx.js'>",
      "<script src='xx.js'>",
      "<script name='xx.js'>",
      "<script file='xx.js'>",
    ],
    answer: "<script src='xx.js'>",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "msg('Hello World')",
      "alert('Hello World')",
      "alertBox('Hello World')",
      "msgBox('Hello World')",
    ],
    answer: "alert('Hello World')",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "#", "/*", "<!--"],
    answer: "//",
  },
  {
    question:
      "Which method is used to parse a string to an integer in JavaScript?",
    options: ["parseInt()", "getInteger()", "intParse()", "toInt()"],
    answer: "parseInt()",
  },
];

const javaQuestions = [
  {
    question: "Who invented Java?",
    options: [
      "James Gosling",
      "Dennis Ritchie",
      "Bjarne Stroustrup",
      "Guido van Rossum",
    ],
    answer: "James Gosling",
  },
  {
    question: "Which is a valid keyword in Java?",
    options: ["interface", "string", "Float", "unsigned"],
    answer: "interface",
  },
  {
    question: "Which method is used to start a thread in Java?",
    options: ["run()", "start()", "init()", "begin()"],
    answer: "start()",
  },
  {
    question: "Which keyword is used to define a class in Java?",
    options: ["class", "define", "new", "struct"],
    answer: "class",
  },
  {
    question: "What is the default value of a boolean in Java?",
    options: ["true", "false", "0", "null"],
    answer: "false",
  },
];

const pythonQuestions = [
  {
    question: "Which keyword is used for function in Python?",
    options: ["func", "def", "function", "lambda"],
    answer: "def",
  },
  {
    question: "What is the output of print(2 ** 3)?",
    options: ["6", "8", "9", "7"],
    answer: "8",
  },
  {
    question: "How do you create a variable in Python?",
    options: ["var x = 10", "x = 10", "int x = 10", "let x = 10"],
    answer: "x = 10",
  },
  {
    question: "Which keyword is used to handle exceptions in Python?",
    options: ["catch", "except", "try", "throw"],
    answer: "except",
  },
  {
    question: "Which of the following is a mutable data type in Python?",
    options: ["tuple", "list", "string", "int"],
    answer: "list",
  },
];

const laravelQuestions = [
  {
    question: "Laravel is an open-source framework for which language?",
    options: ["PHP", "JavaScript", "Python", "Java"],
    answer: "PHP",
  },
  {
    question: "Which command is used to start a Laravel project?",
    options: [
      "laravel new projectname",
      "laravel start",
      "php new project",
      "php artisan start",
    ],
    answer: "laravel new projectname",
  },
  {
    question: "Which function is used to define routes in Laravel?",
    options: ["Router", "Route", "Path", "Mapping"],
    answer: "Route",
  },
  {
    question: "Which ORM is used in Laravel?",
    options: ["ActiveRecord", "Eloquent", "Doctrine", "Hibernate"],
    answer: "Eloquent",
  },
  {
    question: "Which command is used to run migrations in Laravel?",
    options: [
      "php artisan migrate",
      "php artisan migrate:run",
      "laravel migrate",
      "php migrate",
    ],
    answer: "php artisan migrate",
  },
];

const nodejsQuestions = [
  {
    question: "Node.js is based on which JavaScript engine?",
    options: ["SpiderMonkey", "V8", "JavaScriptCore", "Chakra"],
    answer: "V8",
  },
  {
    question: "Which module is used to create a server in Node.js?",
    options: ["http", "fs", "url", "path"],
    answer: "http",
  },
  {
    question: "Which of the following is a core module in Node.js?",
    options: ["events", "express", "mongoose", "lodash"],
    answer: "events",
  },
  {
    question: "How do you import modules in Node.js?",
    options: [
      "import module from 'module'",
      "require('module')",
      "include 'module'",
      "load('module')",
    ],
    answer: "require('module')",
  },
  {
    question: "What is the default port number for a Node.js server?",
    options: ["3000", "8080", "8000", "4000"],
    answer: "3000",
  },
];

const phpQuestions = [
  {
    question: "What does PHP stand for?",
    options: [
      "Personal Home Page",
      "Hypertext Preprocessor",
      "Pretext Hypertext Processor",
      "Preprocessor Home Page",
    ],
    answer: "Hypertext Preprocessor",
  },
  {
    question: "Which symbol is used to represent variables in PHP?",
    options: ["&", "$", "#", "*"],
    answer: "$",
  },
  {
    question: "Which function is used to print output in PHP?",
    options: ["echo", "print", "output", "console"],
    answer: "echo",
  },
  {
    question: "How do you start a PHP script?",
    options: ["<?php", "<script>", "<php>", "<p>"],
    answer: "<?php",
  },
  {
    question: "Which of the following is a PHP array function?",
    options: ["array_push()", "append()", "array_add()", "list_add()"],
    answer: "array_push()",
  },
];

const rubyQuestions = [
  {
    question: "Who created Ruby?",
    options: [
      "Yukihiro Matsumoto",
      "James Gosling",
      "Brendan Eich",
      "Larry Wall",
    ],
    answer: "Yukihiro Matsumoto",
  },
  {
    question: "Which symbol is used for comments in Ruby?",
    options: ["//", "#", "/*", "--"],
    answer: "#",
  },
  {
    question: "Which keyword is used to define a method in Ruby?",
    options: ["def", "func", "method", "lambda"],
    answer: "def",
  },
  {
    question: "Which method is used to convert a string to an integer in Ruby?",
    options: ["to_i", "parseInt", "int", "convert"],
    answer: "to_i",
  },
  {
    question: "Which framework is Ruby most famous for?",
    options: ["Ruby on Rails", "Sinatra", "Django", "Laravel"],
    answer: "Ruby on Rails",
  },
];

const typescriptQuestions = [
  {
    question: "TypeScript is developed by which company?",
    options: ["Google", "Microsoft", "Facebook", "Apple"],
    answer: "Microsoft",
  },
  {
    question: "Which is the correct file extension for TypeScript files?",
    options: [".ts", ".tsx", ".js", ".jsx"],
    answer: ".ts",
  },
  {
    question: "What is TypeScript?",
    options: [
      "A superset of JavaScript",
      "A replacement for JavaScript",
      "A new programming language",
      "A database",
    ],
    answer: "A superset of JavaScript",
  },
  {
    question: "Which of the following is a TypeScript data type?",
    options: ["number", "Integer", "Float", "None"],
    answer: "number",
  },
  {
    question: "Which command compiles TypeScript into JavaScript?",
    options: ["tsc", "compile", "typescript", "ts-run"],
    answer: "tsc",
  },
];

export {
  javascriptQuestions,
  javaQuestions,
  pythonQuestions,
  laravelQuestions,
  nodejsQuestions,
  phpQuestions,
  rubyQuestions,
  typescriptQuestions,
  htmlQuestions,
  cssQuestions,
};
