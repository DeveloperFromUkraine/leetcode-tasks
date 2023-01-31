function fibonacci(n) {
    return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(4))


var i;
var fib = [0, 1]; // Initialize array!

for (i = 2; i <= 10; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
}

console.log(fib)


// The first five principles are principles of class design. They are:
//     L	The Liskov Substitution Principle	Derived classes must be substitutable for their base classes.
//     I	The Interface Segregation Principle	Make fine grained interfaces that are client specific.
//     D	The Dependency Inversion Principle	Depend on abstractions, not on concretions.
