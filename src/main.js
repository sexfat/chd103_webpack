const x =(x , y)=> x * y;
console.log(x(10 , 20));

import $ from 'jquery';
import { gsap } from "gsap";

// jq
$('body').css("background-color" , "red");

//gsap
// gsap.to('.box', {
//    x: 800,
//    y: 400,
//    rotation : 360,
//    duration : 1,
//    scale : 6 
// })


const tl =gsap.timeline();  

tl.to('.box' , {
    x:  400,
    y: 600,
    duration : 2,
    scale: 2
}).to('.box' , {
   rotation : 360,
   repeat : -1
   

})

