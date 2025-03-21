const myLibrary = [];
const card = `
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

function addBookToLibrary(title, author, nPages, isRead) {
    const book = new Book(title, author, nPages, isRead)
    myLibrary.push(book)
}

function display(myLibrary) {

    const container = document.querySelector('.container');

    myLibrary.map((obj) => {
        container.innerHTML += card;

        const title = document.querySelectorAll('.title');
        const author = document.querySelectorAll('.author');
        const nPages = document.querySelectorAll('.npages');
        const read  = document.querySelectorAll('#read');
        const remove = document.querySelectorAll('#remove');
    
        title[title.length-1].textContent = obj.title;
        author[author.length-1].textContent = obj.author;
        nPages[nPages.length-1].textContent = obj.nPages;
        read[read.length-1].textContent = 'unread'
        console.log(read)
    });
}

addBookToLibrary('Lost in maya', 'god', '1000', false)


display(myLibrary)