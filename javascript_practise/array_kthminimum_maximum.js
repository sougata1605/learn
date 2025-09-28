// your code goes here//

let array=[12,67,8,90,65,484,40];
let length=array.length;
let array_reverse=[];
let k=1;

let sorted=[...array].sort((a,b)=>a-b);
let kth_minimum=sorted[k-1];
let kth_maximum=sorted[length-k];


console.log("kth minimum element "+ kth_minimum + "\n   kth maximum element "+kth_maximum); 