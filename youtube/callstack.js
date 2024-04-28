//  ##### EXAMPLE #####


const f1 = () => "1"

const f2 = () => `${f1()}  --->  2`

const f3 = () => `${f2()}  --->  3`

f3()  //  1 --> 2 --> 3


// LAST IN FIRST OUT (LIFO) PRINCIPLE

// 4) f1         // f1 is called  First   
// 3) f2         // f2 is called 
// 2) f3         // f3 is called 
// 1) global     // f3 is called  Last









//  ##### StackOverflow #####

// const f = () => {
//     f()
// }

// f()









//  ##### Error Stack #####

//////////////////////////////////////
// const ff = () => {
//     throw new Error("Error")
// }


// try {
//     ff()
// } catch (err) {
//     console.log(err.stack)
// }


