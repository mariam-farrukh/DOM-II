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
    header.style.opacity = "0.8";
});

//borrowed skelton from MDN, but scales the header Image
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.005;
  
    // Restrict scale
    scale = Math.min(Math.max(.5, scale), 1.5);
  
    // Apply scale transform
    headerImage.style.transform = `scale(${scale})`;
}
let scale = 1;
const headerImage = document.querySelector('img');
headerImage.onwheel = zoom;

let allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(node => {
    node.addEventListener('copy', function(event){	    
        alert("You are copying a paragraph!");
    })
})

const container = document.querySelectorAll('.container');
container.addEventListener('click', function(eventObject){
    eventObject.target.style.display = "none";
});
