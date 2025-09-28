let array=[12,67,98,90,65,468,40,1,23,50,49,30];
let length=array.length;
let array_reverse=[];
min=array[0];
max=array[0];




for(let i=0;i<length; i++)
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


console.log("Maximum number inside array = "+max + " and minimum number is = "+min);