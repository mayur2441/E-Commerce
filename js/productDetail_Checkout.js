const product = JSON.parse(localStorage.getItem("detail"))|| [];

//const products = [...products1, ...products2];


    document.getElementById("checkoutProducts1").innerHTML += `
    <div class= "gap-3">
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
                                        <span>1 </span>
                                        <i class="bi bi-plus"></i>
                                    </div>
                                </div>
                            </div>
`;



function getDateAfter7Days() {
    const date = new Date();
    date.setDate(date.getDate() + 7);

    const options = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long' 
    };

    return date.toLocaleDateString('en-IN', options);
}

// set date on page load
document.getElementById("deliveryDate2").innerText +=
    ` 7 AM to 9 PM, Delivery by ${getDateAfter7Days()}`;


    document.getElementById("deliveryDate3").innerText +=
    ` Delivery by ${getDateAfter7Days()}`;


     document.getElementById("priceSection1").innerHTML +=` 

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

                        <p>Items: <span class="float-end">Rs. ${calculatePrice()}</span></p>
                        <p>Delivery: <span class="float-end">Rs. 0.00</span></p>
                        <p>Marketplace Fee: <span class="float-end">Rs.${calculateTax()}</span></p>

                        <hr>

                        <h5 class="fw-bold">
                            Order Total:
                            <span class="float-end">Rs.${calculateTotalPrice()}</span>
                        </h5>

                    </div>
    `;

    function calculatePrice(){
    let price=0;
    
    
        price+=(product.price );

    
    return price.toFixed(2);
}

function calculateTax(){
    let tax=0;
    
    
        tax+=(product.price );

    
    return (tax*(18/100)).toFixed(2);
}

function calculateTotalPrice(){
    let tax=0;
    let price=0;
    
   
        price+=(product.price);

    
    return (price*(18/100) + price).toFixed(2);
}


// function getDateAfter7Days() { 
//   const today = new Date();
//   today.setDate(today.getDate() + 7);

//   const options = {
//     weekday: "long",
//     day: "numeric",
//     month: "long"
//   };

//   return today.toLocaleDateString("en-IN", options);
// }

function getFinalPrice() {

  return  product.price+5;
}
function goToSuccess(){
    localStorage.removeItem("details")
    window.location.href="order_success.html"
}