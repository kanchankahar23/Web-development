// create an object for a student with name , age , and isEnrolled.
let obj = {
    name:"kanchan",
    age:21,
    isEnrolled:true,
};
console.log(obj);

///access the value of "firstname"from this object:
let user = {
    "first-name" :"sachin",
};
console.log(user["first-name"]);

// from the object below print the latitude
let location = {
    city:"bhopal",
    coordinates :{
        lat:23.4,
        lng:77.5,
    },
};
console.log(location.coordinates.lat);


// destructure the city and lat from the location object in above
let {city} = location;
let {lat} = location.coordinates;

console.log(city);
console.log(lat)


// destructure the key "first-name " as a variable called firstname
let user2 = {
    "first-name" :"kanchan",
};
let {"first-name" : firstname } = user2;
console.log(firstname);

// use for in to log all keys in this object
const course = {
    title :"javascipt",
    duration:"4 weeks",
};

for(let key in course){
    console.log(key);
}
let print = Object.entries(course);
console.log(print);


let print2 = Object.entries(course).forEach(function(val){
    console.log(val[0] + ":" + val[1]);
});
console.log(print2);


// copy this object using spread operator 

const original = {a:1 ,b:2};
const copy = {...original};
console.log(copy);

// deep cloning the obj2 safely
const obj2 = {info: {score : 80}};
let newobj = JSON.parse(JSON.stringify(obj2));
newobj.info.score = 100;
console.log(newobj);
