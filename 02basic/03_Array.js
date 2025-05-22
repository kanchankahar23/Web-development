const people = ["priya","sonam","ria","monika","shreya"];
const surname = ["pandey","kahar","das","sen"];
// people.push(surname)
// console.log(people)
//array inside the array


const newarr = people.concat(surname)
console.log(newarr)

//concat 

const newarr2 = [...people,...surname];
console.log(newarr2)

//sprade operator