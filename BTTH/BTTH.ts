class Customer {
  static nextId = 1;
  id: number;
  name: string;
  email: string;
  shippingAddress: string;
  constructor(name: string, email: string, shippingAddress: string) {
    this.id = Customer.nextId++;
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
  }
  getDetails() {
    console.log(this.id);
    console.log(this.name);
    console.log(this.email);
    console.log(this.shippingAddress);
  }
}
abstract class Product {
  static nextId = 1;
  id: number;
  name: string;
  price: number;
  stock: number;
  constructor(name: string, price: number, stock: number) {
    this.id = Product.nextId++;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  sell(quantity: number) {
    this.stock -= quantity;
  }
  restock(quantity: number) {
    this.stock += quantity;
  }
  abstract getProductInfo(): string;
  abstract getShippingCost(): number;
  abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
  warrantyPeriod: number;
  constructor(
    name: string,
    price: number,
    stock: number,
    warrantyPeriod: number
  ) {
    super(name, price, stock);
    this.warrantyPeriod = warrantyPeriod;
  }
  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Warranty Period: ${this.warrantyPeriod} months`;
  }
  getShippingCost(): number {
    return 50000;
  }
  getCategory(): string {
    return "Electronics";
  }
}
class ClothingProduct extends Product {
  size: string;
  color: string;
  constructor(
    name: string,
    price: number,
    stock: number,
    size: string,
    color: string
  ) {
    super(name, price, stock);
    this.size = size;
    this.color = color;
  }
  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Size: ${this.size}, Color: ${this.color}`;
  }
  getShippingCost(): number {
    return 25000;
  }
  getCategory(): string {
    return "Clothing";
  }
}
interface OrderItem {
  product: Product;
  quantity: number;
}
class Order {
  static nextId = 1;
  orderId: number;
  customer: Customer;
  products: OrderItem[];
  totalAmount: number;
  constructor(customer: Customer, products: OrderItem[], totalAmount: number) {
    this.orderId = Order.nextId++;
    this.customer = customer;
    this.products = products;
    this.totalAmount = totalAmount;
  }
  getDetails() {
    console.log(this.orderId);
    console.log(this.customer);
    console.log(this.products);
    console.log(this.totalAmount);
  }
}
class Store {
  products: Product[];
  customers: Customer[];
  orders: Order[];
  constructor(products: Product[], customers: Customer[], orders: Order[]) {
    this.products = products;
    this.customers = customers;
    this.orders = orders;
  }
  addProduct(product: Product): void {
    this.products.push(product);
  }
  addCustomer(name: string, email: string, address: string): void {
    let customer = new Customer(name, email, address);
    this.customers.push(customer);
  }
  createOrder(
    customerId: number,
    productQuantities: { productId: number; quantity: number }[]
  ): Order | null {
    let customer = this.customers.find(
      (customers) => customers.id == customerId
    );
    if (!customer) {
      return null;
    }
    let totalAmount = 0;
    let orderItems: OrderItem[] = [];
    for (let productQuantity of productQuantities) {
      let product = this.products.find(
        (p) => p.id === productQuantity.productId
      );
      if (!product || product.stock < productQuantity.quantity) {
        return null;
      }
      product.sell(productQuantity.quantity);
      totalAmount += product.price * productQuantity.quantity;
      orderItems.push({ product, quantity: productQuantity.quantity });
    }
    let order = new Order(customer, orderItems, totalAmount);
    this.orders.push(order);
    return order;
  }
  cancelOrder(orderId: number): void {
    let order = this.orders.find((o) => o.orderId === orderId);
    if (order) {
      this.orders = this.orders.filter((o) => o.orderId !== orderId);
      this.products.forEach((product) => {
        order.products.forEach((orderProduct) => {
          if (orderProduct.product.id === product.id) {
            product.stock += orderProduct.quantity;
          }
        });
      });
    }
  }
  listAvailableProducts(): void {
    let available = this.products.filter((p) => p.stock > 0);
    available.forEach((p) => console.log(p.getProductInfo()));
  }

  listCustomerOrders(customerId: number): void {
    let orders = this.orders.filter((o) => o.customer.id === customerId);
    orders.forEach((o) => o.getDetails());
  }
  calculateTotalRevenue(): number {
    return this.orders.reduce((total, order) => {
      return total + order.totalAmount;
    }, 0);
  }
  countProductsByCategory(): void {
    let electronicsCount = 0;
    let clothingCount = 0;
    this.products.forEach((product) => {
      if (product.getCategory() === "Electronics") {
        electronicsCount++;
      } else if (product.getCategory() === "Clothing") {
        clothingCount++;
      }
    });
    console.log(`Electronics: ${electronicsCount}`);
    console.log(`Clothing: ${clothingCount}`);
  }
  updateProductStock(productId: number, newStock: number): void {
    let product = this.products.find((product) => product.id === productId);
    if (product) {
      product.stock = newStock;
    }
  }
  findEntityById<T extends { id: number }>(
    collection: T[],
    id: number
  ): T | undefined {
    return collection.find((entity) => entity.id === id);
  }
}
const readlineSync = require("readline-sync");

const store = new Store([], [], []);

let choice: number;

do {
  console.log("\n===== MENU =====");
  console.log("1. Them khach hang moi");
  console.log("2. Them san pham moi");
  console.log("3. Tao don hang moi");
  console.log("4. Huy don hang");
  console.log("5. Hien thi san pham con hang");
  console.log("6. Hien thi don hang của khach hang");
  console.log("7. Tinh tong doanh thu");
  console.log("8. Thong ke san pham theo danh muc");
  console.log("9. Cap nhat ton kho san pham");
  console.log("10. Tim kiem thong tin theo ID");
  console.log("11. Xem thong tin chi tiet san pham");
  console.log("12. Thoat chuong trinh");

  choice = Number(readlineSync.question("Nhap lua chon: "));

  switch (choice) {
    case 1: {
      let name = readlineSync.question("Ten khach hang: ");
      let email = readlineSync.question("Email: ");
      let address = readlineSync.question("Dia chi giao hang: ");
      store.addCustomer(name, email, address);
      console.log("Da them khach hang.");
      break;
    }

    case 2: {
      let type = readlineSync.question(
        "Loai san pham (1: Dien tu, 2: Quan ao): "
      );
      let name = readlineSync.question("Ten san pham: ");
      let price = Number(readlineSync.question("Gia: "));
      let stock = Number(readlineSync.question("Ton kho: "));

      if (type === "1") {
        let warranty = Number(
          readlineSync.question("Thoi gian bao hanh (thang): ")
        );
        store.addProduct(new ElectronicsProduct(name, price, stock, warranty));
      } else {
        let size = readlineSync.question("Size: ");
        let color = readlineSync.question("Mau sac: ");
        store.addProduct(new ClothingProduct(name, price, stock, size, color));
      }
      console.log("Da them san pham.");
      break;
    }

    case 3: {
      let customerId = Number(readlineSync.question("ID khach hang: "));
      let numItems = Number(
        readlineSync.question("So luong san pham trong don: ")
      );
      let productQuantities: { productId: number; quantity: number }[] = [];

      for (let i = 0; i < numItems; i++) {
        let productId = Number(
          readlineSync.question(`ID san pham ${i + 1}: `)
        );
        let quantity = Number(readlineSync.question(`So luong: `));
        productQuantities.push({ productId, quantity });
      }

      let order = store.createOrder(customerId, productQuantities);
      if (order) {
        console.log("Da tao don hang:");
        order.getDetails();
      } else {
        console.log("Tao don hang that bai.");
      }
      break;
    }

    case 4: {
      let orderId = Number(
        readlineSync.question("Nhap ID don hang can huy: ")
      );
      store.cancelOrder(orderId);
      console.log("Da huy don hang.");
      break;
    }

    case 5: {
      console.log("Danh sach san pham con hang:");
      store.listAvailableProducts();
      break;
    }

    case 6: {
      let customerId = Number(readlineSync.question("Nhap ID khach hang: "));
      console.log(`Don hang cua khach hang #${customerId}:`);
      store.listCustomerOrders(customerId);
      break;
    }

    case 7: {
      let revenue = store.calculateTotalRevenue();
      console.log(`Tong doanh thu: ${revenue} VND`);
      break;
    }

    case 8: {
      console.log("Thong ke san pham theo danh muc:");
      store.countProductsByCategory();
      break;
    }

    case 9: {
      let productId = Number(readlineSync.question("Nhap ID san pham: "));
      let newStock = Number(
        readlineSync.question("Nhap so luong ton kho moi: ")
      );
      store.updateProductStock(productId, newStock);
      console.log("Da cap nhat ton kho.");
      break;
    }

    case 10: {
      let type = readlineSync.question("Tim (1: Khach hang, 2: San pham): ");
      let id = Number(readlineSync.question("Nhap ID: "));
      if (type === "1") {
        let customer = store.findEntityById(store.customers, id);
        customer
          ? customer.getDetails()
          : console.log("Khong tim thay khach hang.");
      } else {
        let product = store.findEntityById(store.products, id);
        product
          ? console.log(product.getProductInfo())
          : console.log("Khong tim thay san pham.");
      }
      break;
    }

    case 11: {
      let productId = Number(readlineSync.question("Nhap ID san pham: "));
      let product = store.products.find((p) => p.id === productId);
      product
        ? console.log(product.getProductInfo())
        : console.log("Khong tim thay san pham.");
      break;
    }

    case 12: {
      console.log("Thoat chuong trinh");
      break;
    }

    default:
      console.log("Lua chon khong hop le.");
  }
} while (choice !== 12);