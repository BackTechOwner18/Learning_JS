const myarray = ['hitesh', 23 , 45 , 18]
const reversed = myarray.toReversed()
// console.log(myarray);
// console.log(reversed);

// // Concatenating Arrays 

// method 1 - .push

const array2 = [23 , 'baljeet', 1818 , 4545 ,true]
// array2.push(myarray)
// console.log(array2);     //adds entire array myarray at the last position of array2

// method 2 - .concat

// const array3 = myarray.concat(array2)
// console.log(array3);     array3=myArrayElements+arr2Elements //works fine


// method 3 - spread operator(...) 

// const array3 = [...myarray , ...array2]
// console.log(array3);     //works fine


//other important prototypes 

// console.log(Array.isArray(array2))
// console.log(Array.isArray('baljeet'))

// console.log(Array.from('baljeet')) // string is iterable hence , non empty array
// console.log(Array.from(54363)) //empty array as number is not iterable 

// score1 = 100
// score2 = '200'
// score3 = true
// console.log(Array.of(score1 , score2 , score3));