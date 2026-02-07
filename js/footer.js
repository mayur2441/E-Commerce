const data=document.getElementById("footerSection");
data.innerHTML += `
 <div class="container" >
                    <div class="row">

                <!-- 1️⃣ LOGO + SITE NAME -->
                <div class="col-md-3 mb-4 footer-brand">

                    <!-- Logo -->
                    <img src="./Resources/Icons/icon.png" alt="FourSquare" class="footer-logo">

                    <!-- Tagline -->
                    <p class="footer-tagline">
                        Your Shopping, Our Team.<br>
                        One stop destination for fashion & electronics.
                    </p>

                </div>


                <!-- 2️⃣ QUICK LINKS -->
                <div class="col-md-3 mb-4">
                    <h6 class="footer-title">Quick Links</h6>
                    <ul class="list-unstyled">
                        <li><a href="index.html" class="footer-link">Home</a></li>
                        <li><a href="new_arrivals.html" class="footer-link">New Arrivals</a></li>
                        <li><a href="categories.html" class="footer-link">Categories</a></li>
                        <li><a href="shop.html" class="footer-link">Shop</a></li>
                        <li><a href="deals.html" class="footer-link">Deals</a></li>
                        <li><a href="orders.html" class="footer-link">Orders</a></li>
                        <li><a href="cart.html" class="footer-link">Cart</a></li>
                        <li><a href="contact.html" class="footer-link">Contact Us</a></li>
                    </ul>
                </div>

                <!-- 3️⃣ MY PRODUCTS -->
                <div class="col-md-3 mb-4">
                    <h6 class="footer-title">My Products</h6>
                    <ul class="list-unstyled">
                        <li><a href="#" class="footer-link">Clothing</a></li>
                        <li><a href="#" class="footer-link">Electronics</a></li>
                        <li><a href="#" class="footer-link">Home Appliances</a></li>
                        <li><a href="#" class="footer-link">Toys</a></li>
                        <li><a href="#" class="footer-link">Mobiles</a></li>
                        <li><a href="#" class="footer-link">Beauty</a></li>
                        <li><a href="#" class="footer-link">Sports</a></li>
                        <li><a href="#" class="footer-link">Watches</a></li>
                        <li><a href="#" class="footer-link">Footwear</a></li>
                        <li><a href="#" class="footer-link">Medical Equipments</a></li>
                    </ul>
                </div>

                <!-- 4️⃣ ADDRESS / EMAIL / CONTACT -->
                <div class="col-md-3 mb-4">
                    <h6 class="footer-title">Contact</h6>
                    <p class="small mb-2">
                        <i class="bi bi-geo-alt me-2"></i>
                        Fortune Cloud Technologies Private Limited, 7th Floor, Bramha Sky Uzuri,Pimpri Colony,
                        Pimpri-Chinchwad<br>
                        Maharashtra, India - 411018
                    </p>
                    <p class="small mb-2">
                        <i class="bi bi-envelope me-2"></i>
                        
                         <a href="mailto:info@fortunecloudindia.com">info@fortunecloudindia.com</a>
                    </p>
                    <p class="small">
                        <i class="bi bi-telephone me-2"></i>
                         <a href="tel:+918002949090">+91 080029 49090</a>
                    </p>

                    <!-- Social Icons -->
                    <div class="d-flex gap-3 mt-3">
                        <i class="bi bi-facebook footer-icon"></i>
                        <i class="bi bi-instagram footer-icon"></i>
                        <i class="bi bi-twitter-x footer-icon"></i>
                        <i class="bi bi-youtube footer-icon"></i>
                    </div>
                </div>

            </div>

            <!-- Bottom Line -->
            <div class="text-center border-top pt-3 mt-3 small text-muted footer-copyright">
                © ${getYear()} Four Square. All rights reserved.
            </div>
            </div>
                `;

                function getYear(){
                    let dat=new Date();
                    dat.getFullYear;
                    return dat.getFullYear();
                }



