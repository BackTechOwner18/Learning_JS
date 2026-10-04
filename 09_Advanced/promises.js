
// // const xhr = new XMLHttpRequest()

// // // basic promise syntax 

// // new Promise(function(resolve,reject)
// // {
// //     let condition = false
// //     if (!condition)
// //         {
// //             resolve(`BaseOps is the best`)
// //         }
// //         else {
// //             reject(`BaseOps is still the best`)
// //         }
// // }).then((user) => console.log(user)).catch((rejectedCase) => console.log(rejectedCase))

// // //it can also be stored

// // const promiseTwo = new Promise((resolve , reject) => {
// //     if (2+2 !== 4)
// //         {
// //             let username = 'baljeet' 
// //             resolve (username)
// //         }
// //         else {
// //             let username = "baseops"
// //             reject(username)
// //         }
// // })

// // promiseTwo.then((resolve) =>(resolve.toUpperCase())).then((output) => console.log(output)).catch((rejected) => console.log(rejected)).finally(function(){
// //     console.log(`Promise is either resolved or rejected!`)
// // })

// // finally acts as a default function which executes if the promise is either resolved or rejected no matter the outcome


// // let returnedAPI 
// // const getURL = 'https://api.github.com/users/hiteshchoudhary'
// // xhr.open('GET', getURL)
// // xhr.send()
// // xhr.onreadystatechange = function () {
// //     if (xhr.readyState === 4){
// //         returnedAPI = JSON.parse(this.responseText)
    
// //     const newPromise = new Promise((resolve, reject) => {
// //         if (returnedAPI.login === 'hiteshchoudhary')
// //             {
// //                 resolve()
// //             }
// //             else
// //                 {
// //                     reject()
// //                 }
// //             })
            
            
// //             newPromise.then(() => console.log('Api resolved')).catch(() => console.log('Api rejected')).finally(() => console.log('Api promise is finally executed'))
// // }}

// //gets json info about github hitesh choudhary user and checks if json.login = 'hiteshchoudhary' or not 
// // resolved if yes and rejected if no 

// const promiseThree = new Promise(function (resolve , reject)
// {
//     if (2+2 === 4)
//         resolve ( {username : 'baljeet', class : '12th'})
//     else
//         reject()
// })

// promiseThree.then((user) => console.log(`username = ${user.username} promise resolved`)).catch(() => console.log('error'))

// //async await - used instead of then and catch

// const promiseFour = new Promise(function(rs , rj)
// {
//     let error = false
//     if (!error)
//     {
//         rs({username : 'javascript' , key : 'js', password : '12345'})
//     }
//     else {
//         rj(`Error : something went wrong`)
//     }
// }
// )

// async function consumePromiseFour ()
// {
//     try {
//         const respone = await promiseFour
//         console.log(Object.entries(respone));
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
//    }
// consumePromiseFour()

//fetch - returns data from a url

async function getData () {
    try {
        const respone = await fetch('https://api.github.com/users/hiteshchoudhary')
        console.log(respone);
        
        const JSONdata = await respone.json()
        console.log(typeof JSONdata);
        

    } catch (error ) {
        console.log(error);
        
    }
}

getData()

// using then catch

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((data) => {
//     console.log(typeof data);
    
//      console.log(data.json());
     
// })
// .catch((error) => console.log(error))

// // fetch returns data from a url and it is a promise itself 