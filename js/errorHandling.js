"use strict"; //this keyword used for strict mode

// word = "sudharsun"; //reference error
const word = "sudharsun";

console.log(word)

//Object..create()  //syntax error

// word = "sun;" //type error

//...............................//


const errorHandling = () => {
try{                          //error occuring block

throw new Error("throw error");  //throw the error message to catch

}

catch (err){          // catch the error from throw

         console.log(err);
         
         console.warn(err);

         console.error(err);

         console.error(err.name);

         console.error(err.message);

         console.error(err.stack);

}

finally{           //finalyy always exected after try even it may or may not occur error
    console.log("...finally Executed...")
}
}

errorHandling();  //call the function  