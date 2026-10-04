// basic promise syntax 

new Promise(function(resolve,reject)
{
    let condition = false
    if (!condition)
    {
        resolve(`BaseOps is the best`)
    }
    else {
        reject(`BaseOps is still the best`)
    }
}).then((user) => console.log(user)).catch((rejectedCase) => console.log(rejectedCase))

//it can also be stored

const promiseTwo = new Promise((resolve , reject) => {
    if (2+2 !== 4)
    {
       let username = 'baljeet' 
        resolve (username)
    }
    else {
        let username = "baseops"
        reject(username)
    }
})

promiseTwo.then((resolve) =>(resolve.toUpperCase())).then((output) => console.log(output)).catch((rejected) => console.log(rejected)).finally(function(){
    console.log(`Promise is either resolved or rejected!`)
})

// finally acts as a default function which executes if the promise is either resolved or rejected no matter the outcome

//async await - 
