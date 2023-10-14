const myLibrary = [];
const form = document.getElementById("book-form");
const display = document.getElementById("book-display");

//event listener for the form submit button
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("book");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let read = document.getElementById("read");
    if (title.value == " " || author.value == " " || pages.value == " " || read.value == " "){
        alert("Please enter the book details in full");
    } else {
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    form.reset();
    }
});

//constructor for creating book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, " + read;
    }
}

//function to add a new book to the library after a form is submitted
function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
    removePreviousSelection();
    displayBooks();
}

//prevents displayBooks from displaying the previous selection of books
function removePreviousSelection(){
    let book = document.getElementById("book-display");
    let child = book.lastElementChild;
    while (child){
        book.removeChild(child);
        child = book.lastElementChild;
    }
}

//function that creates the display for all the books in the library
function displayBooks(){
    for (let i = 0; i < myLibrary.length; i++){
        let book = document.createElement("div");
        book.innerHTML = `
            <div id="book-container"> 
                <h3 id="book-info"> ${myLibrary[i].title}</h3> 
                <h3 id="book-info"> ${myLibrary[i].author}</h3> 
                <h3 id="book-info"> ${myLibrary[i].pages}</h3> 
                <h3 id="book-info"> ${myLibrary[i].read}</h3> 
                <button id="book-remove" onclick="removeBook(${i})">Remove</button>
                <button id="toggle-read" onclick="toggleBook(${i})">Read</button>
            </div>
        `
        display.appendChild(book);
    }
}

//function to remove a book from the library
function removeBook(book){
    myLibrary.splice(book, 1);
    removePreviousSelection();
    displayBooks();
}

//function to toggle a books read status 
function toggleBook(book){
    if (myLibrary[book].read == "Read"){
        myLibrary[book].read = "Not Read";
    } else {
        myLibrary[book].read = "Read";
    }
    removePreviousSelection();
    displayBooks();
}

//for testing purposes
//displayBooks("Harry Potter", "JK Rowling", 200, "Not Read");








