let array = [1, -2, 3, -4, -5, 6, -7,8,-9,10,5,2,3,4,5,-6,7,-8];
let length= array.length;

let j=0;
for(let i=0; i<length; i++)
{
    if(array[i]<0)
    {
        [array[i],array[j]]= [array[j], array[i]];
        j++;
    }
}

console.log(" the array where all negative numbers are assign to one side of the array "+ array );