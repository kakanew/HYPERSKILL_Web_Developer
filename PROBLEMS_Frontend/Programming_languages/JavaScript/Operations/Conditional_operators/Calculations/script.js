let a = 30;
let b = 6;
let c;

if (a < 100 && b < 10) {
    c = a * b;
} else if (a < 50 && b < 6) {
    c = a - b;
} else {
    c = a + b;
}

console.log(c);