// Sample list of book objects
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 }
];

// Callback function to log titles in alphabetical order
function logTitlesInAlphabeticalOrder(titles) {
  const sortedTitles = titles.sort();
  console.log("Titles in alphabetical order:", sortedTitles);
}

// Program function
function processBooks(bookList, callback) {
  const titles = bookList.map(book => book.title);
  callback(titles);
}

// Example usage
processBooks(books, logTitlesInAlphabeticalOrder);
