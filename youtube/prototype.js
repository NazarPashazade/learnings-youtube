

const obj = {}     // new Object()

// function Object(){}
// Object.prototype


// example 1
function Animal() { }

Animal.prototype   //    { constructor: Animal(), __proto__:Object.prototype}

const dog = new Animal()
const cat = new Animal()

Animal.prototype.legs = 4

console.log(dog.legs)




// example 2
function User(email) {
    this.email = email
    this.online = false
}

const user1 = new User('test1@gmail.com')
const user2 = new User('test2@gmail.com')

User.prototype.login = function () {
    this.online = true
    console.log(this.email, 'has logged in')
}


User.prototype.logout = function () {
    this.online = false
    console.log(this.email, 'has logged out')
}


user1.login()
user1.logout()