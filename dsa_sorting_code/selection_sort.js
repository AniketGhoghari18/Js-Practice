// SELECTION SORT 
// Time complexity of the Selection sort is O(n^2).

function selection_sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }
}

const array = [47, 12, 18, 18, 23, 39, 1, 50, 44, 16];
selection_sort(array);
console.log(array);
