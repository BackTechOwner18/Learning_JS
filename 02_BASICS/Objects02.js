const newObj = new Object()     //constructor method // singleton 
newObj.email= "smthing@google.com"
newObj.name = "Baljeet Singh"
newObj.isLoggedIn = false

// console.log(newObj)
// console.log(newObj['name'])


const obj1 = {
    1 : "a",
    2 : "b"
}
// const obj2 = { 3 : "c" , 4 : "d"}
// const obj3 = Object.assign(obj1 , obj2) //assign method for adding/concatinating two objects
// const obj3 = {...obj1 , ...obj2} // split method for adding/concatinating two objects
// console.log(obj3);


// OBJECT NESTING -

const Regular = {
    name : "smthing",
    username : {
        fullName : {
            fullName : "Baljeet",
            lastName : "Singh"
        }
    }
}
 
// console.log(Regular);
// console.log(Regular.username);
// console.log(Regular.username.fullName);
// console.log(Regular.username.fullName.firstName);



//ARRAY OF OBJECTS :

const random = [ //random is an array comprising of objects
    sanam = {
        name  : "baljeet",
        email : "nbfbjs@google.com"
    },
    sanam2 = {
        name  : "baljsingheet",
        email : "nesgbfbjs@google.com"
    },
    sanam3 = {
        name  : "baljeet",
        email : "ngzrbfbjs@google.com"
    },
    sanam4 = {
        name  : "baljeet",
        email : "gzrrgnbfbjs@google.com"
    },
    sanam5 = {
        name  : "baljeet",
        email : "nggcbfbjs@google.com"
    },
    53 ,false , 'false'
]
// console.log( random) 
// console.log( random[0])
// console.log( random[1])
// console.log( random[2])
// console.log( random[3])
// console.log( random[4])
// console.log( random[5])
// console.log( random[6])
// console.log( random[7])
// console.log(typeof random[7])
// console.log( random[8])
// console.log(typeof random[8])
// console.log(typeof random[5])
// console.log(random[9])
// console.log(typeof random[9])

// console.log(Object.keys(newObj))
// console.log(Object.values(newObj))
// console.log(Object.entries(newObj))
// console.log(newObj.hasOwnProperty('email'));
// console.log(newObj.hasOwnProperty('emailId'));


// ================================================================

// Destructuring of objects 
const course = {
    courseName : "javascript in hindi",
    coursePrice : "999",
    courseInstructor: "hitesh"
}

// console.log(course.price); normal method

const {coursePrice: price} = course //destructuring 
// console.log(price);

// Basic API knowledge 

// {
//     name : "smthing",
//     id : 355234263 ,
//     isLoggedInorNot : true ,
//     anything : 245524
// }

// [
// {},
// {},
// {},
// ]