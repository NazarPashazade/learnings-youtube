// ECMAScript 6  "Syntactic Sugar"
// Interview Questions

// const person = { age: 0 }

//
//
//
// 1)
const programmer = Object.create(person);

console.log(person.age); // person.age
console.log(programmer.age); // programmer.__proto__.age

console.log(programmer.__proto__ === person);

programmer.__proto__;
Object.getPrototypeOf(programmer);

//
//
//
// 2)
const teacher = {};
teacher.__proto__ = person;
Object.setPrototypeOf(teacher, person);

//
//
//
// 2)
const teacher = { __proto__: person };

//
//
//
// ###  __proto__ Inheritence

const a = { id: 5 };

const b = Object.create(a);

const c = Object.create(b);

const d = Object.create(c);

a.id; // a.id
b.id; // b.__proto__.id
c.id; // c.__proto__.__proto__.id
d.id; // d.__proto__.__proto__.__proto__.id

//
//
//
// ### Create an object without __proto__ property

const h = Object.create(null);

console.log(h.__proto__);

//
//
//
// ### Delete property from object

const p1 = { id: 5 };

const p2 = Object.create(p1);

delete p2.id; // p2.__proto__.id

console.log(p1.id); // 5
console.log(p2.id); // 5

//
//
//
// ### ForEach VS ForIn  Iteration

const animal = { color: "red", age: 4 };

const cat = { name: "Tom", __proto__: animal };

cat.color; // cat.__proto__
cat.age; // cat.__proto__
cat.name; // cat

Object.keys(cat).forEach((key) => console.log(key)); // name

for (const key in cat) {
  console.log(key);
}
