
// Example

function outherFn() {
    const outerVariable = 'I am outside!'

    return function innerFn() {
        console.log(outerVariable)
    }
    return innerFn
}


const newFn = outherFn()
newFn()    // I am outside!


// const ob = {}

// ob.ref = "ppp"

// console.log(ob)



// Example - 1

// function f1() {
//     const x1 = 11

//     return function f2() {
//         const x2 = 22

//         return function f3() {
//             const x3 = 33

//             return function f4() {
//                 const x4 = 44

//                 console.log(x1, x2, x3, x4)
//             }
//         }
//     }
// }


// f1()()()()  // 11 22 33 44






// Example - 2


// function nonClosure(a, b) {
//     return a + b
// }

// const b = 5

// function closure(a, b) {
//     return a + b
// }




// function fetchData(url, onSuccess, onError) {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => onSuccess(data))
//         .catch(error => onError(error));
// }

// fetchData(
//     url,
//     data => console.log("Data fetched:", data),
//     error => console.error("Error fetching data:", error)
// );
