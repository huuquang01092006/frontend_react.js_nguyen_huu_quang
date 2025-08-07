type Product ={
  readonly id: string;
  name: string;
  price: number;
}

type OrderItem = {
  product: Product;
  quantity: number;
}

type Order ={
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string;
}
let order: Order = {
  orderId: "ORD001",
  customerName: "Nguyen Danh Nam Khanh",
  items: [
    {
      product: { id: "P001", name: "ao so mi", price: 250000 },
      quantity: 2,
    },
    {
      product: { id: "P002", name: "quan tay", price: 400000 },
      quantity: 1,
    },
  ],
  note: "giao sau 18h",
};

function calculateOrderTotal(order: Order): number {
  return order.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}

function printOrder(order: Order): void {
  console.log(`Don hang: #${order.orderId}`);
  console.log(`Khach hang: ${order.customerName}`);
  console.log(`San pham:`);

  order.items.forEach(item => {
    const name = item.product.name;
    const quantity = item.quantity;
    const totalPrice = item.product.price * quantity;
    console.log(`- ${name} × ${quantity} → ${totalPrice.toLocaleString('vi-VN')} VND`);
  });

  const total = calculateOrderTotal(order);
  console.log(`Tong cong: ${total.toLocaleString('vi-VN')} VND`);

  if (order.note) {
    console.log(`Ghi chu: ${order.note}`);
  }
}


printOrder(order);