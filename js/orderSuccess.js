function viewOrder() {
  let cartProducts = JSON.parse(localStorage.getItem("orderedProducts")) || [];

// normalize to array (VERY IMPORTANT)
if (!Array.isArray(cartProducts)) {
  cartProducts = [cartProducts];
}


  if (cartProducts.length === 0) {
    alert("Cart is empty");
    return;
  }

  const order = {
    orderId: generateOrderId(),
    createdAt: Date.now(),
    products: cartProducts.map(p => ({
      title: p.title,
      price: p.price,
      image: p.mainImage,
      qty: p.quantity || 1
    })),
    totalAmount: cartProducts.reduce(
      (sum, p) => sum + (p.price) * (p.qty || 1)+ (p.price*(18/100)),
      0
    )
  };

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("selectedOrder");

  // optional
  // localStorage.removeItem("orderedProducts");

  window.location.href = "orders.html";
}

function generateOrderId() {
  return "FS" + Math.floor(10000000 + Math.random() * 90000000);
}
