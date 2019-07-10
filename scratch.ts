// function getTotal(unitPrice: number, quantity: number, discount: number): number {
//     const priceWithoutDiscount = unitPrice * quantity;
//     const discountAmount = priceWithoutDiscount * discount;
//     return priceWithoutDiscount - discountAmount;
// }

// let total: number = getTotal(500, 1, 0.1);

// Any type
let flag;

// Void type
function logText(text: string): void {
    console.log(text)
}

// Never Type
// Must be explicitly defined as it will not be inferred
function foreverTask(taskName: string): never {
    while (true) {
        console.log(`Doing ${taskName} over and over again ...`);
    }
}

// Enumerations
// Enumerations allow us to declare a meaningful set of friendly names
// that a variable can be set to.  We use the enum keyword,
// followed by the name we want to give to it, followed by the possible values in curly braces.
enum OrderStatus {
    Paid=1,
    Shipped,
    Completed,
    Cancelled
}

let statuss = OrderStatus.Shipped;
console.log(statuss);

// Objects
const customer = {
    name: "Lamps Ltd",
    turnover: 2000134,
    active: true
}

customer.turnover = 500000;

// customer.profit = 10000;  // Does not exist

// Arrays
const numbers: number[] = [];
numbers.push(1);
numbers.push(3);
numbers.push(5);

const numbersInf = [1,3,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

for (let i=0;i<numbersInf.length;i++) {
    console.log(numbersInf[i]);
}

for (let i in numbersInf) {
    console.log(numbersInf[i]);
}

numbers.forEach(function (num) {
    console.log(num);
})

let customer2: object;
customer2 = {
    name: "Lamps Ltd",
    turnover: 2000134,
    active: true
};

// TS is not aware of the turnover prop,
// Since the object was defined as emptyp prior to assigning.
// customer2.turnover = 2000200;

// Interfaces
// An interface is a contract that defines a type with a collection of property and method
// definitions without any implementation.

interface Product {
    name: string;
    unitPrice: number;
}

interface OrderDetail {
    product: Product;
    quantity: number;
    getTotal(discount: number): number;
}

const table: Product = {
    name: "Table",
    unitPrice: 500
}

const tableOrder: OrderDetail = {
    product: table,
    quantity: 1,
    getTotal(discountPercentage: number): number {
        const priceWithoutDiscount = this.product.unitPrice * this.quantity;
        const discountAmount = priceWithoutDiscount * discountPercentage;
        return priceWithoutDiscount - discountAmount;
    }
}


// Aliases


// Classes

