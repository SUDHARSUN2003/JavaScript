const view1 = document.getElementById("view1");

console.log(view1);

const view2 = document.querySelector("#view2"); //method 2

console.log(view2);

view1.style.display = "flex";
view2.style.display = "none";

//accessing by class
const view3 = document.getElementsByClassName("view");

console.log(view3);

const view4 = document.querySelectorAll(".view");

console.log(view4);

//accessing the div element
const div = document.getElementsByTagName("div");
console.log(div);

const div1 = document.querySelectorAll("div");  //method 2
console.log(div1);

const evenDivs = document.querySelectorAll("div:nth-child(even)");

console.log(evenDivs);

evenDivs[0].style.backgroundColor = "red";

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "red";
    evenDivs[i].style.height = "150px";
}

const navText = document.querySelector("nav h1");

console.log(navText);

navText.textContent = "sudharsun"; //textContent just alter the text

const navBar = document.querySelector("nav");

console.log(navBar);

navBar.innerHTML = '<h1>Hi Guys </h> <p>This is my first Page </p>'  //innerHTML add new html codes

navBar.style.backgroundColor = "purple";

navBar.style.justifyContent = "space-evenly"

console.log(evenDivs[0]);

console.log(evenDivs[0].parentElement);

console.log(evenDivs[0].parentElement.children);

console.log(evenDivs[0].parentElement.childNodes);

console.log(evenDivs[0].parentElement.hasChildNodes());

console.log(evenDivs[0].parentElement.lastChild);

console.log(evenDivs[0].parentElement.lastElementChild);

console.log(evenDivs[0].parentElement.firstChild);

console.log(evenDivs[0].parentElement.firstElementChild);

console.log(evenDivs[0].parentElement.childElementCount);

console.log(evenDivs[0].nextSibling);

console.log(evenDivs[0].nextElementSibling);

console.log(evenDivs[0].previousSibling);

console.log(evenDivs[0].previousElementSibling);

view1.style.display = "none";
view2.style.display = "flex";

console.log(view2.lastElementChild);

view2.lastElementChild.textContent = "Welcome";

view2.lastElementChild.remove();


const createElement = (parent,iter) =>
{
    const newDiv = document.createElement("div");

    parent.append(newDiv);
    
    newDiv.style.backgroundColor = "yellow"
    newDiv.textContent = iter;
    newDiv.style.height = "150px";
    newDiv.style.width = "150px";
    newDiv.style.margin ="10px"
    newDiv.style.color = "black";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
}

for(let i = 1 ; i<=12 ; i++)
    
    createElement(view2,i);