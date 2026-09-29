const anyArray = ['baljeet', 'balraj', 'aviral', 'aman' , 'diljeet']

// anyArray.forEach( function(samaan)
// {
//     console.log(samaan);
    
// } )

// anyArray.forEach( (item) => {
//     console.log(item);
    
// } )


// anyArray.forEach( (anything , i , arr2) => {        //SYNTAX-(value , index , array)
//     console.log(`${anything} is at index - ${i} in the array - ${arr2}`);
    
// } )

const newArray = [
    {
        username : "baljeet",
        age : 17
    },
    {
        username : "rha tesb",
        age : 17
    },
    {
        username : "AGSrgs",
        age : 17
    }
]

// newArray.forEach( (value) => {
//     console.log(value);
    
// })


newArray.forEach( (value) => {
    console.log(Object.entries(value));
    
})


// const abc= {
//     username : 'baljeet',
//     price : 999
// }

const myNums = [1,2,3,4,5,6,7,8,9,10]

const test = myNums.forEach( (num) => {
    console.log(num);let sum = 0
    sum = num + sum
    return sum
})  


// console.log(test);      //returns undefined as foreach doesnot return any value


const newArray2 = []
myNums.forEach( (num) => {
    if (num>=5) {
        newArray2.push(num)
    }
})

// console.log(newArray2); 

