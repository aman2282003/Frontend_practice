let students = [
  { name: "Alice", marks: 45, subject: "Math" },
  { name: "Bob", marks: 75, subject: "Science" },
  { name: "Charlie", marks: 50, subject: "English" },
  { name: "David", marks: 30, subject: "History" },
];

for (let key of students) {
  if (key.marks >= 50) {
    console.log(`${key.name} - ${key.subject}`);
  }
}
