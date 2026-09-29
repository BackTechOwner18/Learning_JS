const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.filter( (num) => num>4)
// console.log(newNum);    

const newArray = [
    {
        username : 'baljeet',
        age : 17
    },
    {
        username : 'sfgz',
        age : 19
    },
    {
        username : 'htfhh',
        age : 20
    },
    {
        username : 'htxfhxf',
        age : 18
    },
]

const arr2 = newArray.filter( (obj) => {
   
   if (typeof obj.age ===  'number')      //additional base condition
    return obj.age>=18      //main filter condition


})

// console.log(arr2);

const test2 = myNums.filter( (num , index) => {
    if (typeof num === 'number')
   return index>2 && num >5
    
})

console.log(test2);
