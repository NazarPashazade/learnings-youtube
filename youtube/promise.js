const promise = new Promise((resolve, reject) => {
    const count = -5;
    if (count > 0) {
        resolve("Success")
    } else {
        reject(new Error("Failed"))
    }
})



const resolveFn = response => {
    console.log(response)
}

const catchFn = error => {
    console.log(error)
}

const finallyFn = () => {
    console.log("FINALLY Finished...")
}

promise
    .then(resolveFn)
    .catch(catchFn)
    .finally(finallyFn)










// ##### Promise Chain


// const promise = new Promise((resolve, reject) => {
//     resolve(['j', 'a', 'v', 'a'])
// })

// promise
//     .then((res) => {
//         console.log(res)
//         return res.map(item => item.toUpperCase())
//     })
//     .then((res) => {
//         console.log(res)
//         return res.join("")
//     })
//     .then((res) => {
//         console.log(res)
//         return res + "Script"
//     })
//     .then((res) => {
//         console.log(res)
//     })








// ##### Interview Questions #####








// ##### Interview Question - 1


// const promise = new Promise((resolve, reject) => {
//     reject("Rejected")
// })


// promise
//     .catch(err => console.log(err))
//     .catch(err => console.log(err))
//     .catch(err => console.log(err))


// promise.catch(err => console.log(err))
// promise.catch(err => console.log(err))
// promise.catch(err => console.log(err))









// ##### Interview Question - 2


const promise = new Promise((resolve, reject) => {
    reject("Rejected")
})


promise
    .catch((err) => err)
    .then(console.log)








// ##### Interview Question - 3


// const promise = new Promise((resolve, reject) => {
//     resolve(2)
// })

// promise
//     .then((res) => {
//         console.log(res)
//         return res * 2
//     })
//     .then((res) => {
//         console.log(res)
//         return res * 2
//     })
//     .finally((res) => {
//         console.log(res)
//         return res * 2
//     })
//     .then((res) => {
//         console.log(res)
//     })


