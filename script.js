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

function addBookToLibrary(title, author, nPages, isRead) {
    const book = new Book(title, author, nPages, isRead)
    myLibrary.push(book)
}

function display(myLibrary) {

    const container = document.querySelector('.container');

    myLibrary.map((obj) => {
        container.innerHTML += cardHTML;

        //sets unique Book.id to each card
        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            card.setAttribute('id', obj.id)
        });
        
        const title = document.querySelectorAll('.title');
        const author = document.querySelectorAll('.author');
        const nPages = document.querySelectorAll('.npages');


        title[title.length - 1].textContent = obj.title;
        author[author.length - 1].textContent = obj.author;
        nPages[nPages.length - 1].textContent = obj.nPages;

        const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
                
                if (e.target.id === 'read') {
                    let status = e.target.textContent
                    obj.isRead = (status === 'Read') ? e.target.textContent = 'Unread' : e.target.textContent = 'Read';
                    // button.style.backgroundColor = 'green'
                    console.log(obj.isRead);
                }

                //removing book card from DOM and myLibrary
                else if (e.target.id === 'remove') {
                    const clicked_card = button.closest('.card');
                    myLibrary = myLibrary.filter((obj) => (!obj.id === clicked_card.id));
                    clicked_card.remove();

                }
            });
        });


    });
}

addBookToLibrary('Lost in maya', 'god', '1000', false)
addBookToLibrary('Lost in m', 'god', '1000', false)


display(myLibrary);
console.log('radha')

