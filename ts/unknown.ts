// Unknown is the Tape-Safe version of Any

let a: any;
let b: unknown;

a.whatever();
b.whatever(); // Type Error
