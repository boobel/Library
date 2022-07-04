//declarations
let myLibrary = [];
let popup = document.getElementById("popup")
const closeopopupButton = document.getElementById("cancelbookbtn")
const addBookButton = document.getElementById("addbtn")


//constructors
function Book(title, author, pages, haveread) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.haveread = haveread
}

function addBookToLibrary(title, author, pages, haveread) {
    return new Book(title, author, pages, haveread);
}

//myLibrary.push(addBookToLibrary("1", "2", "3", false))

function openPopup() {
  popup.classList.add("open-popup");
}


function closePopup() {
  popup.classList.remove("open-popup")
}

//runtime

function pog() {
    console.log('pog')
}

addBookButton.addEventListener("click", openPopup)
closeopopupButton.addEventListener("click", closePopup)