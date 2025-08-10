class Book {
  private id: number;
  private title: string;
  private author: string;

  constructor(id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getAuthor(): string {
    return this.author;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setAuthor(author: string): void {
    this.author = author;
  }
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public updateBook(id: number, title: string, author: string): void {
    let book = this.books.find((b) => b.getId() === id);
    if (book) {
      book.setTitle(title);
      book.setAuthor(author);
    } else {
      console.log(`Khong tim thay sach voi ID ${id}`);
    }
  }

  public listBooks(): void {
    console.log("Danh sach sach trong thu vien:");
    this.books.forEach((book, index) => {
      console.log(
        `${
          index + 1
        }. ID: ${book.getId()}, Title: ${book.getTitle()} - Author: ${book.getAuthor()}`
      );
    });
  }
}

let book = new Book(1, "quang", "quang");
let book1 = new Book(2, "vinh", "vinh");
let library = new Library();

library.addBook(book);
library.addBook(book1);
library.listBooks();

library.updateBook(1, "dong", "dong");
library.listBooks();
