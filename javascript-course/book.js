const myLibrary = [];
const form = document.getElementById("book-form");
const display = document.getElementById("book-display");

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

function getBookInfo(){
    
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, " + read;
    }
}

//in html create form of sort of user to input book info and call the book constructor function to create a new book object with that info and push that to the myLibrary 
function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
    removePreviousSelection();
    displayBooks();
}

function removePreviousSelection(){
    let book = document.getElementById("book-display");
    let child = book.lastElementChild;
    while (child){
        book.removeChild(child);
        child = book.lastElementChild;
    }
}

function displayBooks(){
    for (let i = 0; i < myLibrary.length; i++){
        let book = document.createElement("div");
        book.innerHTML = `
            <div id="book-container"> 
                <h3 id="book-info"> ${myLibrary[i].title}</h3> 
                <h3 id="book-info"> ${myLibrary[i].author}</h3> 
                <h3 id="book-info"> ${myLibrary[i].pages}</h3> 
                <h3 id="book-info"> ${myLibrary[i].read}</h3> 
            </div>
        `
        display.appendChild(book);
    }
}

//add a few book objects to the library array
displayBooks();








