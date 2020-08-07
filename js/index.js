// Your code goes here

//mouse over n mouse leave
const mouseOver = document.querySelector("header");
mouseOver.addEventListener("mouseover", () =>{
    mouseOver.style.backgroundColor = "blue";
});
const mouseLeave = document.querySelector("header");
mouseLeave.addEventListener("mouseleave", () =>{
    mouseLeave.style.backgroundColor = "white";
});

//keydown
const keyDown = document.querySelector("html");
keyDown.addEventListener("keydown", () => {
    if(event.isComposing || event.keyCode  === 229){
        return;
    }
    keyDown.style.backgroundColor = "black";
    keyDown.style.color = "skyblue";
});

//keyup test
// const keyUp = document.querySelector("html");
// keyUp.addEventListener("keyup", () => {
//     if(event.isComposing || event.keyCode === 229){
//         return;
//     }
//     keyUp.style.backgroundColor = "white";
// });

// scroll 
const scrollEvent = document.querySelector(".intro img");
console.log(scrollEvent);
window.addEventListener("scroll", () => {
    scrollEvent.style.transform = "scale(1.2)";
    scrollEvent.style.transition = "transform 1s";
}); 

//resize 
const resizeImg = document.querySelectorAll(".img-content img");
console.log(resizeImg);
window.addEventListener("resize", () => { 
    resizeImg.forEach((pic) => { 
        pic.src = "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/640/360/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/sleeping-beauty-castle-exterior-16x9.jpg?1593556896598";
    });
});

//mouseclick 
const mouseClick = document.querySelectorAll(".nav a");
console.log(mouseClick);
window.addEventListener("click", (e) => {
    e.preventDefault();
    mouseClick.forEach((changecolor) => {
        changecolor.style.color = "red";
    });
});

//mouse doubleclick
const mouseDble = document.querySelector(".footer p");
mouseDble.addEventListener("dblclick", () => {
    mouseDble.style.backgroundColor = "aqua";
    mouseDble.style.fontSize = "5rem";
    
});

