// DECISION MAKING EXERCISE

// ONE-A
let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);

// ONE-B
if(randomNum >= 4){
    console.log("Greater than or equal to 4");
} else if (randomNum >= 2) {
  console.log("Equal to 2 or 3");
} else {
  console.log("Equal to 1");
}

// ONE-C
if (randomNum != 3) {
      console.log("Not equal to 3");
    }
    
 // ONE-D
if (randomNum != 3 && randomNum != 5) {
    // if (randomNum !== (3 && 5)) {
    console.log("NOT equal to 3 AND not equal to 5");
  }   

//   ONE-E
if (randomNum === 2 || randomNum === 4) {
    console.log("Equal to 2 OR Equal to 4");
}


// BONUS ONE
var result = (randomNum >=4) ? "Greater than or equal to 4" : "Less than 4";
console.log(result);

// BONUS TWO
var result=randomNum;
switch(result) {
    case 1:
        console.log("ONE")
        break;
    case 2:
        console.log("TWO")
        break;
    case 3:
        console.log("THREE")
        break;
    case 4:
        console.log("FOUR")
        break;
    case 5:
        console.log("FIVE")
        break;                
}
