let array = [0, 2, 1, 2, 0, 1, 0,2,1,0,2,1,0,2,1,0,2,1,0];
let length = array.length;
let low = 0, mid = 0, high = length - 1;

while(mid <= high) {
    if(array[mid] === 0) {
        [array[low], array[mid]] = [array[mid], array[low]];
        low++;
        mid++;
    } else if(array[mid] === 1) {
        mid++;
    } else { 
        [array[mid], array[high]] = [array[high], array[mid]];
        high--; 
        
    }
}

console.log("New array= :", array);  






