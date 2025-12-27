for (var i = 1; i <= 3; i++) {
    console.log('inside loop i: ', i);
}
console.log('outside loop i: ', i);


for (let j = 1; j <= 3; j++) {
    console.log('inside loop j: ', j);
}
console.log('outside loop j: ', j); // here j is not accessible (expected)