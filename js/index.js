// Your code goes here

//increase size of logo with mouseover
const navLogo = document.querySelector('.logo-heading');
navLogo.addEventListener("mouseover", (event) => {
    event.target.style.transform = "scale(1.25)"});

//Changes background color of nav links when clicked.
const nav = document.querySelector(".nav");
nav.addEventListener("click", (event) => {
    event.target.style.backgroundColor = '#17A2B8';
    event.target.style.borderRadius = '3px';
    event.target.style.color = 'white';
});

const allButtons = document.querySelectorAll('.btn');

allButtons.forEach(node => {
    node.addEventListener('click', function(){
       let name = prompt('Enter name');
        console.log(name + ' you are signed up!');
    })
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

//Sets an alert when trying to copy paragraphs
let allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(node => {
    node.addEventListener('copy', function(event){	    
        alert("You are copying a paragraph!");
    })
})

//changes text color when doubleclicked
const containerAll = document.querySelector('.container');
containerAll.addEventListener('dblclick', function(eventObject){
    eventObject.target.style.color = "pink";
});


//prevents contextmenu from appearing in footer section
footer = document.querySelector('.footer');
footer.addEventListener('contextmenu', function(){
    event.preventDefault();
})

const middleImg = document.querySelector(".img-content");
 // Drags image to scale in size
middleImg.addEventListener('drag', (event) => {event.target.style.transform = 'scale(0.75)';
});

window.addEventListener("load", function(event) {
    alert("Page had loaded! Try some features on the page!");
});

window.addEventListener('resize', () => alert("Resizing!"))