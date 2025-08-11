class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public stock: number,
    public status: string
  ) {}
}
class Member {
  public lendedBooks: LendedBook[] = [];

  constructor(
    public id: number,
    public name: string,
    public contact: string,
    public status: string
  ) {}
}
class LendedBook {
  constructor(
    public memberId: number,
    public bookId: number,
    public dueDate: string
  ) {}
}
class Library {
  public books: Book[] = [];
  public members: Member[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Da them sach: ${book.title}`);
  }

  showBooks(): void {
    console.log("Danh sach sach trong thu vien:");
    this.books.forEach((book) =>
      console.log(
        `ID: ${book.id}, Tieu de: ${book.title}, Tac gia: ${book.author}, So luong: ${book.stock}, Tinh trang: ${book.status}`
      )
    );
  }
}
let library = new Library();

let book1 = new Book(1, "Dac Nhan Tam", "Dale Carnegie", 5, "Co san");
let book2 = new Book(
  2,
  "Tuoi Tre Dang Gia Bao Nhieu",
  "Rosie Nguyen",
  3,
  "Co san"
);
let book3 = new Book(3, "Nha Gia Kim", "Paulo Coelho", 4, "Co san");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.showBooks();
