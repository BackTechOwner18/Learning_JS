// for of 

const coding = ['js', 'python', 'java', 'cpp']
for (const element of coding) {
    // console.log(`element = ${element}`);
}

// doesnot work with objects as objects are not iterable

const newObject = {
    username : 'baljeet',
    roll_number : 11,
    class : 12
}

// for (const value of newObject) {
//     console.log(`entry = ${value}`);
// }        //shows error


//=======================   MAPS  =====================================

const map = new Map()
map.set('key', 'value')
map.set('username', 'baljeet')
map.set('roll_num', 11)

for (const element of map) {
    // console.log(element);      //returns arrays containing keys and values of map 
}

for (const [key,value] of map) {    //array destructuring
    
    // console.log(`${key} has value - ${value}`)      //returns values of map 
    
}

const message = "hello world!"
for (const index of message) {
    if (index == ' ')
        continue    //prevents space from printing
    console.log(index);
    
}
