const myNums = [1,2,3]

const newArray = myNums.reduce( (accumulator ,num) => {

    return accumulator+num
}, 0)

// console.log(newArray);


const newStringArray = ['baljeet', 'balraj', 'diljeet']

const arr2 = newStringArray.reduce( (acc, val) => {
    return val+acc
}, 'done')

//initial value of accumulator is  given at the end of the function and after that, it resets its own value to whatever value u r returning

// for example , initial acc value in the above code is 'done' , after that - 
// it automatically updates its value to the returning value , 
// baljeetdone , balrajbaljeetdone

// console.log(arr2);

