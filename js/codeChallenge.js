/*
//Challenge 1 :
//generate random letter from the word..
console.log("sudha".charAt(Math.floor(Math.random()*5)))  

//In efficient way..
let word = "sudharsun";
console.log(word.charAt(Math.random()*word.length));

*/

/*
//Challenge 2:

let start = confirm("shall we play stone/paper/scissor");

if(start)
    {
       let user =  prompt("Enter Your Choise : \n Stone\n Paper\n Scissor");

       if(user)
        {
            let userChoice = user.trim().toLowerCase();

            if(userChoice == "stone" || userChoice == "paper" || userChoice == "scissor")
            {

                let computer = Math.floor(Math.random()*3+1); 

                let computerChoice = computer == 1 ? "stone"
                                        : computer == 2 ? "paper"
                                        : "scissor"

                let result =
                        userChoice == computerChoice ? "Match Tie"
                        : userChoice == "stone"   && computerChoice == "paper"   ? "You Lose :("
                        : userChoice == "scissor" && computerChoice == "stone"   ? "You Lose :("
                        : userChoice == "paper"   && computerChoice == "scissor" ? "You Lose :("
                        : "You Won :)" ;

                alert(result);

                let playagain = confirm("Do You Want Play Again?");
                
                playagain ? location.reload() : alert("Its okay Fine!!!");
            }
            else
            {
                alert("Enter a Valid Choise");

            }
        }

        else
        {
            alert("Its okay Fine!!!");

        }
   }
else
    {
        alert("Its okay Fine!!!");
    }

*/

//challenge 3 efficient :

let start = confirm("shall we play stone/paper/scissor");

if(start)
    {
        while(start)
        {
            let user =  prompt("Enter Your Choise : \n Stone\n Paper\n Scissor");

            if(user)
                {

                    let userChoice = user.trim().toLowerCase();

                    if(userChoice == "stone" || userChoice == "paper" || userChoice == "scissor")
                    {

                        let random = Math.floor(Math.random()*3+1); 

                        const computer = ["stone","paper","scissor"];

                        let computerChoice = computer[random];

                        let result =
                                userChoice == computerChoice ? "Match Tie"
                                : userChoice == "stone"   && computerChoice == "paper"   ? "You Lose :("
                                : userChoice == "scissor" && computerChoice == "stone"   ? "You Lose :("
                                : userChoice == "paper"   && computerChoice == "scissor" ? "You Lose :("
                                : "You Won :)" ;

                        alert(result);

                        let start = confirm("Do You Want Play Again?");
                        
                        if (start) 
                            continue;
                        
                        alert("Thak You For Playing");
                        break;
                            
                    }                             
                
                    else
                    {
                        alert("Enter a Valid Choise");
                        continue;

                    }

                    }
        
                else
                {
                    alert("Its okay Fine!!!");
                    break;
                }
        }
    }
else
    {
        alert("Its okay Fine!!!");
    }
