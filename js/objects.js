//basic object creation
const myObj = {name : "sudharsun"};
console.log(myObj.name);

//object in mutiple data types
const myObject = { regno : 219,
                   pass : true,
                   marks : [1,2,3,4,5],
                   grade : "A+",
                   subject : { mw : 80,  //object in object
                               cn : 90,
                               dc : 70
                             },
                   total : function() {  //function in object
                        return 10 + 20 ;
                    } ,
                   describe : function(){
                        return `your DC mark is ${this.subject.dc}`; //function return another properties of object
                   }
                };

console.log(myObject.regno);
console.log(myObject.marks);
console.log(myObject.marks[2]);
console.log(myObject.subject);
console.log(myObject.subject.cn);
console.log(myObject.total());
console.log(myObject.describe());

console.log(myObject["grade"]);  //another method 
console.log(myObject["subject"].cn);