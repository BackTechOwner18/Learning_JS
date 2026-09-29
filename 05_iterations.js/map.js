const myNums = [1,2,3,4,5,6,7,8,9,10]

const newArray = myNums.map( (num) => num + 2)

// console.log(newArray);

const arr2 = myNums.map(function (num)
{
   return num*10+1
})
// console.log(arr2);

// ============== CHAINING  ========================= 

const arr3 = myNums
            .map((num) => num*10)
            .map((num) => num+1)
            .filter((num) => num>50)
            // .forEach((num) => num+1)     //undefined as it doesnot return values

console.log(arr3);
