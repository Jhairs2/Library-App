// // Global variables
// const addBook = document.querySelector(".add");
// const menu = document.querySelector(".book-details-container");
// let myLibrary = []


// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

// Book.prototype.showInfo = function () {
//     return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}`;
// }


// function addBookToLibrary(title, author, pages, read) {
//     let book = new Book(title, author, pages, read);
//     myLibrary.push(book);
// }

// function showBooks() {
//     for (let i = 0; i < myLibrary.length; i++) {
//         const bookContent = document.querySelector(".main-container");
//         const deleteButton = document.createElement("button");
//         const checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         deleteButton.textContent = "Delete";
//         deleteButton.setAttribute("data-index", i);
//         let card = document.createElement("div");
//         let text = document.createElement("p");
//         card.classList.add("card");
//         text.textContent = myLibrary[i].title + " by " + myLibrary[i].author + " " + myLibrary[i].pages + " pages " + myLibrary[i].read;
//         card.appendChild(text);
//         card.appendChild(deleteButton);
//         card.appendChild(checkbox);
//         bookContent.insertAdjacentElement("beforeend", card);
//     }
// }

// addBookToLibrary("TIm", "Bobby Lee", "456", "Read");
// addBookToLibrary("Rose Clarkson", "Freddy Deone", "851", "Read");
// addBookToLibrary("Derrick", "Commie Gregs", "152", "Have not read");
// addBookToLibrary("The Other Way", "Rich Nathan", "250", "Read");
// addBookToLibrary("Beach Boys", "Rolly Mikerson", "85", "Have not read");


// showBooks();