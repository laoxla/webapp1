//Create a Product class that satisfies the following requirements:
//You should not be able to create a product without providing a value for the Name, Price, and UnitsInStock properties.
//You should be able to create a product without specifying a product Description.
//You should be able to modify the Name, Price, and UnitsInStock properties after the product is created.
var Product = (function () {
    function Product(_name, _price, _unitsInStock, description) {
        this.description = description;
        this.name = _name;
        this.price = _price;
        this.unitsInStock = _unitsInStock;
        console.log("New product has been made.");
    }
    Object.defineProperty(Product.prototype, "name", {
        set: function (value) {
            if (!value) {
                throw new Error("Please put a valid name.");
            }
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        set: function (value) {
            if (!value) {
                throw new Error("Please put a valid price.");
            }
            this._price = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "unitsInStock", {
        set: function (value) {
            if (!value) {
                throw new Error("Please put a valid unitsInStock.");
            }
            this._unitsInStock = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "createdProduct", {
        get: function () {
            return "Name: " + this._name + " Price: $" + this._price + " Unit in stock: " + this._unitsInStock;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
var myProduct = new Product("Plate", "26", "300");
console.log(myProduct.createdProduct);
////Create a customer object with first name and last name properties.If you attempt to assign an empty string to either first name or last name then throw an exception.
//let customer = {
//    _firstName: "",
//    _lastName: "",
//    set firstName(value) {
//        if (!value ) {
//            throw new Error("Exception!!!")
//        }
//        this._firstName = value;
//    },
//    set lastName(!value) {
//        if (value === "") {
//            throw new Error("Exception!!!")
//        }
//        this._lastName = value;
//    },
//    get fullName() {
//        return `${this._firstName} ${this._lastName}`
//    }
//};
//customer.firstName = "Larry";
//customer.lastName = "Strong";
//console.log(customer.fullName);
////Imagine that you have the following object:
//let product1 = {
//    name: 'Tesla',
//    price: 120000,
//    taxRate: 0.08,
////Add the following two methods to this object:
////calculateTax() - Returns the tax for the product.
////    calculateTotal() - Returns the total price for the product.
//calculateTax() {
//    return this.price * this.taxRate;
//    },
//    calculateTotal() {
//        return `Total Price: $${this.price + product1.calculateTax()}`;
//    }
//};
//console.log(product1.calculateTax());
//console.log(product1.calculateTotal());
//let genres = [
//    { name: 'SciFi', movies: ['Star Wars', 'Ex Machina'] },
//    { name: 'Action', movies: ['Die Hard'] },
//    { name: 'Drama', movies: ['The Godfather', 'Braveheart'] }
//];
////Using one or more for..of loop, display the contents of this nested array in the JavaScript console window:
//for (let genre of genres) {
//    console.log(`--${genre.name }`);
//    for (let value of genre.movies) {
//        console.log(`${value}`);
//    }
//}
//function printFullName(firstName, lastName) {
//    let fullName = `${firstName} ${lastName}`;
//    console.log(fullName);
//}
//Using template literals, create a function named printFullName() that prints a person's first and last name. For example, you can call the function like this:
//printFullName("Cody", "Shipley");
//printFullName("Stephen", "Walter");
//A whole number is a positive integer such as 0, 1, 2, 3, ... Create a strict addWholeNumbers() function in JavaScript that adds two integers and returns the result so that:
//addWholeNumbers(-1, 2)-- Throws an exception because - 1 is negative.
//    addWholeNumbers(3.4, 1)-- Throws an exception because 3.4 is not an integer.
//Provide a readable error message for each case.
//Hint:
//Use parseInt() to convert a decimal to an integer.
//function addWholeNumbers(num1, num2) {
//    if ((num1 < 0 || num2 < 0) || (num1 !== Math.floor(num1) || num2 !== Math.floor(num2))) {
//        throw new Error("Can only input positive number")
//    } else {
//        let addition = num1 + num2;
//        console.log(addition);
//    }
//}
//addWholeNumbers(-1, 2);
//addWholeNumbers(3.4, 1);
//Imagine that you have the following array of fruit:
//let fruit = ['apples', 'lettuce', 'oranges', 'apricots', 'kiwis'];
//Using a fat arrow and the array filter() method, display only the fruits that contain the letter 'a'.
//let fruits = ["apples", "lettuce", "oranges", "apricots", "kiwis"];
//let nameInclude = fruits.filter((fruit) => {
//    if (fruit.indexOf("a") > -1) {
//        return true;
//    }
//})
//console.log(nameInclude);
//Create the following game:
//The computer thinks of a number between 1 and 10 and does not tell you.
//You are prompted using window.prompt() to guess the number.
//If you guess the number then the computer says “You got it!”
//Extra Credit:
//If your guess is close (within 2 numbers) then display the message “Close!”
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
//# sourceMappingURL=file.js.map