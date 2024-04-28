setTimeout(() => console.log("A-1"), 1000);

setImmediate(() => console.log("A-2"));

console.log("A");

Promise.resolve(console.log("Then-Resolve")).then(console.log("Then"));

Promise.resolve().then(() => console.log("Then with ArrowFunction"));

process.nextTick(() => console.log("NextTick"));

console.log("H");

/*

 //  #####  PRIORITY  #####  

 # SYNC
 # PROMISE resolve + then (without ArrowFunction)
 # Process.nextTick
 # PROMISE resolve + then (with ArrowFunction)
 # SetImmediate
 # SetInterval, SetTimeout
 
*/
