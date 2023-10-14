const chicago = ["monke","chiraq", "chief", "keef", "Marcoval", "YAzzing"];
chicago[0] = "oblock";
console.log(chicago);
const result = chicago.filter((word) => word.length <= 4);
console.log(result)


const birds = ["Parrot", "Falcon", "Owl","marco"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("marco")); // 3

const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


const Parrots = {
language: "Surroundings",
color: ["Yellow", "Green", "Blue", "Purple", "Red", "Orange", "Pink"], 
Fly: "true",
UsuallyEaten:"No",
Goat: "No",
}

const Penguins = {
language: "Penguinanian",
color: ["Black", "White"],
Fly:"false",
UsuallyEaten:"No",
Goat:"No",
}

const Duck = {
Language: "Quack",
color: ["Yellow", "Green", "White", "Brown"],
Fly:"True",
UsuallyEaten:"Yes",
Goat:"No",
}
const Toucan= {
    language: "Kakaw",
    color:["Yellow", "Red","Blue", "Orange", "Purple", "Green", "Rainbow" ],
    Fly: "True",
    UsuallyEaten:"No",
    Goat:"Fruit Loops",
}

const Birds= [Parrots,Penguins,Duck,Toucan]
Birds.forEach((yum) => console.log(yum));