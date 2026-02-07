const product = JSON.parse(localStorage.getItem("detail"));

document.getElementById("checkout").innerHTML = `
<div class="row g-4" >

                <!-- LEFT SECTION -->
                <div class="col-lg-8">

                    <!-- DELIVERY ADDRESS -->
                    <div class="card-box d-flex justify-content-between">
                        <div>
                            <h6 class="fw-bold">Delivering to Mayur Sharad Kakad</h6>
                            <p class="mb-1 small">
                                Flat NO:E104, Green Square, Dehu Alandi Road, Borhadewadi, Moshi-412105,
                                Pimpri Chinchwad, Maharashtra, India
                            </p>
                            <a class="change-link">Add delivery instructions</a>
                        </div>
                        <div>
                            <a class="change-link">Change</a>
                        </div>
                    </div>

                    <!-- PAYMENT METHOD -->
                    <div class="card-box d-flex justify-content-between">
                        <div>
                            <h6 class="fw-bold">Paying with Visa 7530</h6>
                            <a class="change-link">Use a gift card, voucher or promo code</a>
                        </div>
                        <div>
                            <a class="change-link">Change</a>
                        </div>
                    </div>

                    <!-- PRODUCT + DELIVERY -->
                    <div class="card-box">
                        <h6 class="fw-bold mb-3">
                            Scheduled delivery time for this item:
                            <strong>7 AM – 9 PM ${getDateAfter7Days()}</strong>
                        </h6>

                        <div class="row">
                            <!-- PRODUCT -->
                            <div class="col-md-6 d-flex gap-3">
                                <img src="${product.mainImage}"
                                    class="product-img">

                                <div>
                                    <p class="fw-semibold mb-1">
                                        ${product.title}
                                    </p>

                                    <span class="deal-badge">${product.discountPercentage}% off</span>
                                    <span class="text-danger small">Limited time deal</span>

                                    <p class="fw-bold mt-2 mb-1">Rs.${product.price}</p>

                                    <p class="small mb-1">
                                        Ships from Four Square <span class="badge bg-secondary">Fulfilled</span>
                                    </p>

                                    <p class="small">Sold by <span class="text-primary">RetailEZ Pvt Ltd</span></p>

                                    <!-- Quantity -->
                                    <div class="qty-box mt-2">
                                        <i class="bi bi-trash"></i>
                                        <span>1</span>
                                        <i class="bi bi-plus"></i>
                                    </div>
                                </div>
                            </div>

                            <!-- DELIVERY OPTIONS -->
                            <div class="col-md-6">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" checked>
                                    <label class="form-check-label">
                                        <strong> ${getDateAfter7Days()}</strong><br>
                                        FREE Delivery – Choose a convenient date and time
                                    </label>
                                </div>

                                <a class="change-link d-block mt-1">Change date and time</a>

                            </div>
                        </div>
                    </div>

                </div>

                <!-- RIGHT SECTION -->
                <div class="col-lg-4">
                    <div class="card-box order-summary">

                        <button class="btn pay-btn w-100 mb-3" onclick="goToSuccess()">
                            Pay with credit card **7530
                        </button>

                        <p class="small">
                            By placing your order, you agree to Amazon’s
                            <a href="#">privacy notice</a> and
                            <a href="#">conditions of use</a>.
                        </p>

                        <hr>

                        <p>Items: <span class="float-end">Rs.${product.price}</span></p>
                        <p>Delivery: <span class="float-end">₹0.00</span></p>
                        <p>Marketplace Fee: <span class="float-end">₹5.00</span></p>

                        <hr>

                        <h5 class="fw-bold">
                            Order Total:
                            <span class="float-end">Rs.${getFinalPrice()}</span>
                        </h5>

                    </div>
                </div>

            </div>
`;

function getDateAfter7Days() {
  const today = new Date();
  today.setDate(today.getDate() + 7);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-IN", options);
}

function getFinalPrice() {

  return  product.price+5;
}
function goToSuccess(){
    window.location.href="order_success.html"
}