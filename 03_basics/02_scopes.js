const a = 10
let b =20
var c= 30

// if (true)
// {
//     const a = 200
//     let b = 300
//     var c= 400
//     console.log(`inner = ${a}`);
    
// }

// console.log(`outside = ${a}`);    //not defined outside the scope of if and gives error
// console.log(b);    //not defined outside the scope of if and gives error
// console.log(c);    //doesnot follow scope low and gives the value outside the block scope

// THATS THE REASON var IS NOT USED WHEN INTIALIZING 


// =============================================================

// nested scope 

// function one ()
// {
//     const username = "baljeet singh"
//     function two ()
//     {
//         const info = " student"
//         console.log(username+info);     //can access username as function two is inside the scope of function one
        
//     } two()
//     // console.log(info);  //gives error as info is outside the scope of function two
    
// }
//  one()

 if (true)
{
    let username = "baljeet singh"
    function inside ()
    {
        username = " is a student"
        console.log(username);     //no error
    }
    console.log(username);       //no error
    inside()
    console.log(username);       //no error  //VALUE OF USERNAME UPDATED
    
}


// ===================== hoisting basics ==================================


console.log(addOne(5)  )     //function is called without any error
function addOne(num)
{
    return num+1
}

// addTwo(5)   //shows error as function called before it is initialized
const addTwo = function (Number)
{
    return Number+2
}
console.log(addTwo(6))   //no error if called after initializing

