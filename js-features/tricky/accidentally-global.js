function showMagic() {
  let a = b = 5;
}

showMagic();

typeof a    // 'undefined'
typeof b    // 'number'


// Explanation:

// function showMagic() {
//   let a;
//   window.b = 5
//   a = window.b
// }

// typeof a         // 'undefined'
// typeof window.b  // 'number'