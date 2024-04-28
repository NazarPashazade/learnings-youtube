

console.log('A')	
Promise.resolve(console.log('B')).then(console.log('C'))  

console.log('D')   

//  A < B < C < D