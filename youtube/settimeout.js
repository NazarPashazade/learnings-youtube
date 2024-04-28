

// Interview Question: SetTimeout + Foor Loop

for (var i = 0; i < 3; i++) {
    // setTimeout(() => console.log(i), 100)
}




// STEP - 1

for (var i = 0; i < 3; i++) { }        // Sync Code

// setTimeout(() => console.log(i), 100)  // MacroTask





// STEP - 2

var i;

for (i = 0; i < 3; i++) { }

// setTimeout(() => console.log(i), 100)






// STEP - 3

var i;

for (i = 0; i < 3; i++) { }

// Start Loop

// i = 0   i<3   True    i++
// i = 1   i<3   True    i++
// i = 2   i<3   True    i++
// i = 3   i<3   False   

// Exit Loop

// setTimeout(() => console.log(i), 100)





// Solution - 1 LET


for (let i = 0; i < 3; i++) {
    // setTimeout(() => console.log(i), 100)
}


for (var i = 0; i < 3; i++) {
    (
        (j) => {
            setTimeout(() => console.log(j), 100)
        }

    )(i)
}

 
 























// Solution - 2  IIEF

// for (var i = 0; i < 3; i++) {
//     ((j)=>{
//         setTimeout(() => console.log(j), 100)
//     })(i)
    
// }
