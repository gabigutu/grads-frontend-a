console.log('Hello');
// alert('Salut');

var a = 7; // number
console.log(a, typeof a, typeof typeof a);
a = 'Salut'; // string
console.log(a, typeof a, typeof typeof a);

var b = 8.9; // number
console.log(b, typeof b, typeof typeof b);
b = false;
console.log(b, typeof b, typeof typeof b);

var c;
console.log(c, typeof c, typeof typeof c);
c = 'd';
console.log(c, typeof c, typeof typeof c);

d = 9;
console.log(d, typeof d, typeof typeof d);

var x = 100;
function modificareX() {
    x += 1;
}
modificareX();
console.log(x); // 101

var y = 100;
function modificareY() {
    var y;
    y += 1;
}
modificareY();
console.log(y); // ? 

for (var i = 1; i < 10; i++) {
    console.log('Salut');
}
console.log('i = ' + i); // ?

for (let j = 1; j < 10; j++) {
    console.log('Salut');
}
// console.log('j = ' + j); // j is NOT DEFINED

const PASS = 'dadaad';
// PASS = 'ddaadadda'; // Assignment to constant
/* dadaad */

a1 = 7;
a2 = '7';
console.log(a1 == a2); // true
console.log(a1 === a2); // false

console.log(typeof a1); // 'number'
console.log(typeof a2); // 'string'
console.log(typeof a1 === typeof a2); // false

console.log(typeof typeof a1); // 'string'
console.log(typeof typeof a2); // 'string'
console.log(typeof typeof a1 === typeof typeof a2); // true

a3 = 65; // number
a4 = 'A'; // string
console.log(a3 == a4); // false

x1 = undefined;
var x2;
console.log(x1 == x2); // true
console.log(x1 === x2); // true

x3 = 'undefined';
var x4;
console.log(x3 == x4); // false pentru ca 'undefined' != undefined
console.log(x3 === x4); // false

y1 = 90;
if (true == true && (y1 = 91)) { }
console.log(y1); // 91

if (true == false && (y1 = 92)) { }
console.log(y1); // 91

y2 = 70;
if ((y2 = 71) && true == true) { }
console.log(y2); // 71

if ((y2 = 72) && true == false) { }
console.log(y2); // 72

// json = JavaScript Object Notation
var student = {
    'nume': 'Vasile',
    'nota': 9,
    'isAlive': true
};
console.log(student, typeof student);
console.log('nume' in student); // true
console.log('masina' in student); // false

delete student.nume; // student['nume']
console.log('nume' in student); // false

delete student['nota']; // student.nota
console.log('nota' in student); // false

var numere = [9, 8, 1.4, 3, 3.4];
console.log(numere);
console.log(numere[2]); // 1.4
// console.log(numere.2); // nu e ok sintactic

vasile = 4;
console.log(numere[vasile]); // 3.4
console.log(numere.vasile); // undefined; numere.vasile == numere["vasile"]

let varstaVasile = 40;
let persoana = {
    'nume': 'Popescu',
    "prenume": 'Vasile',
    varstaVasile: varstaVasile
}
console.log(persoana.varstaVasile); // 40

persoana = {
    'nume': 'Popescu',
    "prenume": 'Vasile',
    varstaVasile: 'varstaVasile'
}
console.log(persoana.varstaVasile); // 'varstaVasile'

let varstaIon = 50;
persoana = {
    'nume': 'Popescu',
    "prenume": 'Vasile',
    varstaIon // varstaIon: varstaIon
}
console.log(persoana.varstaIon); // 50

function test() {
    console.log('salut');
}
test();
console.log(typeof test);

let test2 = function() {
    console.log('salut2');
}
test2();
console.log(typeof test2);

let test3 = (x) => x * 2; // let test3 = (x) => { return x * 2; } 
console.log(test3(20)); // 40

let test4 = (x, y, z) => {
    console.log('am intrat in test4')
    return x + y + z + 1; 
};
console.log(test4(1, 1, 1)); // 4


arr = [93, false, 'dadda', {
    'nume': 'Vasile'
}];

function sum(x, y, z) { return x + y + z;}
const numbers = [1, 2, 3];
console.log(sum(numbers)); // [1, 2, 3] + undefined + undefined

console.log(sum(...numbers)); // 6

const numbers2 = [1, 2];
console.log(sum(...numbers2)); // 1 + 2 + undefined 

const numbers3 = [1, 2, 3, 4];
console.log(sum(...numbers3)); // 6

arr1 = [1, 2, 3]
arr2 = [arr1]
console.log(arr2); // [[1, 2, 3]]

arr2 = [...arr1]
console.log(arr2); // [1, 2, 3]

var i1;
i1, i2 = 10, 20;
console.log(i1, i2); // undefined, 10
[i1, i2] = [10, 20];
console.log(i1, i2); // 10, 20

// function ca variabila