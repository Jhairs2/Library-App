const bookData = document.querySelectorAll("input");
const button = document.querySelector(".submit");
const addBook = document.querySelector(".add")
let info = document.querySelector(".info");
let MAIN = document.querySelector(".content");
let myLibrary = [];



button.addEventListener("click", () => {
    addBookToLibrary();
    bookData.forEach(input => {
        input.value = "";
    })
    hideInput();
    p1 = document.createElement("p");
    p1.textContent = myLibrary[0].title;
    MAIN.appendChild(p1)
})
addBook.addEventListener("click", showInput);



function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

}
Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}`
}


function addBookToLibrary() {
    myLibrary.push(new Book(bookData[0].value, bookData[1].value, bookData[2].value, bookData[3].value));
}



function showBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
    }
};


function showInput() {
    bookData.forEach(e => {
        e.style.display = "flex";
    })
    button.style.display = "block";
    addBook.style.display = "none";

}

function hideInput() {
    bookData.forEach(e => {
        e.style.display = "none";
    })
    button.style.display = "none";
    addBook.style.display = "block"
}