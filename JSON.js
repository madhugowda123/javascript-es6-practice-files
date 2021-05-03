// in json key and values

// {
//     "name": "madhu",
//     "age": 23,
//     "designation": "engineer",
//     "address": {
//         "street": "basvangudi",
//         "city": "Banglore",
//         "pincode": 567567
//     },
//     "phone": [8596857485,9685748585],
//     "isMarried": false
// },

let person = {
  fullname: "madhu",
  degree: "bca",
};
console.log(person);

// convert into string

let stringifiedPersonObject = JSON.stringify(person);
console.log(stringifiedPersonObject);

// convertin from string to object

console.log(JSON.parse(stringifiedPersonObject));
