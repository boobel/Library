//declarations
let myLibrary = [];
const popup = document.getElementById("popup")
let authorInput = document.querySelector("#author")
let titleInput = document.querySelector("#title")
let pagesInput = document.querySelector("#pages")
let content = document.querySelector("#content")
const closeopopupButton = document.getElementById("cancelbookbtn")
const addButton = document.getElementById("addbtn")
const addBookButton = document.getElementById("addbookbtn")


//constructors
function Book(author, title, pages, haveread) {
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.haveread = haveread
}

function addBookToLibrary() {
  let author, title, pages
  if (authorInput.value == "") {
    //TODO: ADD ERROR MESSAGES
  }
  else {
    author = authorInput.value
  }
  title = titleInput.value
  pages = pagesInput.value
  let book = new Book(author, title, pages)
  myLibrary.push(book)
  closePopup()
  displayBooks()
}

function displayError() {

}

function displayBooks() {
  myLibrary.forEach((book) => {

    let card = document.createElement('div')
    let authorOutput = document.createElement('span')
    let titleOutput = document.createElement('span')
    let pagesOutput = document.createElement('span')

    authorOutput.innerHTML = book.author;
    titleOutput.innerHTML = book.title;
    pagesOutput.innerHTML = book.pages;
    
    content.appendChild(card)
    card.appendChild(authorOutput)
    card.appendChild(titleOutput)
    card.appendChild(pagesOutput)

    card.classList.add('card')


  });
}

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup")
}


//runtime
displayBooks();
addButton.addEventListener("click", openPopup)
closeopopupButton.addEventListener("click", closePopup)
addBookButton.addEventListener("click", addBookToLibrary)