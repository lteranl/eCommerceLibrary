const renderBooks = (filter) => {
    const booksWrapper = document.querySelector(".books");
    const books = getBooks();

    if (filter === "LOW_TO_HIGH") {
        books.sort(
            (a, b) =>
                (a.salePrice || a.originalPrice) -
                (b.salePrice || b.originalPrice)
        );
    } else if (filter == "HIGH_TO_LOW") {
        books.sort(
            (a, b) =>
                (b.salePrice || b.originalPrice) -
                (a.salePrice || a.originalPrice)
        );
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

// display sales price, if no sales price display original price

const priceHTML = (originalPrice, salePrice) => {
    if (!salePrice) {
        return `${originalPrice.toFixed(2)}`;
    }
    return `<span class="book__price--normal">$${originalPrice.toFixed(
        2
    )}</span>$${salePrice.toFixed(2)}`;
};
// full star will be added if rating int and half star if not
const ratingsHTML = (rating) => {
    let ratingHTML = "";
    for (let i = 0; i < Math.floor(rating); i++) {
        ratingHTML += '<i class="fas fa-star"></i>';
    }
    if (!Number.isInteger(rating)) {
        ratingHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    return ratingHTML;
};
// getting LOW_TO_HIGH, HIGH_TO_LOW, RATINGS value from the event
const filterBooks = (event) => {
    renderBooks(event.target.value);
};

renderBooks();
