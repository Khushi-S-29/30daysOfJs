// Day 7: Objects

// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008
  };
  
  console.log("Book Object:", book);
  // Output: Book Object: { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 }
  
  // Task 2: Access and log the title and author properties of the book object.
  console.log(`Title of the book: ${book.title}`);
  // Output: Title of the book: JavaScript: The Good Parts
  console.log(`Author: ${book.author}`);
  // Output: Author: Douglas Crockford
  
  // Activity 2: Object Methods
  
  // Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
  book.BookInfo = function() {
    return `${this.title} by ${this.author}`;
  };
  
  console.log("Book Info:", book.BookInfo());
  // Output: Book Info: JavaScript: The Good Parts by Douglas Crockford
  
  // Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
  book.updateYear = function(newYear) {
    this.year = newYear;
  };
  
  book.updateYear(2024);
  console.log("Updated Book Object:", book);
  // Output: Updated Book Object: { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2024, BookInfo: [Function: BookInfo], updateYear: [Function: updateYear] }
  
  // Activity 3: Nested Objects
  
  // Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
  const library = {
    name: "Library",
    books: [
      { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
      { title: "1984", author: "George Orwell", year: 1949 },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
    ]
  };
  
  console.log("Library:", library);
  // Output: Library: { name: 'Library', books: [ { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, { title: '1984', author: 'George Orwell', year: 1949 }, { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 } ] }
  
  // Task 6: Access and log the name of the library and the titles of all the books in the library.
  console.log(`Library Name: ${library.name}`);
  // Output: Library Name: Library
  library.books.forEach(book => console.log(`Book Title: ${book.title}`));
  // Output:
  // Book Title: To Kill a Mockingbird
  // Book Title: 1984
  // Book Title: The Great Gatsby
  
  // Activity 4: The this Keyword
  
  // Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
  book.getTitleAndYear = function() {
    return `${this.title}, published in ${this.year}`;
  };
  
  console.log("Title and Year:", book.getTitleAndYear());
  // Output: Title and Year: JavaScript: The Good Parts, published in 2024
  
  // Activity 5: Object Iteration
  
  // Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
  for (let key in book) {
    console.log(`${key}: ${book[key]}`);
  }
  // Output:
  // title: JavaScript: The Good Parts
  // author: Douglas Crockford
  // year: 2024
  // BookInfo: function() { ... }
  // updateYear: function(newYear) { ... }
  // getTitleAndYear: function() { ... }
  
  // Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
  console.log("Keys:", Object.keys(book));
  // Output: Keys: [ 'title', 'author', 'year', 'BookInfo', 'updateYear', 'getTitleAndYear' ]
  console.log("Values:", Object.values(book));
  // Output: Values: [ 'JavaScript: The Good Parts', 'Douglas Crockford', 2024, [Function: BookInfo], [Function: updateYear], [Function: getTitleAndYear] ]
  