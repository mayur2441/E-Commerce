function generateOrderId() {
  return "FS" + Math.floor(10000000 + Math.random() * 90000000);
}

function createOrder(products) {
  if (!products || products.length === 0) {
    alert("No products to place order");
    return;
  }

  const order = {
    orderId: generateOrderId(),
    createdAt: Date.now(),
    products: products.map(p => ({
      title: p.title,
      price: Number(p.price),
      image: p.image || p.mainImage,
      qty: p.qty || 1
    })),
    totalAmount: products.reduce(
      (sum, p) => sum + Number(p.price) * (p.qty || 1),
      0
    )
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("selectedOrder", JSON.stringify(order));

  // cleanup
  localStorage.removeItem("cart");
  localStorage.removeItem("detail");

  window.location.href = "order_success.html";
}
