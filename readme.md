# Book Library Application

This is a simple web application that allows users to browse and search books from an external API. It features a clean design with pagination and search functionality.

## Features

-   **Browse Books:** Displays a list of books fetched from the API.
-   **Pagination:** Allows users to navigate through multiple pages of books.
-   **Search:** Enables users to search for books by title.

## Technologies Used

-   HTML5
-   CSS3
-   JavaScript

## Usage

-   **Browsing Books:** The application displays a grid of book entries when you first open it.
-   **Pagination:** Use the "Previous" and "Next" buttons to navigate through the book pages.
-   **Searching:** Enter a book title in the search box and click the "Search" button to find matching books.

## API

The application uses the `https://api.freeapi.app/api/v1/public/books` API to fetch book data.

## CSS Styling

-   The CSS provides a clean and user-friendly interface.
-   The layout is responsive, ensuring a good experience on different screen sizes.
-   The search bar and pagination buttons are styled for easy interaction.

## JavaScript Functionality

-   **`getBooks(url)`:** Fetches book data from the specified URL.
-   **`showBooks(data)`:** Renders the fetched book data onto the page.
-   **Event Listeners:**
    -   `window.addEventListener('load', ...)`: Fetches and displays books when the page loads.
    -   `nextButton.addEventListener('click', ...)`: Fetches and displays the next page of books.
    -   `previousButton.addEventListener('click', ...)`: Fetches and displays the previous page of books.
    -   `searchButton.addEventListener('click', ...)`: Fetches and displays books matching the search query.