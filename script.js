const myLibrary = [];
const cardHTML = `
        <div class="card">
            <div class="main-content">
                <div>
                    <span class="npages"></span>
                    <span>pages</span>
                </div>
                <p class="title"></p>
                <div class="categories">
                    <button id="read">Read</button>
                    <button id="remove">Remove</button>
                </div>
            </div>
            <div>
                <span class="by">by</span>
                <span class="author"></span>
            </div>
        </div>`;

function Book(title, author, nPages, isRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.isRead = isRead;
    this.id = crypto.randomUUID()
}

Book.prototype.toggleRead = function (e) {
    if (e.target.id === 'read') {
        let status = e.target.textContent
        this.isRead = (status === 'Read') ? e.target.textContent = 'Unread' : e.target.textContent = 'Read';
    }
}

function addBookToLibrary(title, author, nPages, isRead) {
    const book = new Book(title, author, nPages, isRead)
    myLibrary.push(book)
}

function display() {

    const container = document.querySelector('.container');
    let obj = myLibrary[myLibrary.length - 1]


    container.innerHTML += cardHTML;

    //sets unique Book.id to each card
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.setAttribute('id', obj.id)
    });

    const title = document.querySelectorAll('.title');
    const author = document.querySelectorAll('.author');
    const nPages = document.querySelectorAll('.npages');
    const isRead = document.querySelectorAll('#read');


    title[title.length - 1].textContent = obj.title;
    author[author.length - 1].textContent = obj.author;
    nPages[nPages.length - 1].textContent = obj.nPages;
    isRead[isRead.length - 1].textContent = obj.isRead;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {

            obj.toggleRead(e);
            console.log(obj.isRead)

            //removing book card from DOM and myLibrary
            if (e.target.id === 'remove') {
                const clicked_card = button.closest('.card');
                myLibrary = myLibrary.filter((obj) => (!obj.id === clicked_card.id));
                clicked_card.remove();

            }
        });
    });


}


function validateForm(data) {
    return data.title.length > 0 && data.author.length > 0 && data.pages.length > 0
}



const form = document.querySelector('form');
function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    for (let keyValue of formData.entries()) {
        data[keyValue[0]] = keyValue[1];
    }
    if (validateForm(data)) {
        addBookToLibrary(data.title, data.author, data.pages, data.isRead);
        display();
    }
    else{
        alert('Add the book details first.')
    }



}
form.addEventListener('submit', handleSubmit);

