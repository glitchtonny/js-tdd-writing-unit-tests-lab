//Your code here

// const isPalindrome = (word) => {
//     if (!word.trim()) return false;
//     return word.split("").reverse().join("").toLowerCase() === word.toLowerCase();
// }

// export { isPalindrome }


function reverse(string) {
    return string.split("").reverse().join("");
  }
  
  export function isPalindrome(word) {
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Invalid input");
    }
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord === reverse(lowerCaseWord);
  }

