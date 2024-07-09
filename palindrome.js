// Question 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward

//Input: x = 121 ------>>>>> Output: true
//Input: x = -121 ------>>>>> Output: false
//Input: x = 10 ------>>>>> Output: false

const isPalindrome = (x) => {
  return x < 0 ? false : x === +x.toString().split('').reverse().join('');
}

const response = isPalindrome(121);

// 121 => "121" => ["1","2","1"] => ["1", "2","1"] => "121"
