function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.display = function() {
        console.log(`${this.title} by ${this.author} has ${this.pages} pages.`)
    }
}

const bookCollection = [];

function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    bookCollection.push(newBook);
    console.log(`Book "${title}" added successfully!`);
}


addBook("Book A", "Author A", 100);
addBook("Book B", "Author B", 24);
addBook("Book C", "Author C", 300);
addBook("Book D", "Author D", 43);
addBook("Book E", "Author E", 500);


console.log('\nCurrent Book Collection:')
bookCollection.forEach(book => book.display());

function searchBook(title) {
    const book = bookCollection.find(book => book.title === title);
    if (book) {
        console.log(book);
        return book;
    } else {
        console.log(`Book with title "${title}" not found.`);
        return null;
    }
}

const search = searchBook("Book A");
console.log(search);

function hundredPlus() {
    const largeBooks = bookCollection.filter(bookCollections => bookCollections.pages >= 100);
    return largeBooks;
}

const result = hundredPlus();
console.log(result);  

function modifyBooks() {
    return bookCollection.map(book => ({
        ...book,
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`
    }));
}

const modifiedBooks = modifyBooks();
console.log("\nModified Book Titles and Authors:");
console.log(modifiedBooks);