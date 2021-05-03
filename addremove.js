var list = document.querySelector(".test")
// console.log(list.childNodes);

// useing input type add elements to  list
function addElementFromInput(){
    var x = document.user.data;
    console.log(x.value);
    var y = document.createElement("li"); //create Element
    y.innerText = x.value;
    list.appendChild(y)
    return false;
}

 //useing add button add the elements to list

function addElement(){
    var userData = prompt("Enter Technology"); // get data from user
    var x=document.createElement("li");//create Element
    x.innerText = userData;

    //AppendChild
    //list.appendChild(x); // at last
    //list.insertBefore(x ,list.childNodes[5]) //before 5th index
    list.insertBefore(x, list.firstElementChild.nextElementSibling); //to Second position
}


function removeElement(){
    // list.remove(); // to remove entair list
    //list.removeChild(list.childNodes[5])//to remove 5th index element
    list.removeChild(list.firstElementChild)
}