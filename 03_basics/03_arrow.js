const obj= {
    username : "baljeet singh",
    price : 999,
    welcome : function one()
    {
        console.log(`${this.username}, welcome to the website!`);
    }
        }

        // obj.welcome()    //this. works fine with object
        // username="sam"
        // obj.welcome()

function anyfunc(num1 , num2)
{   let username = "baljeet"
    return this.username
}

console.log(anyfunc()) //this. doesnot work with functions

console.log(this);       //returns empty object
console.log(this.username);     //undefined


// function two (num1, num2){
    //     let username = "baljeet"
    //     console.log(this)      //returns some values inside a function while returns an empty object outside
    //     console.log(this.username)  //returns undefined
    // }
    
    // two()
    
    // =====================================================================
    
    // arrow functions 

    // const chai = (num1, num2) => {
    //     return num1+num2
    // }
    // console.log(chai(4,5));
    

    // implicit

    // const any = (num1,num2) => (num1+num2)  //doesnot require return statement
    // console.log(any(5,3));
    

    // const chai= () => console.log({username : "baljeet",price :999})
    // chai();
    

    // const chai= () => (`baljeet`)
    // console.log(chai())      //baljeet
