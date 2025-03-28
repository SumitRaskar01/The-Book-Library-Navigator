let bookContainer = document.getElementById('container')
let nextButton = document.getElementById('next')
let previousButton = document.getElementById('prev')
let searchBox = document.getElementById('search_box')
let searchButton = document.getElementById('searchButton')
let page = 1;
const BASEURL = `https://api.freeapi.app/api/v1/public/books`

//Function to Get Response from API
async function getBooks(url){
    const response = await fetch(url)
    const data = await response.json()
    return data
}

// Function to Render Response
function showBooks(data) {
    bookContainer.innerHTML = "";

    const books = data.data.data;

    books.forEach((book) => {
        const { title, authors, publisher, publishedDate, imageLinks } = book.volumeInfo || {};

        let bookSpace = document.createElement('div');
        bookSpace.classList.add('bookSpace');
        bookContainer.appendChild(bookSpace);

        let bookThumbnail = document.createElement('img');
        bookThumbnail.src = imageLinks?.thumbnail || "Book Image.jpg"; 
        bookSpace.appendChild(bookThumbnail);

        let bookTitle = document.createElement('p');
        bookTitle.textContent = `Title- ${title}` || "Unknown Title";
        bookSpace.appendChild(bookTitle);

        if (Array.isArray(authors) && authors.length > 0) {
            authors.forEach((author) => {
                let bookAuthor = document.createElement('p');
                bookAuthor.textContent = `Author- ${author}`;
                bookSpace.appendChild(bookAuthor);
            });
        } else {
            let noAuthor = document.createElement('p');
            noAuthor.textContent = "Author unknown";
            bookSpace.appendChild(noAuthor);
        }

        let bookPublisher = document.createElement('p');
        bookPublisher.textContent = `Book Publisher- ${bookPublisher}`|| "Unknown Publisher";
        bookSpace.appendChild(bookPublisher);

        let bookPublishedDate = document.createElement('p');
        bookPublishedDate.textContent = `Published Date- ${publishedDate}` || "Unknown Date";
        bookSpace.appendChild(bookPublishedDate);
    });
}

//Render Books as User Lands on Page
window.addEventListener('load', async()=>{
    const data = await getBooks(BASEURL);
    showBooks(data)
})

//Function to get Next Set of Books
nextButton.addEventListener('click', async () => {
    let PaginatedURL = `https://api.freeapi.app/api/v1/public/books?page=${page + 1}&limit=10`;

    const data = await getBooks(PaginatedURL);
    let nextPageStatus = data.data.nextPage;
    if (nextPageStatus === true) {
        page++;  
        showBooks(data);
    } else {
        alert("No More Pages to View");
    }
});

//Function to get Previous Books
previousButton.addEventListener('click', async () => {
    if (page === 1) {
        alert("No More Previous Pages to View");
        return; 
    }
    page--; 
    let PaginatedURL = `https://api.freeapi.app/api/v1/public/books?page=${page}&limit=10`;
    const data = await getBooks(PaginatedURL);
    if (data && data.data) {
        showBooks(data); 
    } else {
        alert("No More Pages to View");
        page++; 
    }
});

//Function to search Book by title
searchButton.addEventListener('click', async ()=>{
    let toSearch = searchBox.value.trim().toLowerCase();
    let query = toSearch;
    const data = await getBooks(`https://api.freeapi.app/api/v1/public/books?&query=${query}`)
    showBooks(data)
})


