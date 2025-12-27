var a = 10;
console.log('a ', a);

function f1() {
    var b = 20;
    console.log('b ', b);

    if (true) {
        var c = 30; // scope of 'c' is not restricted to if-block
    }
    console.log('function c', c); // 30
}
f1();

// console.log('global b ', b);  // no