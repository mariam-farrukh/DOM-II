// Your code goes here

//increase size of logo with mouseover
const navLogo = document.querySelector('.logo-heading');
navLogo.addEventListener("mouseover", (event) => {
    event.target.style.transform = "scale(1.25)"});

//Changes background color of nav links when double clicked.
const nav = document.querySelector(".nav");
nav.addEventListener("dblclick", (event) => {
    event.target.style.backgroundColor = '#17A2B8';
    event.target.style.borderRadius = '3px';
    event.target.style.color = 'white';
});

//changes header opacity with any key pressed.
const body = document.querySelector('body');
const header = document.querySelector('header');
body.addEventListener("keydown", () => {
    header.style.opacity = "0.8"});