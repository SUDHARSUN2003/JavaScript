document.addEventListener("readystatechange" , (event)=>
    {
         if(event.target.readyState == "complete") 
        {    console.log("complete");
             initApp();
        }
    })

const initApp = ()=>
    {
        const doc = document.querySelector("#view1")
        const div = doc.querySelector("div")
        const h1 = div.querySelector("h1")

        doc.addEventListener("click" , (event)=>
            {   
                doc.style.backgroundColor = "yellow";
                
            } , true
        ) 

        div.addEventListener("click" , (event)=>
            { 
                div.style.backgroundColor = "blue";
                event.stopPropagation();
            } , true
        )


        h1.addEventListener("click" , (event)=>
            { 
                event.target.textContent = "clicked";
            } , true
        )


    }