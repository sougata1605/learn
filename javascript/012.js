// Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo

let array = [0, 2, 1, 2, 0, 1, 0];
let high =array.length;
let min=0;
let mid=0;

function sort012(array) {
    let low = 0;
    let mid = 0;
    let high = array.length - 1;

    while (mid <= high) {
        if (array[mid] === 0) {
            [array[low], array[mid]] = [array[mid], array[low]];
            low++;
            mid++;
        } else if (array[mid] === 1) {
            mid++;
        } else {
            [array[mid], array[high]] = [array[high], array[mid]];
            high--;
        }
    }

    return array;
}



console.log(sort012(array));