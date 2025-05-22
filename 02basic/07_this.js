const user = {
    username:"kanchan",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username},welcome to my website`);
    }
}

// we also change the value in it
user.welcomemessage()
user.username = "sachin"
user.welcomemessage()

console.log(this)
function chai(){
    console.log(this)
}
chai()