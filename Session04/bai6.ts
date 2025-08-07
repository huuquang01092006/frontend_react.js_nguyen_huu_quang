type Product = {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number;
};
let listProduct: Product[] = [
  {
    id: "1",
    name: "Ao so mi",
    price: 300000,
    category: {
      id: "1",
      name: "thoi trang nam",
    },
    discount: 60000,
  },
  {
    id: "2",
    name: "Smartphone Samsung",
    price: 8000000,
    category: {
      id: "2",
      name: "thiet bi dien tu",
    },
  },
  {
    id: "3",
    name: "Ban hoc thong minh",
    price: 300000,
    category: {
      id: "3",
      name: "Gia dung",
    },
    discount: 50000,
  },
];
function getFinalPrice(product: Product): number {
  if (product.discount) {
    return product.price - product.discount;
  }
  return product.price;
}
function printProductInfo(product: Product): void {
  console.log(`Tên sản phẩm: ${product.name}`);
  console.log(`Danh mục: ${product.category.name}`);
  console.log(`Giá gốc: ${product.price}`);
  console.log(`Giá sau giảm: ${getFinalPrice(product)}`);
}
let product = listProduct[5];
if (product) {
  printProductInfo(product);
}
