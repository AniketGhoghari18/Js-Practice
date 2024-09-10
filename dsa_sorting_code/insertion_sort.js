// Insertion sort
// Time complexity of the insertion sort is O(n^2).
const array = [47, 12, 18, 18, 23, 39, 1, 50, 44, 16];

const insertion_sort = () =>{
    for (let i = 1; i < array.length; i++) {
       let temp = array[i];
       let j;
       for (j = i-1; j >= 0  && temp < array[j]; j--) {
        array[j+1] = array[j]
       }        
       array[j+1] = temp;
    }
}
 insertion_sort(array);
 console.log(array);