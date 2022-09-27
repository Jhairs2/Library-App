// // Global variables
let myLibrary = []

const openModal = document.getElementById("addBook");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");



// Event listeners to open and close modal
openModal.addEventListener("click", ()=> {
    modal.showModal();
    modal.style.display = "";
})

closeModal.addEventListener("click", ()=> {
    modal.style.display = "none";
    modal.close();
})



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Book.prototype.showInfo = function () {
//     return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}`;
// }

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    showBooks();
}

function showBooks() {
    // Select the main section
    const mainContainer = document.querySelector(".main-content");
    const readCheck = document.createElement("input")

    // Remove all previous cards
    const removeDivs = document.querySelectorAll(".card");
    for(let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

    // Append book card with book info to content
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        mainContainer.appendChild(card);
        for(let key in myLibrary) {
            const p = document.createElement("p");
            p.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(p);
        }
    });

    
}




addBookToLibrary("TIm", "Bobby Lee", "456", "Read");
addBookToLibrary("Rose Clarkson", "Freddy Deone", "851", "Read");
addBookToLibrary("Derrick", "Commie Gregs", "152", "Not read");
addBookToLibrary("The Other Way", "Rich Nathan", "250", "Read");
addBookToLibrary("Beach Boys", "Rolly Mikerson", "85", "Not read");
addBookToLibrary("TIm", "Bobby Lee", "456", "Read");



