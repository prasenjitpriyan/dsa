// Question - 2 --------->>>>>>>>>>>>>> Fibonacci Series in JavaScript
// Fibonacci Series - 1, 2, 3, 5, 8, 13 ......

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3 --------->>>>>>>>>>>>>> Output: 2
const fib = (n) => {
  const array = [0, 1]
  for (let i = 2; i <= n; ++i) {
    array.push((array[i - 1] + array[i - 2]))
  }
  return array[n]
}

// Recursive Solution
const fibRec = (n) => {
  if (n <= 1) return n
  return fibRec(n - 1) + fibRec(n - 2)
}

// One Liner Solution
const fibRecOneLiner = (n) => (n <= 1 ? n : (fibRecOneLiner(n - 1)) + (fibRecOneLiner(n - 2)))


//  Test Cases - 1, 2, 3 ......
// n = 3 => 1 + 1 => 2
// fib(2) => ) 0 + 1 => 1