const arr = []
// if (arr)
// {
//     console.log('good');
//     }

    //prints good because empty array is a truthy value

    //falsy values - 0, '' , false, null , undefined ,bigint 0n , NaN , -0
    
    //truthy values - 1 , 'any non empty string' , true , any int value except 0 , [] , {}, function(){}


    const newObject = {username : 'baljeet'
    }

    if (Object.keys(newObject).length == 0 )
        console.log("object is empty")
    else
        console.log('object is not empty');
        

        