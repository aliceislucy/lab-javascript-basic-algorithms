// Iteration 1: Names and Input

let cohort124 = [
  hacker1 = {
  name: "Alice",
  job: "Driver",}
  ,
  hacker2 = {
  name: "Julia",
  job: "Navigator",}
]
console.log(`The drive's name is ${cohort124[0].name}`);

console.log("The drive's name is" + cohort124[1].name);

// Iteration 2: Conditionals

if (cohort124[0].name.length > cohort124[1].name.length) {
  console.log(`The driver has the longest name, it has ${cohort124[0].name.length} characters.`);

} else if (cohort124[0].name.length < cohort124[1].name.length) {
  console.log(`It seems that the navigator has the longest name, it has ${cohort124[1].name.length} characters.`);

} else {
  console.log(`Wow, you both have equally long names, ${cohort124[0].name.length} characters!`);
}

// Iteration 3: Loops

//3.1
/* console.log(cohort124[0].name.split("").join(" ").toUpperCase()); */

let tmp = "";

for (i = 0 ; i < cohort124[0].name.length ; i++) {
    tmp += cohort124[0].name.toUpperCase() + " ";
}

console.log(tmp);


 /*
for (let i = ""; i.length <= ; i += "*") {
  console.log(i);
}
*/


//3.2
/*
function reverseString(name){
    return name.split("").reverse().join("");
}
var result = reverseString(cohort124[0].name);
console.log(result);
*/

let reverse = ""

for (let i = cohort124[0].name.length - 1; i >= 0; i--) {
  reverse += cohort124[0].name[i];
}

console.log (reverse);




/* let rev = "";

for (i = 0 ; i < cohort124[0].name.length ; i--) {
    rev += cohort124[0].name[i].toUpperCase() + " "
}

console.log(tmp);


for (i = 0 ; i<= cohort124[0].name.length ; i++) {
    console.log(cohort124[0].name[i]);
    4:40
    }



//3.3 */

if (cohort124[0].name === cohort124[1].name) {
  console.log("What?! You both have the same name?");

} else {

  for (i = 0; i < cohort124[0].name.length; i++) {
    
    if (cohort124[0].name[i] === cohort124[1].name[i]) {
      continue;

    } else if (cohort124[0].name[i] > cohort124[1].name[i]) {
      console.log("Yo, the navigator goes first definitely.");
      break;

    } else if (cohort124[0].name[i] < cohort124[1].name[i]) {
      console.log("The driver's name goes first.");
      break;
    }
  }
}