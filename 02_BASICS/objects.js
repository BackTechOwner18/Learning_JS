//singleton
//object created using constructor method

//object declaration without singleton

const NewSym = Symbol("baljeet singh")
const SecSym = Symbol('bhatia')
const myObj = {
    name : 'baljeet',
    age : 17 ,
    location : 'kanpur',
    IsLoggedIn : false,
    "full name" : "baljeet singh bhatia",
    [NewSym] : SecSym ,
// greeting2 : function ()
//     {
//         console.log(`hello ${this.name}`);
        
//     } ,
//     greeting3 : function()
//     {
//         this.greeting2()
//     }
}

// myObj.greeting3()

// accessing objects components
// console.log(myObj.name)
// console.log(typeof myObj.name)

// console.log(myObj['full name'])
// console.log(myObj['full name'])

// console.log(myObj[NewSym])

// console.log(typeof myObj[NewSym])
// console.log(myObj)

// Object.freeze(myObj)
// myObj.name = "nsnjbea"
// console.log(myObj);

// using functions inside objects 

myObj.greeting = function() {
    console.log("Hello JS User");
    
}

    myObj.greetingTwo = function() {
    console.log(`Hello JS User , ${this.name}`);
    
}

console.log(myObj.greeting())
console.log(myObj.greetingTwo())

