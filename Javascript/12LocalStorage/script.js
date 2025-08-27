// localStorage = apke browser ke andar data store krna jo ki browser band hone pr bhi delete ni hoga

// sessionStorage = ye apke data temporarily store krta h mtlb ki tab band hua aur data gya

// cookies = ye bhi data store krta h and apka data browerke cookies naam ki property me save hota h and ye cookies concept kam data ya light data ke liye hota h 

/////////local storage /////////
// how to store data 
localStorage.setItem("name" ,"kanchan");

// how to fetch data
let val = localStorage.getItem("name");

// how to remove data
localStorage.removeItem("name");

// how to update data

localStorage.setItem("name", "sachin");

/////////////session storage/////////////
sessionStorage.setItem("age",21);
sessionStorage.getItem("name","john");
sessionStorage.removeItem("name")

// ///////cookies/////////////

