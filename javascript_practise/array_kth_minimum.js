let array=[12,67,8,90,65,48,40];
let length=array.length;
let array_reverse=[];
let k=4;

let sorted=[...array].sort((a,b)=>a-b);

let kth=sorted[k-1];

console.log("kth element  minimum element = "+kth);








