
// ### In a method - Owner object.


const objj = {
    name: "ali",
    sayHello() {
        // console.log(this)
    }
}

objj.sayHello()  // objj


// ### Alone - Global object. (node.js - globalThis, browser - window)


// console.log(this)









// ### In a Regular function - Global object.



function sayHello() {
    // console.log(this)
}


sayHello()









// ### In a Constructor Function - Empty Object {}


function Person() {
    // console.log(this)
}


const programmer = new Person()






// ### In an event - Node Element.


{/*     
        <button onclick="this.style.display='none'">
            Click to Remove Me!
        </button> */
}













//  ##### Interview Questions






//  ##### Interview Question - 1

const person = {
    gender: 30,

    getGender1: function () {
        // console.log(this.gender)  // 30
    },

    getGender2: () => {
        // console.log(this.gender) // undefined
    }
}


person.getGender1()
person.getGender2()













//  ##### Interview Question - 2

const Car = {
    brand: "BMW",
    wheels: 4,
    colors: ["white", "black", "red"],
    getColors() {
        this.colors.forEach((color) => {
            // console.log(this.wheels, color)
        })
    }
}


Car.getColors()










//  ##### Interview Question - 3

let obj = {
    lang: "JavaScript",
    getLang() {
        // console.log(this.lang)
    }
}

const langFn = obj.getLang.bind(obj)

langFn()
















//  ##### Interview Question - 4

function sum(b) {
    console.log(this.a + b)
}

// sum(2)

const sumFn = sum.bind({ a: 5 })

sumFn(2)





