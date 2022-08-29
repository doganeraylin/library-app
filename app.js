const bookContainer = document.querySelector('.book-container')
const bookForm = document.querySelector('.book-form')
const bookName = document.querySelector('h1');
const writerName = document.querySelector('h2');
const pages = document.querySelector('h3');
const bookNameInput = document.querySelector('#title')
const writerNameInput = document.querySelector('#writer')
const pageNumberInput = document.querySelector('#pages')
const submitButton = document.querySelector('#submit-button')
const addButton = document.querySelector('#add-button')
const checkbox = document.querySelector('#checkbox')


addButton.addEventListener('click',openBookForm);

function openBookForm () {
    bookForm.classList.toggle('open-form');
    bookForm.classList.remove('close-form');

}


let myLibrary = [];

// prototype and constructor function

function AddNewBook() {
}

AddNewBook.prototype.getInput = function() {

    submitButton.addEventListener('click',function(e){

        e.preventDefault();

        // display and hide bookForm
        bookForm.classList.remove('open-form');
        bookForm.classList.add('close-form')

        // create single book container
        const singleBookItem = document.createElement ('div');
        bookContainer.appendChild(singleBookItem);
        singleBookItem.classList.add('single-book-item')


        // add book title
        const titleText = document.createElement ('h1');
        singleBookItem.appendChild(titleText)
        titleText.innerText = bookNameInput.value;
        titleText.classList.add('title-text');

        // add writer
        const writerText = document.createElement ('h2');
        singleBookItem.appendChild(writerText)
        writerText.innerText = writerNameInput.value;
        writerText.classList.add('writer-text');

        // add page number
        const pageNumber = document.createElement ('h3');
        singleBookItem.appendChild(pageNumber)
        pageNumber.innerText = pageNumberInput.value;
        pageNumber.classList.add('page-number');

        // add delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'delete';
        singleBookItem.appendChild(deleteButton);
        deleteButton.classList.add('delete-button')

        // add read button
        const readButton = document.createElement('button');
        readButton.innerText = 'read';
        singleBookItem.appendChild(readButton);
        readButton.classList.add('read-button')
        
        // delete button functionality
        deleteButton.addEventListener('click', function(e){
            const item = e.target;
            const parentElement = item.parentElement;
            parentElement.remove();
        });

        // read button - read vs unread
        
        readButton.addEventListener('click', function(){

            if(readButton.innerText === 'read') {
                readButton.classList.remove('read')
                readButton.classList.add('unread')
                readButton.innerText = 'unread';
            } else if (readButton.innerText === 'unread') {
                readButton.classList.remove('unread');
                readButton.classList.add('read');
                readButton.innerText = 'read'
            }
        })


        // checkbox checked or not 

        if(checkbox.checked == true) {
            readButton.classList.toggle('read')
        } else {
            readButton.innerText = 'unread';
            readButton.classList.toggle('unread')
        }
        
        //  clear input

        //  bookNameInput.value = '';
        //  writerNameInput.value = '';
        //  pageNumberInput.value = '';
        //  checkbox.checked = false;
         
        bookContainer.appendChild(singleBookItem);

        
    })     

  
    
} 

function ReplicateNewBook() {
    this.name = bookNameInput.value
    this.writer = writerNameInput.value
    this.pages = pageNumberInput.value
}
    
ReplicateNewBook.prototype = Object.create(AddNewBook.prototype)

const anyBook = new ReplicateNewBook();

anyBook.getInput();

myLibrary.push(anyBook)

console.log(myLibrary);
