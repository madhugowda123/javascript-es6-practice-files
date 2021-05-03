// copy one object to another object useing spread operator

let person = {
  name: "madhu",
  degree: "bca",
};
let employee = {
  ...person,
  empId: 123,
};
console.log(employee);

// copy one array to another array useing spread operator

let frontEndCourses = ["HTNL", "CSS"];

let allCourses = [...frontEndCourses, "Java", "Node.js"];
console.log(allCourses);

//REST PARAMETER

function sum(...args) {
  console.log(args); // it is array of arguments
  let total = 0;
  for (let value of args) {
    total += value;
  }
  console.log(total);
}
sum(10, 23, 13, 1, 45);
