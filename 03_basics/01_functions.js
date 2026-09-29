
// function function1()
// {
//     console.log("S");
//     console.log("A");
//     console.log("N");
//     console.log("A");
//     console.log("M");
// }
// function1()

// function useless (number1 , number2){
//     console.log(number1+number2)
// }
// useless() //prints NaN as no arguement is passed
// useless(2,4) //prints 6
// useless(2,"4") //prints 24 as '4' behaves as string


function useless (number1= 5, number2=6){
    return number1+number2
}
// console.log(typeof useless(1,null));
// console.log(useless());  no value passed so default values (5 and 6) are taken

//  const sum = useless(4,6)
//     // console.log(sum); //prints the returned value(10)
//  const sum = useless(4 ,true) //true gets coverted into 1 , overall returns 5
//  console.log(sum);

function userLogged (username){         //if username="somebody" passed in parameter parethesis , default value of username = "somebody" even if no value passed in arguement
if(!username) // can also be written as if(username === undefined)
{
    console.log("Please enter a username");
   return 
    
}
    // console.log(`${username} just logged in!`);
    return `${username} just logged in!`

}
// let isUserLOgged = userLogged() //Please enter a username
// console.log(isUserLOgged); 
// isUserLOgged = userLogged("Baljeet") //Baljeet just logged in!
// console.log(isUserLOgged); 

//===================================================================================
// next lecture 

function calculateCartPrice(...num1)    //... is a rest operator here
{
    return num1
}
console.log(calculateCartPrice())    //stores values in arrays because of ...(rest operator)
    //returns empty array as no value is passed

// console.log(calculateCartPrice("1",34 , [1,3,4,3,4]))   //['1',34,[1,3,4,3,4]]
// console.log(calculateCartPrice(1,3,342))    //[1,3,342]


function calculateCartPrice2(val1,val2,...num1)    //... is a rest operator here
        {
            return num1
        }
        // console.log(calculateCartPrice())   
//         console.log(calculateCartPrice("1",34 , [1,3,4,3,4]))   //returns only third value and after it as val1 = first value and val2=2nd value
        // console.log(calculateCartPrice2(1,3,342))    //returns only [342] 
        // console.log(calculateCartPrice2(1,3,342,65,467))    //returns only [342,65,467] 

const Object1 = {
    username : "baljeet singh",
    isLoggedIn : true
}

function returnsObjectValues (anyObject)
{
    return anyObject['username']   //returns undefined if key of object is mistyped
}

// console.log(returnsObjectValues(Object1));     //prints "baljeet singh"

const testArray = [1,'baljeet',true ,undefined,534]

function printArrayValue (anyArray)
{
    return anyArray[0]
}

// console.log(printArrayValue(testArray));     //prints 1


