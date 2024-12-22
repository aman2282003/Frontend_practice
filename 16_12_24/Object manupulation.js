// 1. Define an object budget with the following key-value pairs:
// income: 1000
// expenses: 700

budget = {
  income: 1000,
  expenses: 700,
};
console.log(budget);

// 2. Add a new property savings with a value equal to income - expenses.
budget.saving = budget.income - budget.expenses;
console.log(budget);
// 3. Update income to 1200 and recalculate savings.
budget.income = 1200;
console.log(budget);
budget.saving = budget.income - budget.expenses;
// 4. Print the updated budget object.
console.log(budget);
