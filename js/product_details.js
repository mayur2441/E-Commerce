const product = JSON.parse(localStorage.getItem("detail"));

if (!product) {
  window.location.href = "index.html";
  
}




/* ---------- SAFE TITLE ---------- */


/* ---------- RENDER ---------- */
document.getElementById("productDetails").innerHTML = `
<div class="row g-4 mt-5 mb-5">

  <!-- LEFT IMAGES -->
  <div class="col-md-5 d-flex">
   
    <img src="${product.mainImage}" class="img-fluid">
  </div>

  <!-- CENTER PRODUCT INFO -->
  <div class="col-md-4">
    <p class="text-primary mb-1">${product.brand}</p>

    <h4>${product.title}</h4>

    <p>
      ${generateStars(product.rating)}
      <span>(${product.reviews})</span>
    </p>

    <p class="fw-bold fs-5">
      ₹${product.price}
      <span class="text-success ms-2">
        (${product.discountPercentage}% off)
      </span>
    </p>

    <p>
      M.R.P.: 
      <span class="text-decoration-line-through">
        ₹${product.mrp}
      </span>
    </p>

    <p class="text-muted">Inclusive of all taxes</p>

    <!-- OFFERS -->
    
    <img src="./Resources/Icons/offer.png" style="height: 40px; width: 40px;"><strong> Offers</strong></img>
    <div class="row"> 
      ${product.offers.map(offer => `
        <div class="col-6 mb-2">
          <div class="border p-2 rounded small">
            <strong>${offer.type}</strong><br>
            ${offer.description}
          </div>
        </div>
      `).join("")}
    </div>

    <!-- DELIVERY -->
    <div class="d-flex gap-4 mt-3 text-center small">
      <div>
        <i class="bi bi-arrow-repeat fs-4"></i><br>
        ${product.delivery.returnPolicy}
      </div>
      <div>
        <i class="bi bi-truck fs-4"></i><br>
        Free Delivery
      </div>
      <div>
        <i class="bi bi-shield-lock fs-4"></i><br>
        Secure
      </div>
    </div>
  </div>

  <!-- BUY BOX -->
  <div class="col-md-3">
    <div class="buy-box">
      <p class="fw-bold fs-5">₹${product.price}</p>
      <p class="text-success fw-bold">${product.stockStatus}</p>

      <label class="form-label">Quantity</label>
      <select class="form-select mb-3">
        ${product.quantityAvailable.map(q =>
          `<option value="${q}">${q}</option>`
        ).join("")}
      </select>

      <button class="btn btn-cart w-100 mb-2"
        onclick="AddToCart(${product.id}, '${product.category}')">
        Add to Cart
      </button>

      <button class="btn btn-buy w-100 mb-2" onclick="buyNow(${product.id}, '${product.category}')">Buy Now</button>

      <button class="btn btn-outline-secondary w-100">
        Add to Wish List
      </button>
    </div>
  </div>

</div>
`;

function AddToCart(id, category) {
    const product = getProductById(id, category);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
}


function buyNow(id, category) {
    
  window.location.href = "checkout.html";
}



//helper to get the products.
function getProductById(id, category) {
    const map = {
        Clothing: clothing_products,
        "Home Appliances": home_appliances_products,
        Toys: toys_products,
        Mobile: mobile_products,
        Electronics: electronics_products,
        Beauty: beauty_products,
        Sports: sports_products,
        Watches: watches_products,
        Footwear: footwear_products,
        "Medical Equipments": medical_products
    };

    return map[category].find(p => p.id === id);
}
/* ---------- STARS ---------- */
function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating
      ? `<i class="bi bi-star-fill text-warning"></i>`
      : `<i class="bi bi-star text-secondary"></i>`;
  }
  return stars;
}
