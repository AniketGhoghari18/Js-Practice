const array = [47, 12, 18, 18, 23, 39, 1, 50, 44, 16];

function bubble_sort(array)
{
  for (let i = 0; i < array.length; i++) {
     for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j+1]) {
            [array[j] , array[j+1]] = [array[j+1],array[j]]
        }
     }
  }
}

bubble_sort(array);
console.log(array);
