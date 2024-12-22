// Step 1: Create an array of students
students = [
  { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } },
  { name: "Bob", age: 22, marks: { math: 78, science: 82, english: 80 } },
  { name: "Charlie", age: 21, marks: { math: 92, science: 88, english: 94 } },
];

// Step 2: Add a new student object to the array
students.push({
  name: "Diana",
  age: 23,
  marks: { math: 88, science: 84, english: 86 },
});
// Step 3: Calculate and display the average marks for each student

students.forEach((student) => {
  const { math, science, english } = student.marks;
  const average = (math + science + english) / 3;
  student.averageMarks = average;
});


// Step 4: Find the student with the highest average marks
let topStudent = students[0]; // Assume the first student has the highest marks initially
students.forEach((student) => {
  if (student.averageMarks > topStudent.averageMarks) {
    topStudent = student;
  }
});
console.log(students);


// Step 5: Print the student with the highest average marks
console.log(`The student with the highest average marks is ${topStudent.name} with an average of ${topStudent.averageMarks}.`);