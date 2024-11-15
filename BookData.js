import { questionInt } from 'readline-sync';

let bookData = [{ id: "101", name: "Spare", price: "300", status: "available", quantity: 7 },
{ id: "102", name: "Eyres", price: "400", status: "available", quantity: 5 },
{ id: "103", name: "Honey", price: "200", status: "available ", quantity: 6 },
{ id: "104", name: "1940s", price: "150", status: "available", quantity: 7 },
{ id: "105", name: "Women", price: "700", status: "available", quantity: 9 },
{ id: "106", name: "Catch", price: "250", status: "available", quantity: 2 },
{ id: "107", name: "Story", price: "200", status: "available ", quantity: 4 },
{ id: "108", name: "Laris", price: "180", status: "available", quantity: 5 },
{ id: "109", name: "Crazy", price: "550", status: "available", quantity: 1 },
{ id: "110", name: "Poppy", price: "600", status: "available", quantity: 8 },
];
let cartItems = [];
console.log("Welcome to book store");
let bool = true;
while (bool) {
    console.log("choose one option.\n 1).Show available books\n 2).Add book\n 3).show cart");
    let userInput = questionInt();
    switch (userInput) {
        case (1):
            showAvailableBooks();
            break;
        case (2):
            addBook();
            break;
        case (3):
            showCart();
            break;
        default:
            break;
    }
}


function showAvailableBooks() {

    console.log("----------------------------------------------------------");
    console.log("|  id  |    name    |  price  |  quantity  |   status    |");
    console.log("----------------------------------------------------------");

    bookData.map((element) => {
        console.log("| " + element.id + " |    " + element.name + "    |   " + element.price + "   |     " + element.quantity + "     |   " + element.status + " |");
    })

    console.log("showing");
}
function addBook() {
    console.log("Give id number of the book");
    const bookNumber = questionInt();
    let selectedBook = bookData.find((element) => {
        return element.id == bookNumber && element.quantity--;
    })
    for (let item of cartItems) {
        if (item.id === selectedBook.id) {
            item.quantity++;
            return;
        }
    }
    cartItems.push({ id: selectedBook.id, name: selectedBook.name, price: selectedBook.price, status: selectedBook.status, quantity: 1 });

    console.log("addbook");
}
function showCart() {
    console.log("----------------------------------------------------------");
    console.log("|  id  |    name    |  price  |  quantity  |   status    |");
    console.log("----------------------------------------------------------");
    if (cartItems.length === 0) {
        console.log("cart is empty");
    } else {
        cartItems.map(element => {
            console.log("| " + element.id + " |    " + element.name + "    |   " + element.price + "   |     " + element.quantity + "     |   " + element.status + " | ");
        })
    }
    console.log("showcart");
}


