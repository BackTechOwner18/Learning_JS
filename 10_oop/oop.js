// object literal 

const obj = {
    username  : 'baljeet', 
    class : '12th', 
    isLoggedIn : true,
    greetings : function ( )
    {  
        
        console.log(`${this.username}`);
        
    }
}
// console.log(obj);
// console.log(obj.username);

obj.greetings()


const user = {
    username : 'baljeet singh', 
    startup : 'baseops', 
    rating : '10/10',
    marketValue : 'high'
}

function user2(username , isLoggedIn , marketValue)
{
    // console.log(this);
    
    this.username = username
    this.isLoggedIn = isLoggedIn
    this.marketValue = marketValue
    return this
}
const obj1 = new user2('baseops', true , 'high')
const obj2 = new user2('baljeet singh', true, 'mid')

// console.log(obj1);
// console.log(obj2);
// console.log(obj2.constructor);  //[Function : user2]
