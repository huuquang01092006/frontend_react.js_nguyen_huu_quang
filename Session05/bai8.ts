class Book {
  private title: string;
  private author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public getTitle(): string {
    return this.title;
  }

  public getAuthor(): string {
    return this.author;
  }
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public viewBooks(): void {
    console.log("Danh sach cac quyen sach trong thu vien:");
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
    });
  }

  public searchByTitle(keyword: string): void {
    console.log(`\nKet qua tim kiem cho tu khoa: '${keyword}'`);
    let foundBooks = this.books.filter((book) =>
      book.getTitle().toLowerCase().includes(keyword.toLowerCase())
    );

    if (foundBooks.length > 0) {
      foundBooks.forEach((book, index) => {
        console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
      });
    } else {
      console.log("Khong tim thay quyen sach nao phu hop.");
    }
  }
}

let book1 = new Book("quang", "quang");
let book2 = new Book("vinh", "vinh");
let book3 = new Book("dong", "dong");
let book4 = new Book("khanh", "khanh");
let book5 = new Book("nam", "nam");

let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.viewBooks();

library.searchByTitle("quang");
library.searchByTitle("khanh");
