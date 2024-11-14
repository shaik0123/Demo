import {prompt, question, questionInt} from 'readline-sync';

let bookData = [{ id: "101", name: "Spare", price: "300", status: "available", quantity: "10" },
{ id: "102", name: "Eyres", price: "400", status: "available", quantity: "15" },
{ id: "103", name: "Honey", price: "200", status: "no-stock ", quantity: "00" },
{ id: "104", name: "1940s", price: "150", status: "available", quantity: "07" },
{ id: "105", name: "Women", price: "700", status: "available", quantity: "09" },
{ id: "106", name: "Catch", price: "250", status: "available", quantity: "20" },
{ id: "107", name: "Story", price: "200", status: "no-stock ", quantity: "00" },
{ id: "108", name: "Laris", price: "180", status: "available", quantity: "05" },
{ id: "109", name: "Crazy", price: "550", status: "available", quantity: "11" },
{ id: "110", name: "Poppy", price: "600", status: "available", quantity: "18" },
];
console.log("Welcome to book store");
console.log("choose one option.\n 1).Show available books\n 2).Add book\n 3).show cart");
const userInput = questionInt();
console.log(userInput+"llll");

// const userInput = prompt("choose one option.");
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


function showAvailableBooks() {

    console.log("----------------------------------------------------------");
    console.log("|  id  |    name    |  price  |  quantity  |   status    |");
    console.log("----------------------------------------------------------");
    
    // bookData.forEach(data => {
    //     for(let i in data){
    //         console.log(data[i]); 
    //     }
    // })

    bookData.map((element) =>{
        console.log("| "+element.id+" |    "+ element.name+"    |   "+ element.price+"   |     "+element.quantity+"     |   "+element.status+" |");  
    })
   
    console.log("showing");
}
function addBook() {
    
    console.log("addbook");
}
function showCart() {
    console.log("showcart");
}


