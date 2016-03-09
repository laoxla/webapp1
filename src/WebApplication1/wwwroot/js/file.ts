console.log("Hello World!");


function addWholeNumbers(num1, num2) {
   
    if ((num1 < 0 || num2 < 0) || (num1 !== Math.floor(num1) || num2 !== Math.floor(num2))) {
        throw new Error("Can only input positive number")
    } else {
        let addition = num1 + num2;
        console.log(addition);
    }
  
}
addWholeNumbers(-1, 2);
addWholeNumbers(3.4, 1);


//for (let i = 0; i < 3; i++) {
//    (function () {
//        console.log(i);
//    })();
//} 


//let fruits = ["apples", "lettuce", "oranges", "apricots", "kiwis"];
//let nameInclude = fruits.filter((fruit) => {
//    if (fruit.indexOf("a") > -1) {
//        return true;
//    }

//})
//console.log(nameInclude);



//do {
//    let userChoice: any = prompt("Pick a number between 1 through 10.");
//    userChoice = parseFloat(userChoice);
//    let computerChoice = Math.ceil(Math.random() * 10);
//    if (userChoice === computerChoice) {
//        alert("You it!");
//    } 
//} while (confirm("Try Again"));




//function calculateTax(price: number, tax: number = 0.08) {
//    console.log(price * tax);
//}
//calculateTax(5.00, 0.10)
//calculateTax(5.00)


//function findLargestNumber(...numbers: number[]) {
//    return numbers.reduce(function (memo, num) {
//        if (num > memo) {
//            return num;
//        } else {
//            return memo;
//        }
//    }, numbers[0]);
//}
//console.log(findLargestNumber(1, 2, 3));
//console.log(findLargestNumber(3));
//console.log(findLargestNumber(6, 1));






//function counter() {
//    this.counter = 0;

//    setinterval(() => {
//        console.log(this.counter++);
//    }, 1000);
// }
// new counter();

