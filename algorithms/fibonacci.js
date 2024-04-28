// Fibonacci series
function fib(n) {
    const arr = []

    for (let i = 0; i < n; i++) {
        if (i == 0 || i == 1) {
            arr.push(i)
        } else if (arr.length) {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        }
    }

    return arr
}

console.log(fib(5))   // [ 0, 1, 1, 2, 3 ]


// 5

// 0 1 1 2 3


//  