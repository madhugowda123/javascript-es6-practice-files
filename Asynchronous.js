// console.log('program startes');
 
// setTimeout(() => {
//     console.log('in settimeout');
// }, 2000);

// console.log('ended');

//asynchronous code in synchronous way

function one() {
    console.log('first function');
}

function two(callback) {
    setTimeout(() => {
        console.log('second function');
        callback();
    }, 2000);
}

function three() {
    console.log('third function');
}

one()
two(three)