var box = document.querySelectorAll('.box');
var display =document.querySelector('.display');

function setColor(element) {
   const elementStyle=getComputedStyle(element);
//    display.style.backgroundColor=elementStyle.backgroundColor;
    // console.log(elementStyle.backgroundColor)
    console.log("hi")

}

function setDefaultColor() {
    display.style.backgroundColor='red';
}

box.forEach((element)=>{
    element.addEventListener('mouseover',()=>{
        const elementStyle=getComputedStyle(element);
        display.style.backgroundColor=elementStyle.backgroundColor;
    })
})
box.forEach((element)=>{
    element.addEventListener('mouseout',setDefaultColor)
})