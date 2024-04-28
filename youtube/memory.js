function Animal(type) {
  this.type = type;
}

const dog = new Animal("dog");
const cat = new Animal("cat");
const fish = new Animal("fish");

console.log(dog, cat);

//
//
//
// ##### Primitive Type

let a = 5; // 5
let b = a; // 5
a = 8;
console.log(a, b); // a = 8 , b = 5

//
//
//
// ##### Non-Primitive(Referance) Type

let person = { name: "Nazar" };

let programmer = person;

person.id = 5;
console.log(person, programmer);

person = { age: 3 };
console.log(person, programmer);

//
//
//
// ##### Const Keyword

const p = { id: 5 };

p.id = 8;
p.name = "Nazar";

console.log(p);
