document.addEventListener("readystatechange" , (event)=>
    {
         if(event.target.readyState == "complete") 
        {    console.log("complete");
             initApp();
        }
    })

const initApp = ()=>{
    const myObject = { regno : 219,
        pass : true,
        marks : [1,2,3,4,5],
        grade : "A+",
        subject : { mw : 80,  //object in object
                    cn : 90,
                    dc : 70
                  },
        total : function() {  //function in object
             return this.regno ;
         } ,
     };

     window.sessionStorage.setItem("sessionStore",JSON.stringify(myObject));

     const key = localStorage.length

     console.log(key)

     const sessionData = JSON.parse(sessionStorage.getItem("sessionStore"));

     console.log(sessionData);
}