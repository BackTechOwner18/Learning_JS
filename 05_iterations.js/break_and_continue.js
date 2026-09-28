const myArray = ['batman', 'superman' , 'flash', 'spiderman']

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    }

    for (let index = 0; index <= 20; index++) {
       if (index ==11){
        console.log(`detected 11`);
        break   //terminates the loop entirely from this point
    }
       
        console.log(index);
    }
    

    for (let index = 0; index <= 20; index++) {
       if (index ==11){
        console.log(`detected 11`);
        continue    //only skips one iteration
    }
       
        console.log(index);
    }
