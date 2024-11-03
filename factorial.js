function factorial(n = 0) {
    if (n == 0) {
        return 1;
    } else if (n < 0) {
        return ("According to the laws of math, the factorial of a negative number can't be calculated")
    }
    return n * factorial(n - 1);
}

const x = 4;

console.log(factorial(x));
