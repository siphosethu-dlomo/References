// Generator functions - they generate random: - lower and upper case alphabets, - numbers- and symbols 

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[],.=<>/~?+';
  return symbols[Math.floor((Math.random() * symbols.length))];
}


/* ---------------------------------------------------------------------------------------------------- */

// Object.values() - returns an array of the keys' values of the object taken as an argument
// use case: if you want the values of the object's keys in an array format

function myFunc () {
  let poe = {
  okay: 1,
  okay2: 3,
  okk: 5,
  sam: 'yes'
}

  return Object.keys(poe);
}

console.log(myFunc()); // (4) [1, 3, 5, 'yes']

let poe = {
  okay: 1,
  okay2: 3,
  okk: 5,
  sam: 'yes'
}

console.log(Object.values(poe));

// Object.keys() - does the same the method above but returns keys in array format instead of values
// (4) ['okay', 'okay2', 'okk', 'sam']

/*------------------------------------------------------------------------------------------------------- */

// check if checkbox is ticked or not. returns boolean. true if checkbox is checked/ticked & false if not ticked. numbbersEl got DOM element 

const hasNumber = numbersEl.checked;
const hasSymbol = symbolsEl.checked;

/* -------------------------------------------------------------------------------------------------------- */

// Creating a class 

class Account {
  constructor(//placeholder parameters) {
    // instance properties
  }
  static method
  getters & setters
}

const john = new Account(//args); // creating a new objects based on class

class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = 'Chase';

  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account('john', 0);
console.log(john);
console.log(john.name);
john.deposit(500);
console.log(john.bank);

const bob = new Account('bob', 700);
console.log(bob);
console.log(bob.name);
bob.deposit(1000);
console.log(bob.bank);
console.log(john.name);

/* -------------------------------------------------------------------------------------------------------- */

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim(); // .trim() trims white space - WHAT THE USER ADDS AS A TODO/form - that value is stored in todo
  
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset(); // reset() resets everything in the form - clears the form after the user submits
  }
});

// function adds HTML dynamiclly
const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `
  list.innerHTML += html; // add list item to ul dynamically. input from user

  // The [+=] means you add the HTML on top of the one that is there in the document.
  // An [=] will replace the current HTML 
}

// This is how you delete an element via event delegation: in this case you click on an icon (trash bin) and its deleted 

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove(); // deletes/removes the element (li) click
  }
});


//filtering function
// this filtering function is for filtering words like in todo app similar
// filters what the user has types for example
const filteringTodos = (term) => {
  Array.from(list.children) // gets the children of (ul - parent) turn them to array (they were HTMLCollect)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));
    // what this is doing: .filter() returns the value(s)[li - the children] that do not match the user input (what is typed by the user). This is done by the (!) otherwise without the (!) .filter() would return the value(s) that match the user input.
    // The .forEach() then adds the filtered class (which hides items via display: none) any value(s) that match the .filter() condition [the returned values] 

  Array.from(list.children) // gets the children of (ul - parent) turn to array
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
    // what this is doing: .filter() returns value(s) that do match user input 
    // The .forEach() then removes the filtered class on them 
}

//Filtering todos via keyup event
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase(); //SEARCH TERM/LETTER OF THE USER user input - each letter pressed/ .toLowerCase() turns input value to lowercase
  filteringTodos(term);
});

// search is the form

/* -------------------------------------------------------------------------------------------------------- */

//  Filtering names in materialize list group from Brad Traversy Filterable list

let filterInput = document.getElementById('filterInput');


filterInput.addEventListener('keyup', filterNames);

function filterNames() {
  // get value of input
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  

  // get names ul
  let ul = document.getElementById('names');
  // get li's from ul - get all li with the class of collection-item
  let li =  ul.querySelectorAll('li.collection-item');

  // loop throughh collection items li 
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0]; // gets individual a tags - each and every a tag
    
    // if matches
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

/* -------------------------------------------------------------------------------------------------------- */

// GETTING NAMES FROM AN ARRAY OF OBJECTS
// Results: john developer susan designer anna the boss 

const people = [
  { name: 'john', job: 'developer'},     
  { name: 'susan', job: 'designer'},    
  { name: 'anna', job: 'the boss'},     
];

const container = document.querySelector('.container'); // container for the people's names that will show  
const btn = document.querySelector('.btn'); // you click this button then people's name show up

const showPeople = () => {
  const newPeople = people   
    .map((person) => {
      const {name, job} = people;
      return `<p>${name} <strong>${job}</strong></p> ;`
    })
    .join('');
  container.innerHTML = newPeople;  
}; 
  
btn.addEventListener('click', () => {
  showPeople();
});

// store people array in a new variable then make a new copy of it via map() and then make changes below:
// you take each array item (an object) iteration via object destruction
// from each iteration (individual object) you take the name and job properties
// you return them in [``] wrapped in HTML take since way to put them in the container - do what you want
// this will return an array of item wrapped in HTML tags like done above [each item will be]
// then you chain join() in the map() method to turn the array into a string since you want as a string to be inserted in the document 
// then this string is inserted in the container (document) via  innerHTML. So container will 3 name-job pairs
// the function wghere all the above happens is ran in the event listener attached to the button. So when the user clicks on the button, 3 strings of name and job will show [in <p> tags]  


/* -------------------------------------------------------------------------------------------------------- */

// MODULES

// Named Modules

// 1.  The file you exporting:
// 

export const random = 78;

// 2.  The file you are importing:

import { random } from './utils/data.js'; // single item [variable]
import { random, people } from './utils/data.js'; // multiple items [variable and object (people)]
// you write the import keyword, the name of the data you are importing, from keyword and reletive path then the actual file needs to have a .js extension name

// In the index HTML file 
// you include the type attribute to the main js file in index.html [type=module]
<script type='module' src='./app.js' ></script> 

// 

/* -------------------------------------------------------------------------------------------------------- */
  // FETCH API

  const getFetch = fetch();

  fetch()
  .then((response) => {
    return response.json();   // if response is json 
    return  response.text();  // if response is text 
  }).then((data) => {

  }).catch((err) => {

  })

  //  the fetch() makes the http request to an API end point
  //  as argument it takes the resorce you want to fetch, it could be an endpoint API or Local JSON
  //  fetch() retuens a promise which will later resolve (success) or be rejected (error)
  //  to the fetch() you attach a .then() callback function to deal with fetch() when there's a resolve case
  //  at the end of that .then() method you attach a .catch() to handle cases of reject (error)
  //  response.json() - (returns a promise) | response.json() - takes the response (which is a JSON format) and turns it into an object so that it can be easily used in the your code
  //  data represents the data you need that you were requesting | which is now an object 
  //  in the second .then() you ave acess to the data you were requesting from the API for example
 


  fetch('todos/luigi.json').then((response) => {
    console.log('resolved', response);
    return response.json();
  }).then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log('rejected', err);
  });

  // Async &  Await

  // Async functions always return a promise  

  // this function  (called an async function because of the aysnc keyword) gets the data. Makes the Http request. Responsible for making HTTP requests and returns a promise

  const getTodos = async () => {

  };

  // you do not attach a .then() method to fetch()
  // the await keyword stops javascript from assigning the to the variable right away until the promise has resolved / until there's a response back / until fetch() returns a response then it is stored in the response variable 1
  // In const data - its the same process as above. The await keyword stops the javascript from assigning the value right away since response is a promise. Once it is done, its stored in data. This time, the promise from response is JSON so it is converted to a javascript object via the .json() | response.json()
  // the data is then return(ed) so you can get access to it (the data)
  // when you call the function and attach a .then() to it you get access to the object that converted (the data you want which can be used in the document)
  
  const getTodos = async () => {
    const response = await fetch('todos/luigi.json');
    const data = await response.json();
    return data;
  };

  getTodos().then((data) => {
    console.log(data);
  }). catch((err) => {
    console.log(err);
  });

  // throwing your own error

    const getTodos = async () => {
    const response = await fetch('todos/luigi.json');
    
    if (response.status !== 200) {
      throw new Error('cannot fetch the data');
    }

    const data = await response.json();
    return data;
  };

  getTodos().then((data) => {
    console.log(data);
  }). catch((err) => {
    console.log(err.message);
  });

  // another way of writing the above
  getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));

/* -------------------------------------------------------------------------------------------------------- */
  // STRING METHODS

  // return boolean
  startWith() - // check if string start with certain characters | the first characters or starting from a certain position | startWith('Peter') startWith('John', 6) => does the string start with John from position 6 | case sensitive
  endsWith() - // check if string ends with certain characters | the last characters or from a position back to front | endsWith('Jane') endsWith('Siphosethu', 9) => from position 9 to position zero does it end with Siphosethu | case sensitive  
  includes() - check if string includes certain character
  replace() - repeats a string certain time (amount eg 5 times)

/* -------------------------------------------------------------------------------------------------------- */
  //  For of loop

// for of - loops through the values of an iterable object
// String, Array,Map,Set etc  - NOT OBJECT
// unlike forEach - we can use break, continue

const fruits = ['apple', 'orange', 'banana', 'peach'];
const longName = 'John Smith Pepper III';
let shortName = '';

for (const letter of longName) {
  // console.log(letter);
  if (letter === ' ') {
    continue;
  } else {
    shortName += letter;
  }
}
// console.log(shortName);

for (const fruit of fruits) {
  if (fruit === 'banana') {
    // break; stops at banana
    continue; // continues to end
  }
  console.log(fruit);
}

/* -------------------------------------------------------------------------------------------------------- */

// Spread Operator ... [use it when you to create a new copy of eg an array]
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const udemy = 'udemy';
const letters = [...udemy]; // ['u', 'd', 'e', 'm', 'y']
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

const friends = [...boys, bestFriend, ...girls]; // ['john', 'peter', 'bob', 'susan', 'anna', 'arnold']
console.log(friends);

// const newFriends = [...friends];
// reference
const newFriends = friends;
newFriends[0] = 'karina';
console.log(newFriends);
console.log(friends);

// Spread Operator [with object]
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.
// ES2018 - ES8

const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, city: 'chicago', name: 'peter' }; // {name: "peter", job: "developer", city: "chicago"} | john is replaced with peter
console.log(person);
console.log(newPerson);

// Spread Operator [use when you want convert a NodeList or HTMLCollection to an array]
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const headings = document.querySelectorAll('h1'); // returns NodeList 
const result = document.getElementById('result');
const text = [...headings] // convert NodeList to an array
  .map(item => `<span>${item.textContent}</span>`)
  .join('');
console.log(text);

result.innerHTML = text;

// Spread Operator [working with function arguments]
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

const numbers = [23, 45, 66, 88, 2345];

console.log(Math.max(...numbers)); // split numbbers array into single items that can be used. Array directly does not work hence split them 

const john = ['john', 'sanders'];

const sayHello = (name, lastName) => {
  console.log(`Hello ${name} ${lastName}`);
};

sayHello(...john); // ...john ==> 'john', 'sanders

/* -------------------------------------------------------------------------------------------------------- */

// Rest Operator ...[used as last item]
// gathers/collects the items

//arrays
const fruit = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...fruits] = fruit;
// console.log(first, fruits);

//objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...rest } = person;
// const {  ...rest,job } = person;
// console.log(job, rest);

const testScores = [78, 90, 56, 43, 99, 65];

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}`);
};

getAverage(person.name, 78, 90, 56, 43);
getAverage(person.name, ...testScores);

/* -------------------------------------------------------------------------------------------------------- */
//  Array methods

//  Array.of() - creates a new array instance from a variable number of arguments

const friends = Array.of('john', 2, true); // [john, 2, true]

// Array.from() - turns array-like items (strings, nodeList, sets) into an array
//  has map() as second argument iterate every single item and placed in new array


/* -------------------------------------------------------------------------------------------------------- */
// Adding HTML via JS dynamically

// Example: A div with a text of hello <div> hello </div>

const bodyDiv = document.createElement('div'); // creating div element
const text = document.createTextNode('hello'); // creating text [string mainly]
bodyDiv.appendChild(text); // attaching the text node 
document.body.appendChild(bodyDiv); // attaching the div the main document [screen]

// Example:

const contentHeading = () => {
  const heading = document.createElement('h3');
  const headingText = document.createTextNode('Did you know..');
  heading.appendChild(headingText);
  yearContent.insertBefore(heading, factText);
};

// insertBefore(element, location); inserting element before an element. Takes the element you want insert and the location [location being the element you want to insert an (or this) element before which must be in a variable]


// ANOTHER WAY

// ex: insert html to an empty div

// HTML --- <div class='pot'></div>  

let emptyDiv =  document.querySelector('.pot');

let newContent = `<p> okay </p>`;

newContent += `<h1> 212 </h1>`;

emptyDiv.innerHTML = newContent;

console.log(emptyDiv);

// PRACTICE: ADDING CONTENT TO HTML DOCUMENT VIA JS - WITH FILTER AND MAP

let emptyDiv =  document.querySelector('.pot');

// let newContent = `<span> okay </span> <span> kkk </span>`

// newContent += ` <span> 212 </span>`;

// emptyDiv.innerHTML = newContent;


let a = 1;
let b = 3;

if (a < b) {
  let arrayOne = [
    {car: 'polo', speed: 214},
    {car: 'tazz', speed: 456},
    {car: 'everest', speed: 121}
  ];
  
  let newArrayOne = arrayOne.filter((item) => {
    if (item.speed < 400) {
      return item
    }
  }).map((item) => {
    return `<h4> Car: ${item.car} | Speed: ${item.speed+10}<h/>`
  }).join('');

  emptyDiv.innerHTML = newArrayOne;

  
console.log(arrayOne);
console.log(newArrayOne);
}  else {
  emptyDiv.innerHTML = 'not correct';
}

/* -------------------------------------------------------------------------------------------------------- */

// how to get a value of a checked button [ex. in a form]

<input type="radio" class="form-check-input ml-5" name="sortby" value="relevence" checked />

const sortby = document.querySelector('input[name="sortby"]:checked').value;

// how to get a value from a dropdown  list in a form

<select name="limit" id="limit" class="form-control">
  <option value="5">5</option>
  <option value="10">10</option>
  <option value="25" selected>25</option>
  <option value="50">50</option>
  <option value="100">100</option>
</select>

const searchLimit = document.getElementById('limit').value;

/* -------------------------------------------------------------------------------------------------------- */

// DATE (and TIME) OBJECT 

const now = new Date(); // shows today's date

now.getFullYear();
now.getMonth();
now.getDay();
now.getMinutes();
now.getDate();

// timestamps
now.getTime();

// date strings
now.toDateString();
now.toTimeString();
now.toLocaleString(); // ex: 11/26/2021, 11:01:50 AM
now.toLocaleDateString(); // ex: 11/26/2021

// timestamps

// to create a timestamp that is in the past or in the future [not now] you pass a string to Date();. THIS STRING CAN BE DIFFERENT FORMATS

const before = new Date('February 1 2021 7:05:54'); // past
const now = new Date(); // now

before.getTime(); // convert to timestamp  [in milliseconds]

// time diffence between the two dates

const  diff = now.getTime() - before.getTime(); // returns [millisecs]

const mins = Math.round(diff / 1000 /60); // returns minutes
const hours = Math.round(mins / 60); // returns hours
const days = Math.round(hours / 24); // returns days 

const blogTime = `The blog was written i ${days} ago`;

// convert timestamp into date object

const timestamp = 1675938474990; // you cant work with this, it's just a number now
const newlyConvertedTimestamp = new Date(timestamp); // returns a timestamp in a [workable] format

// TERNARY OPERATOR

// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.

condition ? exprIfTrue : exprIfFalse

// EX

var age = 26;

var beverage = (age >= 21) ? "Beer" : "Juice";

console.log(beverage); // "Beer"

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));
// expected output: "$10.00"


/* -------------------------------------------------------------------------------------------------------- */
// SELECT THE DATA-* (DATASET PROPERTY VIA JS)

<button class="page-btn ${actieIndex === pageIndex ? 'active-btn' : 'null'}" data-index="${pageIndex}"> ${pageIndex + 1} </button>

btncontainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('page-btn')) {
    console.log(e.target.dataset.index); // selecting dataset | 
  }
})

// the dataset (data-index)

/* -------------------------------------------------------------------------------------------------------- */

// getting a vlue of an input(tag) attribute.
// For example, <input type='text' name='usernname' placeholder='username'> you want to get the value of the name attribute via JS
inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    const nameAttributeValue = e.target.attributes.name.value; 
    // target element. you are going to select an attribute. type of attribute: name in this case. you want the value of that attribute  
  });
});


/* -------------------------------------------------------------------------------------------------------- */
// REGEX

// Creating regular expression

let reg = /[a-z]ig/;

let reg2 = new RegExp(/[a-z]/, 'i');


/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------- */
