() => {
  console.log(" i am a fat arrow function");
};

let a = () => {
  console.log("fat arrow function");
};
a();

let printName = (name) => {
  console.log(name);
};
printName("Madhu");
//or
let printName = name => {
    console.log(name);
  };
  printName("Madhu");
  

let sum = (a, b) => {
  return a + b;
};
console.log(sum(12, 13));
// or
let sum = (a, b, c) => a + b - c;
console.log(sum(12, 23, 10));
