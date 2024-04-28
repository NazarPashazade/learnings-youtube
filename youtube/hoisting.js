

// function foo() {
//     var x = 30;     // Function scope
//     var y 
//     if (true) {
//        y = 40;  // Function scope
//     }
//     console.log(x); // Accessible  //30
//     console.log(y); // Accessible  //40
// } 

// foo();
// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined
















// function foo() {
//     if (true) {
//         let z = 50;    // Block scope
//     }
//     console.log(z);  // ReferenceError: z is not defined
// }

// foo();























// function init() {
//     const a = 1;  // 1

//     if (true) {
//        const a = 2   // 2
//     }

//     // const a = 3  // Cannot redeclare block-scoped variable 'a'
// }

// init()











// #####  CUSTOM Block  ##### 

// {
//     {
//         const a = 1
//         console.log(a)    // 1
//     }

//     console.log(a)        // ReferenceError: a is not defined
// }






















// #####  Temporal Dead Zone  ##### 


// Temporal Dead Zone
// Temporal Dead Zone
// console.log(firstName)  // Temporal Dead Zone
// Temporal Dead Zone 
// Temporal Dead Zone
// Temporal Dead Zone
// Temporal Dead Zone
// Temporal Dead Zone
// const firstName = "Nazar"


// console.log(firstName)  // NAzar




















// #####  Hoisting  ##### 


// f1()
// f2()


// function f1() { }

// const f2 = () => { }















//  #####  Interview Question: Hoisting  ##### 

// function init() {
    
//     console.log(n2)   // undefined
    
//     if (true) {
//         n1 = 1          // Global Scope
//         var n2 = 2      // Function Scope
//         let n3 = 3      // Block Scope
//         const n4 = 4    // Block Scope

//         console.log(n3, n4)   // 3 4 
//     }

//     console.log(n2)   // 2
// }

// init()

// console.log(n1)  // 1


 

