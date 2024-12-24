function reverseWords(sentence) {
  // Split the sentence into words by spaces
  const words = sentence.split(" ");

  // Reverse each word and join them back in their original order
  const reversedWords = words.map((word) => word.split("").reverse().join(""));

  // Join the reversed words into a sentence
  return reversedWords.join(" ");
}

// Example usage
const result = reverseWords("hello world");
console.log(result); // Output: "olleh dlrow"
