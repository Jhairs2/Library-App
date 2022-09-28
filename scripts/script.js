// // Global variables
let myLibrary = []

const openModal = document.getElementById("addBook");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const submit = document.querySelector(".add");


// 

// Event listeners to open and close modal
openModal.addEventListener("click", () => {
    modal.showModal();
    modal.style.display = "";
})

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modal.close();
})




function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;


};

Book.prototype.readToggle = function readToggle(toggle) {
    if (toggle.checked) {
        return this.read = "Read";
    } else {
        return this.read = "Not Read";
    }
}


function addBooksToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    showBooks();
}


function showBooks() {
    const mainContainer = document.querySelector(".main-content");
    const removeCards = document.querySelectorAll(".card");


    for (let i = 0; i < removeCards.length; i++) {
        removeCards[i].remove();
    };


    let index = 0;
    let readIndex = 0;
    // Append book card with book info to content
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        const readContainer = document.createElement("div");
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        card.classList.add("card");
        deleteButton.dataset.index = index;
        readContainer.classList.add("readCheck");
        mainContainer.appendChild(card);
        index++;
        for (let key in myLibrary) {

            if (key !== "read" & key !== "readToggle") {
                const p = document.createElement("p");
                p.textContent = (`${key}: ${myLibrary[key]}`);
                card.appendChild(p);
            }
            else if (key == "read") {

                const readCheck = document.createElement("input")
                const p = document.createElement("p");
                readCheck.type = "checkbox";
                readCheck.classList.add("readToggle");
                readCheck.dataset.index = readIndex;
                readIndex++;
                p.textContent = (`${key}: ${myLibrary[key]}`);
                p.classList.add("tog");
                deleteButton.textContent = "Remove";
                readContainer.appendChild(p);
                readContainer.appendChild(readCheck);
                card.appendChild(readContainer);
                card.appendChild(deleteButton);

            }
        }

    });

    const deleteBttn = document.querySelectorAll(".delete");
    deleteBttn.forEach(button => {
        button.addEventListener("click", () => {
            let index = button.dataset.index;
            myLibrary.splice(index, 1);
            showBooks();
        })
    })


    const toggleRead = document.querySelectorAll(".readToggle");
    const togs = document.querySelectorAll(".tog");
    toggleRead.forEach(toggle => {
        let index = toggle.dataset.index;
        if (myLibrary[index].read == "Read") {
            toggle.checked = true;
        }
        else {
            toggle.checked = false;
        }
        toggle.addEventListener("change", (e) => {
            const readCheck = Object.create(Book.prototype);
            togs[index].textContent = `Read: ${readCheck.readToggle(e.target)}`;
        })
    })
}








submit.addEventListener("click", (e) => {
    e.preventDefault();
    const readCheck = Object.create(Book.prototype);
    const formInputs = document.querySelectorAll("input");
    title = formInputs[0].value;
    author = formInputs[1].value;
    pages = formInputs[2].value;

    if (title == "" || author == "" || pages == "") {
        return;
      }
    addBooksToLibrary(title, author, pages, readCheck.readToggle(formInputs[3]));
    modal.style.display = "none";
    modal.close();
})



addBooksToLibrary("Blow", "Kim Gourd", "521", "Read");
