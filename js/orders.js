const myOrders = JSON.parse(localStorage.getItem("orders")) || [];
const container = document.getElementById("orderPlaced");

container.innerHTML = ""; // important to avoid duplicates

myOrders.forEach(order => {
  const firstProduct = order.products[0]; // show first product image

  container.innerHTML += `
    <div class="col-7 border order-card d-flex flex-column flex-md-row
                align-items-start align-items-md-center justify-content-between mb-3 p-3">

      <div class="order-image mb-3 mb-md-0">
        <img class="img-fluid order-img" src="${firstProduct.image}" alt="">
      </div>

      <div class="flex-grow-1 ms-md-4">
        <h6 class="mb-1 fw-bold">Order #${order.orderId}</h6>
        <small class="text-muted d-block mb-2">
          ${new Date(order.createdAt).toDateString()}
        </small>

        <div class="d-flex flex-wrap align-items-center gap-2 gap-md-3">
          <span class="status-shipped">
            <i class="bi bi-truck"></i> Shipped
          </span>
          <span class="text-muted">${order.products.length} item(s)</span>
          <span class="fw-semibold">Total: ₹${(order.totalAmount).toFixed(2)}</span>
        </div>

        <div class="mt-3 d-flex flex-wrap gap-2">
          <button class="btn btn-primary btn-sm">Track Order</button>
          <button class="btn btn-outline-secondary btn-sm">Reorder</button>
          <button class="btn btn-outline-secondary btn-sm">View Details</button>
        </div>
      </div>

      <div class="ms-md-3 mt-3 mt-md-0 align-self-md-start">
        <i class="bi bi-three-dots-vertical fs-5"></i>
      </div>
    </div>
  `;
});
