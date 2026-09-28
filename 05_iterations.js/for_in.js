// for in

const newObject = {
    username : "1",
    any : '2', price : '999'
}
for (const value in newObject) {
//   console.log(value);     //prints the keys of object
  
}

for (const value in newObject) {
//   console.log(newObject[value]);     //prints the values of object
  
}

const map = new Map()
map.set(1 , "baljeet")
map.set(2 , "aviral")
for (const index in map) {
    // console.log(index);
    //doesnot run as map is not iterable using for in
}

const name = "baljeet"
for (const index in name) {
    // console.log(name.charAt(index));
}

const array = ['1', '2' ,'3', '4']

for (const index in array) {
   console.log(array[index]);
   
}

