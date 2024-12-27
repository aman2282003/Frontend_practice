input = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 },
];

// Output: [
//   { name: "David", performance: "Excellent" },
//   { name: "Alice", performance: "Excellent" },
//   { name: "Charlie", performance: "Good" },
// ];

ans = input
  .filter((ele) => {
    return ele.tasksCompleted > 5;
  })
  .map((ele) => {
    let performance;
    if (ele.rating > 4.5) {
      performance = "Excellent";
    } else if (ele.rating >= 3 && ele.rating <= 4.5) {
      performance = "Good";
    } else {
      performance = "Needs Improvement";
    }
    return { name: ele.name, performance };
  })
  .filter((ele) => ele.performance !== "Needs Improvement")
  
  .sort((a, b) => {
    const performanceOrder = {
      Excellent: 3,
      Good: 2,
      "Needs Improvement": 1,
    };
    return performanceOrder[b.performance] - performanceOrder[a.performance];
  });

console.log(ans);
