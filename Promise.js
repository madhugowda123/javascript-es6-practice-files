let status = 200;

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (status === 200) {
      resolve("success");
    } else {
      reject("failure");
    }
  }, 5000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(["madhu", "prathama", "kavya", "kusuma"]);
    if (status === 200) {
      resolve("success");
    } else {
      reject("failure");
    }
  }, 5000);
});

//then and catch

// console.log("started");
// promise1
//   .then((data) => {
//     console.log("in then block", data);
//     return promise2;
//   })
//   .then((students) => {
//     console.log(students);
//   })
//   .catch((err) => {
//     console.log("in catch block", err);
//   });
// console.log("ended");

//async and await to get the data from promise

async function getData() {
  try {
    let student = await promise2;
    console.log(student);
  } catch (err) {
    console.log(err);
  }
}
getData();
