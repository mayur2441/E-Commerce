const myOrders = JSON.parse(localStorage.getItem("orders")) || [];
const container = document.getElementById("orderPlaced");

container.innerHTML = ""; // important to avoid duplicates

myOrders.forEach(order => {

  const status = getOrderStatus(order.createdAt);

  // 🔁 loop through products inside this order
  const productsHtml = order.products.map(product => `
    <div class="d-flex gap-3 mb-3">
      <img class="img-fluid order-img" src="${product.image}" alt="">

      <div>
        <p class="fw-semibold mb-1">${product.title}</p>
        <p class="small mb-1">Qty: ${product.qty || 1}</p>
        <p class="fw-bold mb-0">₹${Number(product.price).toFixed(2)}</p>
      </div>
    </div>
  `).join("");

  container.innerHTML += `
    <div class="col-12 col-md-7 border order-card mb-3 p-3">

      <h6 class="fw-bold mb-1">Order #${order.orderId}</h6>
      <small class="text-muted d-block mb-3">
        ${new Date(order.createdAt).toDateString()}
      </small>

      ${productsHtml}

      <div class="d-flex justify-content-between align-items-center mt-3">
        <span class="fw-semibold">
          Total(including taxes): ₹${Number(order.totalAmount).toFixed(2)}
        </span>

       

        <span class="${status.className}">
          <i class="bi ${status.icon}"></i> ${status.text}
        </span>

      </div>
      <!-- Buttons -->
      <div class="mt-3 d-flex flex-wrap gap-2">
        <button class="btn btn-outline-secondary btn-sm"
                onclick="trackOrder('${order.orderId}', ${order.createdAt})">
          Track Order
        </button>

        <button class="btn btn-outline-secondary btn-sm"
                onclick='reorder(${JSON.stringify(order.products)})'>
          Reorder
        </button>

      </div>

    </div>
  `;
});

function trackOrder(id,cdate) {
let stat = getOrderStatus(cdate);
    alert(`Order #${id} is currently ${stat.text}`);
}

function getOrderStatus(createdAt) {
  const now = Date.now();
  const diffHours = (now - createdAt) / (1000 * 60 * 60);

  if (diffHours < 24) {
    return {
      text: "Shipped",
      icon: "bi-truck",
      className: "status-shipped"
    };
  }

  if (diffHours < 48) {
    return {
      text: "In Transit",
      icon: "bi-box-seam",
      className: "status-transit"
    };
  }

  return {
    text: "Delivered",
    icon: "bi-check-circle",
    className: "status-delivered"
  };
}

