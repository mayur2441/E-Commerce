const data=document.getElementById("navBar");
const dataFooter=document.getElementById("footerSection");
data.innerHTML += `
  <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="./Resources/Icons/icon.png" alt="Bootstrap" width="290" height="60">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="new_arrivals.html">New Arrivals</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="categories.html" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Categories
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="clothing.html">Clothing</a></li>
                                <li><a class="dropdown-item" href="electronics.html">Electronic</a></li>
                                <li><a class="dropdown-item" href="home_appliances.html">Home Appliances</a></li>
                                <li><a class="dropdown-item" href="toys.html">Toys</a></li>
                                <li><a class="dropdown-item" href="mobiles.html">Mobiles</a></li>
                                <li><a class="dropdown-item" href="beauty.html">Beauty</a></li>
                                <li><a class="dropdown-item" href="sports.html">Sports</a></li>
                                <li><a class="dropdown-item" href="watches.html">Watches</a></li>
                                <li><a class="dropdown-item" href="footwear.html">Footwear</a></li>
                                <li><a class="dropdown-item" href="medical.html">Medical Equipments</a></li>

                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="shop.html">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="deals.html">Deals</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="orders.html">Orders</a>
                        </li>
                       
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact Us</a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link" href="cart.html"> <i class="bi bi-cart me-1"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="profile.html"> <i class="bi bi-person-circle "></i>
                            </a>
                        </li>
                       

                       
                    </ul>

                </div>
            </div>
                `;


                dataFooter.innerHTML += `
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
                        <li><a href="clothing.html" class="footer-link">Clothing</a></li>
                        <li><a href="electronics.html" class="footer-link">Electronics</a></li>
                        <li><a href="home_appliances.html" class="footer-link">Home Appliances</a></li>
                        <li><a href="toys.html" class="footer-link">Toys</a></li>
                        <li><a href="mobiles.html" class="footer-link">Mobiles</a></li>
                        <li><a href="beauty.html" class="footer-link">Beauty</a></li>
                        <li><a href="sports.html" class="footer-link">Sports</a></li>
                        <li><a href="watches.html" class="footer-link">Watches</a></li>
                        <li><a href="footwear.html" class="footer-link">Footwear</a></li>
                        <li><a href="medical.html" class="footer-link">Medical Equipments</a></li>
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

                



