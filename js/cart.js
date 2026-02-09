let cart = JSON.parse(localStorage.getItem("cart")) || [];
let showProducts = (cart.count>0);
document.addEventListener("DOMContentLoaded", () => {
    renderCart();
});

function renderCart() {
    const container = document.getElementById("cartId");
    const sumData = document.getElementById("summuryDetail");

    if (!container) {
        console.error("cartId element not found");
        return;
    }

    // 🔥 MUST clear before render
    container.innerHTML = "";
    sumData.innerHTML =" ";
    if (cart.length === 0) {

        container.innerHTML = `
            <div class="text-center text-muted p-4">
                Your cart is empty
            </div>
        `;

        sumData.innerHTML +=`
            <div class="text-center text-muted p-4">
                
            </div>
        `;

        return;




    }
    else{

    cart.forEach(product => {
        container.innerHTML += `
            <div class="col-12 border product_cart d-flex flex-column flex-md-row mb-3">

                <img class="m-4 border cart_img" src="${product.mainImage}" alt="">

                <div class="w-100 me-3">
                    <div class="d-flex justify-content-between pt-3">
                        <div>
                            <strong class="fs-5">${product.title}</strong>
                            <p class="text-secondary">${product.category}</p>
                        </div>

                        <span class="m-2"
                              onclick="removeFromCart(${product.id}, '${product.category}')">
                            <i class="bi bi-trash text-danger fs-5"></i>
                        </span>
                    </div>

                    <div class="d-flex justify-content-between">
                        <div class="d-flex gap-2 gap-md-4 p-2 flex-wrap">
                            <button class="btn border fw-bold">-</button>
                            <div class="text-center m-2">${product.quantity}</div>
                            <button class="btn border fw-bold">+</button>
                        </div>

                        <div>
                            <div class="fw-bold fs-5">Rs. ${product.price}</div>
                            <div class="fs-6">Rs. ${product.price} each</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    let sumData= document.getElementById("summuryDetail")
sumData.innerHTML +=`
        <div class="container border product_cart p-4">
                                <h3 class="fw-bold">Order Summery</h3>
                
                                <!-- bill details  -->
                                <div class=" mb-4 mt-3">
                                    <!-- line 1 -->
                                    <div class="d-flex justify-content-between mb-2 ">
                                        <span class="fs-5 text-secondary">Subtotal</span>
                                        <span class="fs-5">Rs.${calculatePrice()}</span>
                                    </div>
                
                                    <!-- line 2 -->
                                    <div class="d-flex justify-content-between mb-2">
                                        <span class="fs-5 text-secondary">Shipping</span>
                                        <span class="fs-5 ">Free</span>
                                    </div>
                
                                    <!-- line 3  -->
                                    <div class="d-flex justify-content-between mb-2">
                                        <span class="fs-5 text-secondary">Tax</span>
                                        <span class="fs-5">Rs.${calculateTax()}</span>
                                    </div>
                
                                    <hr>
                
                                    <div class="d-flex fw-bold fs-4 justify-content-between mt-3">
                                        <span>Total</span>
                                        <span>Rs.${calculateTotalPrice()}</span>
                                    </div>
                
                                </div>
                
                                <!-- form  -->
                                <div class=" d-flex justify-content-between mb-4">
                
                                    <input class="form-control input-lg me-2 bg-light text-dark" type="search" placeholder="Coupon Code"
                                        aria-label="Search" />
                                    <button class="btn btn-secondary bg-light text-dark btn-lg border " type="submit">Apply</button>
                
                
                                </div>
                
                                <!-- buttons  -->
                                <button type="button" class="btn btn-primary w-100 mb-3 btn-lg" onclick="GoToCheckout()">Proceed To Checkout</button>
                                <br>
                                <button type="button" class="btn btn-light bg-white btn-lg border mb-2 w-100">Continue Shopping</button>
                
                            </div>
    `;
    



}
}




function GoToCheckout(id, category) {
    

    
    window.location.href = "checkout.html";
}


function removeFromCart(id, category) {
    cart = cart.filter(
        item => !(item.id === id && item.category === category)
    );

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function calculatePrice(){
    let price=0;
    
    cart.forEach(product => {
        price+=(product.price * product.quantity);

    });
    return price.toFixed(2);
}

function calculateTax(){
    let tax=0;
    
    cart.forEach(product => {
        tax+=(product.price * product.quantity);

    });
    return (tax*(18/100)).toFixed(2);
}

function calculateTotalPrice(){
    let tax=0;
    let price=0;
    
    cart.forEach(product => {
        price+=(product.price * product.quantity);

    });
    return (price*(18/100) + price).toFixed(2);
}



