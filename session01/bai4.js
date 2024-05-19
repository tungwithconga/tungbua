class Book {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

function findBookById(books, id) {
    const foundBook = books.find(book => book.id === id);
    if (foundBook) {
        console.log(`ID: ${foundBook.id}, Name: ${foundBook.name}`);
    } else {
        console.log("Không tìm thấy sách với ID này.");
    }
}

let books = [
    new Book(1, "Harry Potter"),
    new Book(2, "The Lord of the Rings"),
    new Book(3, "To Kill a Mockingbird")
];

findBookById(books, 2); // Tìm sách có id là 2
findBookById(books, 5); // Tìm sách có id là 5 (không tồn tại)
