//event listener 
//syntax : tag_name , function , capture
//capture  default - false 
//false up prpogation , true - down propogation

const doc = document.querySelector("#clk")
const div = doc.querySelector("div")
const h1 = div.querySelector("h1")

console.log(h1);

const notification = () =>
    { 
        alert("clicked");
    }

h1.addEventListener("click" , notification , false);

h1.removeEventListener("click" , notification);

const effect = () =>
    {
        console.log(event.target);
        event.target.textContent = "clicked";
        
        event.target.style.backgroundColor = "red"
    }

h1.addEventListener("click" , effect , false)

