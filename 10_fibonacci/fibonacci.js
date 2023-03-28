const fibonacci = (num) => {
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};

// fib(4)
// fib(3) + fib(2)
// (fib(2) + fib(1)) + (fib(1) + fib(0))
// ((fib(1) + fib(0)) + fib(1)) + (fib(1) + fib(0))
// (1 + 0) + 1) + (1 + 0)
// 2 + 1
// 3

// console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
