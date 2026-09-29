// Two options for declaring Arrays 

const array=['hitesh' , 23 , true , "Baljeet"] // option 1
const array2 = new Array('hitesh', 23 , true , "Baljeet") //option 2

// Printing arrays and their components 

// console.log(array);
// console.log(array2[3]);
// console.log(array2[4]); //undefined as indexing out of array

// console.log(array.includes('Baljeet'));
// console.log(array.indexOf(34));     //-1 as element is not in the array



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Arrays Functions 

//  array2.push(23) //adds an element to last position of an array
// console.log(array2);

// array2.pop()     //removes the element at the last position of an array
// console.log(array2);

// array2.shift()
// array2.unshift('bdskgkbskbfks') //adds an element to first position
// array2.shift() // removes the element at first
// console.log(array2);


const newArray = ['hitesh', 'baljeet', 'gvfhsh', true , 2332]

console.log(`A - ${newArray}`);
console.log(newArray.slice(2,3)) // first parameter is starting index while 2nd parameter is ending index + 1 
console.log(`B - ${newArray}`)


console.log(newArray.splice(2,3)) // first parameter is starting index while 2nd parameter states how many values u want to remove from the array 
console.log(`c - ${newArray}`)

//------------- output --------------------\\

//  A - ['hitesh', 'baljeet', 'gvfhsh', true , 2332]
//  ['gvfhsh']
//  B - ['hitesh', 'baljeet', 'gvfhsh', true , 2332]
//  ['gvfhsh', true, 2332]
//  C - ['hitesh', 'baljeet']


// slice doesnot have any changes in the original array
// splice makes changes happen in the original array as well

// slice and splice have different parameter functions (read above info for details)

