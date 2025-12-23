Object.prototype.getKeys = function () {
  return Object.keys(this);
};

const student = {
  name: "John",
  age: 23,
  city: "Manhattan",
};

console.log(student.getKeys());