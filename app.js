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