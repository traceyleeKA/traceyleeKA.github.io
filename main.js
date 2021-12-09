/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'; */

/* Variables
let myVariable = 'Spongebob';
myVariable;
myVariable = 'Steve'; */

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'test-site/images/spongebob.jpg') {
    myImage.setAttribute('src', 'test-site/images/spongebob2.png');
  } else {
    myImage.setAttribute('src','images/spongebob2.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

// Initialisation code
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
