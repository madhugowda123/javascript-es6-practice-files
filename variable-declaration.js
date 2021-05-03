var a=10;
var a="test"
console.log(a);

let b="sample";
 //let b=10;  // redeclaration is not possible

 function test() {
     var fullname= 'Madhu';
     let designation = 'software developer'
     console.log('inside a function',fullname);
     console.log(designation);
 }
 test();
// console.log(designation); not works
 //console.log('outside the function', fullname);   // not works

//var can access  outside the {}
 if(true){
     var company ='Test Yantra'
     console.log('in the if block', company);
 }                                             
 console.log('outside if block', company);

 // let not access outside the {}
 if(true){
    let company ='Test Yantra'
    console.log('in the if block', company);
}                                             
