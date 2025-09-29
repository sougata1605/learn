// maximum_minimum.js 


let array = [1, -2, 3, -4, -5, 6, -7,8,-9,10,5,2,3,4,5,-6,7,-8];
let length= array.length;
let max= array[0];
let min =array[0];

for (let i =0; i<=length-1; i++)
{
    if(array[i]<min)
    {
        min=array[i];
    }
    
    if(array[i]>max)
    {
        max=array[i];
        
    }
}

console.log("maximum = "+ max + "\n minimum "+ min );