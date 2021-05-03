// Object Destructuring

let person = {
  fullname: "madhu",
  degree: "bca",
  aadharno: 1223456788654,
};
let { fullname, degree } = person;

console.log(fullname);
console.log(degree);

// array Destructuring

let courses = ["HTML", "CSS", "JavaScript", "Bootstrap"];

let [course1, course2, ...remaining] = courses;

console.log(course1);
console.log(course2);
console.log(remaining);
