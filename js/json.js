//JSON convert the data as string , it ingnore function()


const obj = {
            name : "sudharsun",
            gender : "male",
            college : "MKCE",
            marks : [1,2,3,4],
            rep : () =>{
                    console.log("enjoy")
               }            
}

const sentJSON = JSON.stringify(obj);  //object to JSON conversion
console.log(sentJSON);

const receiveJSON = JSON.parse(sentJSON); //JSON to object conversion
console.log(receiveJSON);