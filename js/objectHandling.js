
const movie = { actor : "vijay",
                actress : "samantha",
                director : "lokesh"
              };

movie.music = "anirudh" //adding new properties

delete movie.director; //delete any property

console.log(movie);

console.log(Object.keys(movie)); //to print all keys in obj
console.log(Object.values(movie));

console.log(movie.hasOwnProperty("producer")); //to check obj consist this property or not , return boolean

//using for in loop 

for(let job in movie)
    {
        console.log(movie[job]);
    }

for(let job in movie)
    {
        console.log(`${job} is ${movie[job]}`);
    }
       

// destructuring th eobjects

const {actor : myFavActor} = movie;  //single variable

console.log(myFavActor);

const {actress : myFavActress , music : myFavMusicDir} = movie;  //multiple variable

console.log(myFavActress , myFavMusicDir);

const {actor,actress,music} = movie;  //key as variable (above we use different var name so assigning)

console.log(actor,actress,music);

//........................//

function song(music)
  {
    return music;
  }

console.log(song(movie)); //it pass whole obj - so the function return whole obj

function songs({music})
  {
    return music;
  }

console.log(songs(movie)); //it pass whole obj - but using {} it takes only key present in {}