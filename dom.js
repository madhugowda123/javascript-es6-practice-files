function clickEve(){
    var x =document.querySelector(".test");
    console.log(x.innerText);
    console.log(x.id);
}

var y =  document.createElement('div');
y.innerHTML ='<h1> Inner Text</h1>';
Document.body.appendChild(y);


//manupulate existing element

function getByClass(){
    var x =document.getElementsByClassName('demo')
    console.log(x);


for(const key in x){
    x[key].innerHTML="GET element by Class"
    x[key].style.background="grey"
}
}


function getByTag(){
    var x =document.getElementsByTagName('p')
    for(let key in x){
        x[key].style.background="yellow"

    }
}
function getByQuerySelector(){
    // var x =document.getElementsByClassName('.demo')
    // var x =document.getElementsById('#test')
    var x =document.querySelector('.demo');
    x.style.color="blue"
    x.style.fontSize="50px"
    console.log(x);
}