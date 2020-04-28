//events:happens every time when the user interacts with the page. 
// User Events (interaction)and Browser Events (loading, etc...)

//Listening:
// Higher order functions aka functions that accept funciotn (callbacks)
let divText = document.querySelector('.text');
const print = () => {
    divText.innerText += "Hi, I am onclick from HTML";
};
let btn = document.getElementById('more');
btn.onclick = function () {
    divText.innerText += "Hi i am onclick method from js"; // by using += we can print the message more than one time
};
//Listening to user actions
// `EventTarget.addEventListener(<namespace>, <callback>)`

const myFunction = () => {
    header.style.backgroundColor ="white";
}; 

let header =  document.querySelector('h1');
header.addEventListener('mouseover', ()=> {
    header.style.backgroundColor ="red";
});
header.addEventListener('mouseleave',myFunction); 

// keyboard events:
// `keydown`, `keyup`
function keyUpFunction (e) {
    this.style.backgroundColor = "pink";
    console.log(e);
    if (e.code == 'KeyS') alert ("You are cool"); 
    if (e.code == "Enter") addToList ();
}

let userInput = document.querySelector("#userInput");
userInput.addEventListener("keyup", keyUpFunction);
userInput.addEventListener("keydown", keyDownFunction);
userInput.addEventListener("keypress", keyPressFunction);

function keyDownFunction (e) {
    this.style.backgroundColor = "white";
};

function keyPressFunction (e) {
    this.style.backgroundColor = "yellow";
};

