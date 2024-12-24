obj = {
  name: "aman",
  age: 40,
  address: "ludhiana",
  getuserDetails() {
    return `${this.name} is ${this.age} years old and lives at ${this.address}`;
  },
};


console.log(obj.getuserDetails())