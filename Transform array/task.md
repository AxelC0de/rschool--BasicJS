Transform array
https://github.com/AlreadyBored/basic-js#transform-array

Your task is to implement the function transform(arr) that takes an array and returns transformed array, based on the control sequences that arr contains. Control sequences are defined string elements of the mentioned array:

--discard-next excludes the next element of the array from the transformed array.
--discard-prev excludes the previous element of the array from the transformed array.
--double-next doubles the next element of the array in the transformed array.
--double-prev doubles the previous element of the array in the transformed array.
For example:

transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]

transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]

The function must not affect inital array. Control sequences are applied from left to right to initial array elements. Control sequences do not fall into the transformed array. Control sequences in initial array don't occur in a row.

If there is no element next to the control sequence to which it can be applied in the initial array, or this element was previously deleted, it does nothing.

The function should throw an Error if the arr is not an Array.

Write your code in src/transform-array.js.