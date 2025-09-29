

let array = [1, -2, 3, -4, -5, 6, -7,8,-9,10,5,2,3,4,5,-6,7,-8]; 
let length= array.length;
let sorted ;
let kth_min; 
let kth_max;
let k=3;

sorted= [...array].sort((a,b)=>a-b);
kth_min= sorted[k-1]
kth_max=  sorted[length-k];

console.log(" kth minimum element "+ kth_min + "\n maximum element "+ kth_max);
