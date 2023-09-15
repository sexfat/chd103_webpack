const x =(x , y)=> x * y;
console.log(x(10 , 20));

import $ from 'jquery';
import { gsap } from "gsap";

// jq
$('body').css("background-color" , "red");

//gsap
gsap.to('.box', {
   x: 800,
   y: 600,
   rotation : 360,
   duration : 1,
   scale : 2 
})


