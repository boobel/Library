let myLibrary = [];
let colors = ['red',"rgb(169, 237, 154)"];
let readmsg = ['NOT READ', 'READ']
let index = 0;
const popup = document.getElementById("popup")
let authorInput = document.querySelector("#author")
let titleInput = document.querySelector("#title")
let pagesInput = document.querySelector("#pages")
let havereadInput = document.querySelector("#haveread")
let bookshelf = document.querySelector("#bookshelf")
const closeopopupButton = document.getElementById("cancelbookbtn")
const addButton = document.getElementById("addbtn")
const addBookButton = document.getElementById("addbookbtn")
var newNode = document.createElement('span')
newNode.setAttribute('class','errormsg')


class Book {
  constructor(title, author, pages, haveread) {
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.haveread = haveread
  }
  
}

function addBookToLibrary() {
  let author, title, pages, haveread
  if (authorInput.value == "") {
    displayError(authorInput,'Please input author')
    displayBooks()
  }
  else {
    author = authorInput.value
    title = titleInput.value
    pages = pagesInput.value

    newNode.innerHTML = ''
    newNode.remove()
    let book = new Book(author, title, pages, haveread)
    myLibrary.push(book)
    closePopup()
    displayBooks()

  }
  if(titleInput.value == ""){
    displayError(titleInput,'Please input title')
    displayBooks()
  }
  else {
    title = titleInput.value
  }
  if (pagesInput.value == ""){
    displayError(pagesInput,'Please input number of pages')
    displayBooks()
  }
  else {
    pages = pagesInput.value
  }

  haveread = null;
  if(havereadInput.checked) {
    haveread = true;
    
  }
  else {
    haveread = false;
  }


}

function displayError(referenceNode, content) {
  newNode.innerHTML = content
  
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function displayBooks() {

  bookshelf.innerHTML = '';
  myLibrary.forEach((book) => {

    let card = document.createElement('div');
    let authorOutput = document.createElement('span');
    let titleOutput = document.createElement('span');
    let pagesOutput = document.createElement('span');
    let delBtn = document.createElement('button')
    let readBtn = document.createElement('button')
    delBtn.setAttribute('id', 'cardbtn')
    readBtn.setAttribute('id', 'cardbtn')


    
    authorOutput.innerHTML = '"' + book.author + '"';
    titleOutput.innerHTML = book.title;
    pagesOutput.innerHTML = book.pages;
    delBtn.innerHTML="DELETE"

    if(haveread === true) {
      readBtn.innerHTML = 'READ'
      readBtn.style.backgroundColor = 'rgb(169, 237, 154)'
      index = 1;
    }
    else {
      readBtn.innerHTML = 'NOT READ'
      readBtn.style.backgroundColor = 'red'
      index = 0;
    }


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
      readBtn.innerHTML = readmsg[index]
      index = index >= colors.length -1 ? 0: index+1 ? 1:index-1;
    })

    delBtn.addEventListener('click', function() {
      myLibrary.pop()
      displayBooks()
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
