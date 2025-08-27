//Objec

// object litral
let obj = {
    name: "kanchan",
    age: 25,
    khana: "dal chawal",
};

let aa = "name";
console.log(obj["name"]);

// access two ways
// 1.dot notation
// 2.bracket notation

// nested object
const user = {
    name: "harsh",
    address: {
        city: "jabalpur",
        pin: 134456,
        location: {
            lat: 23.4,
            lang: 83.6,
        },
    },
};

console.log(user);
console.log(user.address.location.lang);



// destructuring of an object

let { lat, lang } = user.address.location;
console.log(lang);
console.log(lat);


// for in loop\
let ob = {
    name: "kanchan",
    age: 21,
    email: "kanchn@gmail.com",

};
// key
for (let key in ob) {
    console.log(key);
}

// key and value
for (let key in ob) {
    console.log(key, ob[key]);

}

// 
let Objec = {
    name: "kanchan",
    age: 21,
    email: "kanchan@gmail.com",
};

console.log(Object.keys(Objec));
// array bnayega keys ka 
// ["name","age","email"]


console.log(Object.entries(obj));
// array bnayega pairs ka 
// ["name","kanchan"]
// ["age",21],
// ["khana","dal chawal"]



let obj2 = { ...Objec };
// spread

console.log(obj2);
// same as objec

// deep cloning
let info = {
    name: "sachin",
    age: 21,
    email: "sachinsen@gmail.com",
    address: {
        city: "umaria",
    },
};


let info2 = { ...info };
info2.address.city = "jabalpur";
console.log(info2);
// not a good way to copy the object
// isse bachne ke liye ham deep cloning krte h 



let json = JSON.stringify(info); //to convert in string
console.log(json);
// for the copy

console.log(JSON.parse(json));
// real form 

let info3 = JSON.parse(JSON.stringify(info));
console.log(info3);
info3.address.city = "umaria";
console.log(info3);

// optional chaning
let information = {
    name: "=Qaran",
    age: 21,
    email: "sachinsen@gmail.com",
    addresses: {
        city: "umaria",
    },
};

// let op = information.address.city;
// console.log(op);

// ye value dega but ye value ni h to error dega use rokne ke liye optional chaning krte h 


let opc = information?.address?.city;
console.log(opc);
// ye error ni dega only undefined
