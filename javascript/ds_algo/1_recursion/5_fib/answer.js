function fib(n) {
    if (n <= 2) {
      return 1; // The first two numbers in the Fibonacci sequence are both 1.
    } else {
      // The nth Fibonacci number is the sum of the (n-1)th and (n-2)th Fibonacci numbers.
      return fib(n - 1) + fib(n - 2);
    }
  }