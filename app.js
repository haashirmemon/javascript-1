// var image = document.getElementById("image1") 
// var btn = document.getElementById("button")

// image.addEventListener('mouseover',function(){

// //   image.innerHTML = `<b> haashir</b>`
// console.log(image);
// alert("hello image")
// this.style.backgroundColor ="black"
// this.style.Color ="blue"
  
// })
// image.addEventListener('mouseout',function(){
//     alert("bekaar hai bhai aaap faarig ho ")
// })

// btn.addEventListener('mouseover', function(){
//     alert('garaq ho ja bhai meri zindagi sai ')
//     btn.style.color ="black"
//     btn.style.backgroundcolor = "blue"
// })
var main = document.getElementById("container")
var boxes = document.getElementsByClassName('box')
console.log(boxes);
console.log(main);
// main.addEventListener('mouseover' ,function () {
//     this.style.backgroundColor = "black"
// })

for (let i = 0; i <boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
    main.style.backgroundColor = this.style.backgroundColor
    })
    boxes[i].addEventListener("mouseover" ,function(){
this.style.border = "2px solid purple"
    })
    boxes[i].addEventListener("mouseout" ,function(){
        this.style.border = "2px solid transperrent"
            })  
 }
 var selected = 0
main.style.backgroundColor = boxes[selected].style.backgroundColor
boxes[selected].style.border = '2px solid black'
var timer = setInterval(() => {
    boxes[selected++].style.border = " 2 px solid transperrent"
    if (selected==5) {
        selected = 0
    }
    main.style.backgroundColor= boxes[selected].style.backgroundColor 
    boxes[selected].style.border = "4px solid purple"
}, 2000)

//  console.log(boxes);

