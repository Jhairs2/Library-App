// // Global variables
let myLibrary = []

const modal = document.getElementById("modal");
const openModal = document.getElementById("addBook");
const closeModal = document.getElementById("close-modal");
const submit = document.querySelector(".add");


// Event listeners 
submit.addEventListener("click", submitForm);
openModal.addEventListener("click", openMod)
closeModal.addEventListener("click", closeMod)



// Functions

// Create book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;


};

// Give toggle function to book object
Book.prototype.readToggle = function readToggle(toggle) {
    if (toggle.checked) {
        return this.read = "Read";
    } else {
        return this.read = "Not Read";
    }
}

// Will add book to library array
function addBooksToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    showBooks();
}

// Function opens modal
function openMod() {
    modal.style.display = "";
    modal.showModal();
    
}
// Function closes modal
function closeMod() {
    modal.style.display = "none";
    modal.close();
}

// Remove all cards on screen before add new card
function removeCards() {
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].remove();
    };
}

// Function will allow user to delete a card from library at certain index
function deleteCard() {
    const deleteBttn = document.querySelectorAll(".delete");
    deleteBttn.forEach(button => {
        button.addEventListener("click", () => {
            let index = button.dataset.index;
            myLibrary.splice(index, 1);
            showBooks();
        })
    })
}

// Function allows user to toggle read button
function toggleRead() {
    const toggleRead = document.querySelectorAll(".read-toggle");
    const messageToggle = document.querySelectorAll(".read-message");

    // Set checkbox to be checked if Read and unchecked if not
    toggleRead.forEach(toggle => {
        let index = toggle.dataset.index;
        if (myLibrary[index].read == "Read") {
            toggle.checked = true;
        }
        else {
            toggle.checked = false;
        }

        // Add event listener to checkbox to change the read status 
        toggle.addEventListener("change", (e) => {

            // readCheck will inherit toggle function from Book prototype to change book object status
            const readCheck = Object.create(Book.prototype);
            // Will change status at index of card selected
            messageToggle[index].textContent = `Read: ${readCheck.readToggle(e.target)}`;
        })
    })
}

// Function will create library card with user information and show it on screen to user
function showBooks() {
    const mainContainer = document.querySelector(".main-content");
    // Remove all cards
    removeCards();

    // Keep track of index for delete and read toggle buttons
    let index = 0;
    let readIndex = 0;

    // Append book card with book info to content
    myLibrary.forEach(myLibrary => {

        // Create book card elements
        const card = document.createElement("div");
        const readContainer = document.createElement("div");
        const deleteButton = document.createElement("button"); deleteButton.textContent = "Remove";

        // Add classes and data attributes
        deleteButton.classList.add("delete");
        card.classList.add("card");
        readContainer.classList.add("read-check");
        deleteButton.dataset.index = index;

        // Append card to main content and increase index var for next card
        mainContainer.appendChild(card);
        index++;

        // Add book info to card
        for (let key in myLibrary) {

            // Add book title, author, and pages info
            if (key !== "read" & key !== "readToggle") {
                const p = document.createElement("p");
                p.textContent = (`${key}: ${myLibrary[key]}`);
                card.appendChild(p);
            }
            else if (key == "read") {

                // create read check variables
                const readCheck = document.createElement("input"); readCheck.type = "checkbox";
                const p = document.createElement("p");

                // Add classes and data attributes
                readCheck.classList.add("read-toggle");
                p.classList.add("read-message");
                readCheck.dataset.index = readIndex;

                // Add info to variables
                p.textContent = (`${key}: ${myLibrary[key]}`);

                // Append container with elements to card and increase index var for next card
                readContainer.appendChild(p);
                readContainer.appendChild(readCheck);
                card.appendChild(readContainer);
                card.appendChild(deleteButton);
                readIndex++;
            }
        }

    });

    deleteCard();
    toggleRead();

}


// Submit Form with user information
function submitForm(e) {

    e.preventDefault();
    const readCheck = Object.create(Book.prototype);
    const formInputs = document.querySelectorAll("input");
    const form = document.querySelector("#form-container");
    title = formInputs[0].value;
    author = formInputs[1].value;
    pages = formInputs[2].value;

    // Will not submit anything if form is empty
    if (title == "" || author == "" || pages == "") {
        return;
    }
    addBooksToLibrary(title, author, pages, readCheck.readToggle(formInputs[3]));
    form.reset();
    closeMod();
}




addBooksToLibrary("It Ends with Us: A Novel", "Colleen Hoover", "381", "Not Read");
