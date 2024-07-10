// Question: 3 ------->>>>>>>>>> Valid Anagram
// An Anagram is a word or phase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram", t = "nagaram"); ----->>>>>> Output: true
// Input: (s = "rat", t = "car"); ----->>>>>> Output: false

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false
  }
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  if (s === t) {
    return true;
  } else {
    return false;
  }
}

// console.log(isAnagram("anagram", "nagaram"))

// anagram => ["a", "n", "a", "g", "r", "a", "m"] => ["a", "a", "a", "m", "n", "r"] => aaamnr

// nagaram => ["n", "a", "g", "a", "r", "a", "m"] => ["a", "a", "a", "m", "n", "r"] => aaamnr