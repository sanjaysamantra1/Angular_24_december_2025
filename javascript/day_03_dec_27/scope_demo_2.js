// Note : variables declared without var/let/const are always global 

var a = 10;
let b = 20;
const c = 30;
console.log(`Global Scope:: a:${a} b:${b} c:${c}`)

function f1() {
    var d = 40;
    e = 50; // its scope is global
    console.log('f1 starts...');
    console.log('a ', a);
    console.log('b ', b);
    console.log('c ', c);
    console.log('d ', d);
    console.log('e ', e);
    console.log('f1 starts...');
}
f1()
function f2() {
    console.log('f2 starts...');
    console.log('a ', a);
    console.log('b ', b);
    console.log('c ', c);
    // console.log('d ', d);   // ReferenceError: d is not defined
    console.log('e ', e); // yes
    console.log('f2 ends...');
}
f2()