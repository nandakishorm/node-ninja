var counter = function (arr) {
    return("There are " + arr.length + " elements present in the given input...");
};

var adder = function myAdder(a, b) {
    return "The sum is = " + (a + b);
}

var pi = 3.142;

//counter(["kishor", "nanda", "deepika"]);
// module.exports = {
//         counter: counter,
//         adder: adder,
//         pi: pi,
// }

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;