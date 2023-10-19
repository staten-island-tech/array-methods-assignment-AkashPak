//const chicago = ["monke","chiraq", "chief", "keef", "Marcoval", "YAzzing"];
//chicago[0] = "oblock";
////console.log(chicago);
  //chicago.filter((word) => word.length <= 4);
//console.log(result)


//const birds = ["Parrot", "Falcon", "Owl","marco"];
//console.log(birds.indexOf("Owl")); //  2
//console.log(birds.indexOf("marco")); // 3

//const array1 = ['a', 'b', 'c'];

//array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


const Parrots = {
name: "Parrots",
language: "Surroundings",
color: ["Yellow", "Green", "Blue", "Purple", "Red", "Orange", "Pink"], 
Fly: "true",
UsuallyEaten:"No",
Goat: "No",
}

const Penguins = {
name:"Penguin",
language: "Penguinanian",
color: ["Black", "White"],
Fly:"false",
UsuallyEaten:"No",
Goat:"No",
}

const Duck = {
name: "Duck",
Language: "Quack",
color: ["Yellow", "Green", "White", "Brown"],
Fly:"True",
UsuallyEaten:"Yes",
Goat:"No",
}
const Toucan= {
    name: "Toucan",
    language: "Kakaw",
    color:["Yellow", "Red","Blue", "Orange", "Purple", "Green", "Rainbow" ],
    Fly: "True",
    UsuallyEaten:"No",
    Goat:"Fruit Loops",
}

let Birds= [Toucan, Duck, Penguins, Parrots]
Birds.forEach((birds)=> console.log(birds.name))
Birds.forEach((birds) => console.log(birds.color))
const mara= Birds.filter((Birds)=> Birds.UsuallyEaten ==="No")

mara.forEach((birds)=> console.log(birds.name))