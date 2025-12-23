const student = {
  name: "John",
  age: 23,
  city: "Manhattan",
  getKeys() {
    return Object.keys(this);
  },
};

console.log(student.getKeys()); // ["name", "age", "city"]