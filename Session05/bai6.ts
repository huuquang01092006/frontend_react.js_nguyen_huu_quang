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

  public listBooks(): void {
    console.log("Danh sach sach trong thu vien:");
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.getTitle()} - ${book.getAuthor()}`);
    });
  }
}

let book = new Book("quang", "quang");
let book1 = new Book("vinh", "vinh");

let library = new Library();
library.addBook(book);
library.addBook(book1);

library.listBooks();
