/*
 //  #####  PRIORITY  #####  

 # SYNC
 # PROMISE resolve + then (without ArrowFunction)
 # Process.nextTick
 # PROMISE resolve + then (with ArrowFunction)
 # SetImmediate
 # SetInterval, SetTimeout

*/



setTimeout(() => console.log('A-1'), 1000)

setImmediate(() => console.log('A-2'))

console.log('A')

Promise.resolve(console.log('Then-Resolve')).then(console.log('Then')) // SAME AS SYNC CODE

Promise.resolve().then(() => console.log('Then with ArrowFunction')) // AFTER SYNC and NextTick (with ArrowFn)

process.nextTick(() => console.log("NextTick"))

console.log('H')

// Example-2 

// const func = async () => {
//     console.log('D')

//     await console.log('E')                      //   = console.log('E')

//     await Promise.resolve(console.log('F'))     //   = console.log('F')

//     console.log('G')
// }

// func()




 

