// Example-1

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);


//    1
//    7
//    3
//    5
//    2
//    6
//    4








// Example-2


const tryThis = () => {
    for (let i = 0; i < 999999; i++) { }
    console.log("FINISHED")
}

console.log("X-1")

setTimeout(() => console.log("X-2"), 0);

console.log("X-3")

tryThis()