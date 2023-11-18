const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const book = getBook(3);

// const {
//   title,
//   author,
//   pages,
//   translation,
//   genres,
//   publicationDate,
//   hasMovieAdaptation,
// } = book;

// console.log(title, author, pages);

// // const [primaryGenre, secondaryGenre] = genres;
// // console.log(primaryGenre, secondaryGenre);

// // //////////////////////////////////////
// // Rest/Spread  Operator with ...
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenres);
// const newGenres = [...genres, "epic fantasy"];
// console.log(newGenres);

// const updatedBook = {
//   ...book,

//   // Adding new property
//   moviePublicationDate: "2001-12-19",

//   // Overwrite an existing property
//   pages: 2,
// };
// console.log(updatedBook);

// // ////////////////////////////////
// // Template Literals
// const summary = `${title} is a ${pages}-page-long book publishsed in year ${
//   publicationDate.split("-")[0]
// }. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
// console.log(summary);

// // Ternaries instead of if/else statement
// const pageRange = pages > 1000 ? "over a thousand" : "less than 1000";
// console.log(pageRange);

// // ////////////////////////////////
// // Arrow Function
// // function getYear(str) {
// //   return str.split("-")[0];
// // }

// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// // ////////////////////////////////
// // Short Circuiting
// console.log(true && "Some String");
// console.log(false && "Some String");
// console.log(hasMovieAdaptation && "This book has a adapted movie.");

// // falsy value: 0, '', null, undefined
// console.log("son" && "some string");
// console.log(0 && "some string");
// console.log("" && "some string");
// console.log(null && "some string");
// console.log(undefined && "some string");

// console.log(true || "Some String");
// console.log(false || "Some String");

// console.log(book.translations.spanish);

// const spanishTranslation = book.translations.spanish || "Not Translated";
// console.log(spanishTranslation);

// // Issue of falsy value is that 0 is false
// // console.log(book.reviews.librarything.reviewsCount);
// // const countWrong = book.reviews.librarything.reviewsCount || "no data";
// // console.log(countWrong);

// // const count = book.reviews.librarything.reviewsCount ?? "no data";
// // console.log(count);

// // /////////////////////////
// // Optional Chaining
// // ? put the checking on the next property to be optional and return
// // undefined if the next one is not available without breaking the code
// // ?? can then be used to set the default value in case of the undefined
// function getTotalReviewCount(book) {
//   const goodRead = book.reviews?.goodreads?.reviewsCount;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
//   return goodRead + librarything;
// }

// console.log(getTotalReviewCount(book));

//

// ///////////////////////////////
// The Array Map method
// const books = getBooks();
// console.log(books);

// x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const titles = books.map((book) => book.title);
// console.log(titles);

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));
// console.log(essentialData);

// const essentialDataArr = books.map((book) => [book.title, book.author]);
// console.log(essentialDataArr);

// //////////////////////////////////
// // The Array Filter method
// const longBooks = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// console.log(longBooks);

// const longBooksWithMovie = books
//   .filter((book) => book.pages > 00)
//   .filter((book) => book.hasMovieAdaptation);
// console.log(longBooksWithMovie);

// const adventureBooks = books
//   .filter((book) => book.genres.includes("adventure"))
//   .map((book) => book.title);

// console.log(adventureBooks);

// // /////////////////////////////////
// // The Array Reduce method
// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// console.log(pagesAllBooks);

// // ////////////////////////////////
// // The Array sort method
// const pages = books.map((book) => book.pages);
// console.log(pages);
// const pagesSorted = pages.slice().sort((a, b) => a - b);
// console.log(pagesSorted);

// const booksSortedByPage = books.slice().sort((a, b) => a.pages - b.pages);
// console.log(booksSortedByPage);

// // //////////////////////////////////
// // Working with Immutable Array

// // 1. Add book object to array
// const newBook = {
//   id: 6,
//   title: "Harry Pot and the Chamber of Secrets",
//   author: "J. K. Rowling",
// };
// const booksAfterAdded = [...books, newBook];
// console.log(booksAfterAdded);

// // 2. Delete book object from array
// const booksAfterDelete = booksAfterAdded.filter((book) => book.id !== 3);
// console.log(booksAfterDelete)

// // 3. Update book object in the array
// const booksAfterUpdate = booksAfterDelete.map(book => book.id === 1 ? { ...book, pages=1 } : book)
// console.log(booksAfterUpdate)

// ///////////////////////////////////////////
// Promise
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Async/Await
async function getToDo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
  return data;
}

console.log(getToDo());
