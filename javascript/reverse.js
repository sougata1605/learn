let array = [1, -2, 3, -4, -5, 6, -7,8,-9,10,5,2,3,4,5,-6,7,-8];
let length= array.length;
let reverse=[];

for(let i=length; i>=0; i--)
{
    reverse.push(array[i]);
}

console.log("reverse of the array "+reverse);