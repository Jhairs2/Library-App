// // Global variables
let myLibrary = []


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.showInfo = function () {
    return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}`;
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookContent = document.querySelector(".main-content");
        let card = document.createElement("div");
        let textTitle = document.createElement("p");
        let textAuthor = document.createElement("p");
        let textPages = document.createElement("p");
        let textReadCheck = document.createElement("p");
        let checkBox = document.createElement("input");
        let delButton = document.createElement("button")
        delButton.textContent = "Delete"
        checkBox.type = "checkbox";
        checkBox.classList.add("readCheck");
        checkBox.addEventListener("click", myLibrary.toggleRead)
        card.classList.add("card");
        textTitle.textContent = "Title: " + myLibrary[i].title;
        textAuthor.textContent = "Author: " + myLibrary[i].author;
        textPages.textContent = "Page Count: " + myLibrary[i].pages + " pages";
        textReadCheck.textContent = "Read: " + myLibrary[i].read;
        card.appendChild(textTitle);
        card.appendChild(textAuthor);
        card.appendChild(textPages);
        card.appendChild(textReadCheck);
        card.appendChild(checkBox);
        card.appendChild(delButton);
        bookContent.appendChild(card);
    }
}

addBookToLibrary("TIm", "Bobby Lee", "456", "Read");
addBookToLibrary("Rose Clarkson", "Freddy Deone", "851", "Read");
addBookToLibrary("Derrick", "Commie Gregs", "152", "Not read");
addBookToLibrary("The Other Way", "Rich Nathan", "250", "Read");
addBookToLibrary("Beach Boys", "Rolly Mikerson", "85", "Not read");
addBookToLibrary("TIm", "Bobby Lee", "456", "Read");



showBooks();
