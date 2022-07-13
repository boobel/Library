let myLibrary = [];
let colors = ['red','green'];
let index = 0;
const popup = document.getElementById("popup")
let authorInput = document.querySelector("#author")
let titleInput = document.querySelector("#title")
let pagesInput = document.querySelector("#pages")
let bookshelf = document.querySelector("#bookshelf")
const closeopopupButton = document.getElementById("cancelbookbtn")
const addButton = document.getElementById("addbtn")
const addBookButton = document.getElementById("addbookbtn")

function Book(author, title, pages, haveread) {
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.haveread = haveread
}

function addBookToLibrary() {
  let author, title, pages
  if (authorInput.value == "") {
    displayError()
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
//TODO: ADD ERROR MESSAGES
}

function displayBooks() {

  bookshelf.innerHTML = '';
  myLibrary.forEach((book) => {

    let card = document.createElement('div');
    let authorOutput = document.createElement('span');
    let titleOutput = document.createElement('span');
    let pagesOutput = document.createElement('span');
    let readBtn = document.createElement('button')
    let delBtn = document.createElement('button')

    
    authorOutput.innerHTML = '"' + book.author + '"';
    titleOutput.innerHTML = book.title;
    pagesOutput.innerHTML = book.pages;
    readBtn.innerHTML = "READ"
    delBtn.innerHTML="DELETE"


    bookshelf.appendChild(card)
    card.appendChild(authorOutput)
    card.appendChild(titleOutput)
    card.appendChild(pagesOutput)
    card.appendChild(readBtn)
    card.appendChild(delBtn)


    readBtn.classList.add('readbtn')
    card.classList.add('card', 'new-card')

    
    readBtn.addEventListener('click', function() {
      readBtn.style.backgroundColor = colors[index]
      index = index >= colors.length -1 ? 0: index +1;
    })
  });
}


function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup")
}


//runtime
addButton.addEventListener("click", openPopup) 
closeopopupButton.addEventListener("click", closePopup)
addBookButton.addEventListener("click", addBookToLibrary)
