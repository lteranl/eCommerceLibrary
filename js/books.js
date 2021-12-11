const renderBooks = (filter) => {
    const booksWrapper = document.querySelector(".books");
    const books = getBooks();

    if (filter === "LOW_TO_HIGH") {
        books.sort((a, b) => a.originalPrice - b.originalPrice);
    } else if (filter == "HIGH_TO_LOW") {
        books.sort((a, b) => b.originalPrice - a.originalPrice);
    } else if (filter === "RATING") {
        books.sort((a, b) => b.rating - a.rating);
    }

    const booksHtml = books
        .map((book) => {
            return `
            <div class="book">
                <figure class="book__img--wrapper">
                    <img class="book__img" src="${book.url}" alt="${
                book.title
            }" />
                </figure>
                <div class="book__title">${book.title}</div>
                <div class="book__ratings">${ratingsHTML(book.rating)}</div>
                <div class="book__price">
                    ${priceHTML(book.originalPrice, book.salePrice)}
                </div>
            </div>
            `;
        })
        .join("");

    booksWrapper.innerHTML = booksHtml;
};

renderBooks();
