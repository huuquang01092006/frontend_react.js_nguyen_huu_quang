class Book {
  private id: number;
  private title: string;
  private author: string;
  private year: number;

  constructor(id: number, title: string, author: string, year: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
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

  public getYear(): number {
    return this.year;
  }

  public setTitle(newTitle: string): void {
    this.title = newTitle;
  }

  public setAuthor(newAuthor: string): void {
    this.author = newAuthor;
  }

  public setYear(newYear: number): void {
    this.year = newYear;
  }
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public viewBooks(): void {
    console.log("Danh sach sach trong thu vien:");
    this.books.forEach((book) => {
      console.log(
        `ID: ${book.getId()} | ${book.getTitle()} - ${book.getAuthor()} (${book.getYear()})`
      );
    });
  }

  public deleteBookById(id: number): void {
    let index = this.books.findIndex((book) => book.getId() === id);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`Da xoa sach co ID ${id}`);
    } else {
      console.log(`Khong tim thay sach co ID ${id}`);
    }
  }

  public updateBookById(
    id: number,
    newTitle: string,
    newAuthor: string,
    newYear: number
  ): void {
    let book = this.books.find((book) => book.getId() === id);
    if (book) {
      book.setTitle(newTitle);
      book.setAuthor(newAuthor);
      book.setYear(newYear);
      console.log(`Da cap nhat sach co ID ${id}`);
    } else {
      console.log(`Khong tim thay sach co ID ${id}`);
    }
  }
}

let library = new Library();

let book1 = new Book(1, "quang", "quang", 2006);
let book2 = new Book(2, "vinh", "vinh", 2006);
let book3 = new Book(3, "dong", "dong", 2006);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.viewBooks();

library.deleteBookById(2);

library.updateBookById(
  3,
  "khanh",
  "khanh",
  2006
);

library.viewBooks();
