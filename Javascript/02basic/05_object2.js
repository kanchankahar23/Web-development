const user = {
    name: "kanchan",
    age: 21,
    education: "MCA",
    city: "Mumbai"
};

// Destructuring assignment
const { name, age, city } = user;

console.log(name); // Output: kanchan
console.log(age);  // Output: 21
console.log(city); // Output: Mumbai

// You can also rename variables while destructuring
const { education: degree } = user;
console.log(degree); // Output: MCA


const contain = {
    fname : "sonam",
    age : 23,
    course : "webdev"
}

//destructuring

const {fname} = contain
console.log(fname)