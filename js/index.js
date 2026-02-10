

const COMMON_PRODUCT_DATA = {
  currency: "INR",
  inclusiveOfTaxes: true,

  delivery: {
    freeDelivery: true,
    estimatedDate: "Sunday, 8 February",
    deliveredBy: "Four Square",
    returnPolicy: "10 days Return & Exchange"
  },

  seller: {
    soldBy: "Four Square Retail",
    fulfilledBy: "Four Square",
    secureTransaction: true
  },

  quantityAvailable: [1, 2, 3, 4, 5],

  actions: {
    addToCart: true,
    buyNow: true,
    addToWishlist: true
  }
};

const OFFER_POOL = [
  {
    type: "Cashback",
    description: "Upto ₹50 cashback as Amazon Pay Balance"
  },
  {
    type: "Bank Offer",
    description: "Upto ₹1,500 instant discount on Credit Cards"
  },
  {
    type: "No Cost EMI",
    description: "No Cost EMI available on select cards"
  },
  {
    type: "Partner Offer",
    description: "Get GST invoice and save up to 18% on business purchases"
  },
  {
    type: "Festival Offer",
    description: "Extra 10% off during festive sale"
  }
];

/* ================= CLOTHING ================= */
const clothing_products = [
  {
    id: 1,
    category: "Clothing",
    subCategory: "Girls",
    type: "Ethnic Wear",

    brand: "KRUPA CREATION",
    title: "South Indian Dress for Girls Traditional Lehenga Choli",

    images: [
      "Resources/Images/kidsdress.jpeg",
      "Resources/Images/kidsdress2.jpeg",
      "Resources/Images/kidsdress3.jpeg"
    ],
    mainImage: "Resources/Images/kidsdress.jpeg",

    rating: 3.3,
    reviews: 57,

    price: 799,
    mrp: 1998,
    discountPercentage: 60,
    save: 1199,

    badge: "Best Seller",
    stockStatus: "In stock",

     offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },

  {
    id: 2,
    category: "Clothing",
    subCategory: "Men",
    type: "Casual Wear",

    brand: "Urban Style",
    title: "Men Cotton Round Neck T-Shirt",

    images: ["Resources/Images/Product2.webp"],
    mainImage: "Resources/Images/Product2.webp",

    rating: 4.0,
    reviews: 568,

    price: 799,
    mrp: 1099,
    discountPercentage: 27,
    save: 300,

    badge: "Trending",
    stockStatus: "In stock",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },

  {
    id: 3,
    category: "Clothing",
    subCategory: "Men",
    type: "Premium Wear",

    brand: "Fashion Hub",
    title: "Men Premium Cotton T-Shirt",

    images: ["Resources/Images/Product3.webp"],
    mainImage: "Resources/Images/Product3.webp",

    rating: 4.2,
    reviews: 156,

    price: 199,
    mrp: 399,
    discountPercentage: 50,
    save: 200,

    badge: "Trending",
    stockStatus: "In stock",
     offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  }
];


/* ================= HOME APPLIANCES ================= */
const home_appliances_products = [
  {
    id: 1,
    category: "Home Appliances",
    subCategory: "Kitchen",
    type: "Refrigerator",
    brand: "LG",

    title: "Double Door Refrigerator",

    images: ["Resources/Images/fridge.jpeg"],
    mainImage: "Resources/Images/fridge.jpeg",

    rating: 4,
    reviews: 198,

    price: 8999.99,
    mrp: 10999.99,
    discountPercentage: 18,
    save: 2000,

    badge: "Best Seller",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 2,
    category: "Home Appliances",
    subCategory: "Kitchen",
    type: "Microwave",
    brand: "Samsung",

    title: "Convection Microwave Oven",

    images: ["Resources/Images/microwave.jpeg"],
    mainImage: "Resources/Images/microwave.jpeg",

    rating: 4,
    reviews: 142,

    price: 1999.99,
    mrp: 2499.99,
    discountPercentage: 20,
    save: 500,

    badge: "New Arrival",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 3,
    category: "Home Appliances",
    subCategory: "Living Room",
    type: "Furniture",
    brand: "Urban Living",

    title: "Modern Sofa",

    images: ["Resources/Images/home_appliances.png"],
    mainImage: "Resources/Images/home_appliances.png",

    rating: 5,
    reviews: 96,

    price: 6999.99,
    mrp: 8499.99,
    discountPercentage: 18,
    save: 1500,

    badge: "Trending",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  }
];


/* ================= TOYS ================= */
const toys_products = [
  {
    id: 1,
    category: "Toys",
    subCategory: "Soft Toys",
    type: "Kids",
    brand: "FunTime",

    title: "Soft Teddy Bear",

    images: ["Resources/Images/toys.png"],
    mainImage: "Resources/Images/toys.png",

    rating: 5,
    reviews: 412,

    price: 599.99,
    mrp: 799.99,
    discountPercentage: 25,
    save: 200,

    badge: "Best Seller",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 2,
    category: "Toys",
    subCategory: "Remote Toys",
    type: "Kids",
    brand: "SpeedMax",

    title: "Remote Control Car",

    images: ["Resources/Images/remote.jpeg"],
    mainImage: "Resources/Images/remote.jpeg",

    rating: 4,
    reviews: 268,

    price: 1299.99,
    mrp: 1599.99,
    discountPercentage: 19,
    save: 300,

    badge: "Trending",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  }
];


/* ================= MOBILE ================= */
const mobile_products = [
  {
    id: 1,
    category: "Mobile",
    subCategory: "Smartphones",
    type: "5G",
    brand: "Samsung",

    title: "5G Smartphone",

    images: ["Resources/Images/mobile.png"],
    mainImage: "Resources/Images/mobile.png",

    rating: 5,
    reviews: 820,

    price: 24999.99,
    mrp: 29999.99,
    discountPercentage: 17,
    save: 5000,

    badge: "Best Seller",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  }
];


/* ================= ELECTRONICS ================= */
const electronics_products = [
  {
    id: 1,
    category: "Electronics",
    subCategory: "Audio",
    type: "Headphones",
    brand: "boAt",

    title: "Wireless Bluetooth Headphones",

    images: ["Resources/Images/headphone.jpeg"],
    mainImage: "Resources/Images/headphone.jpeg",

    rating: 4,
    reviews: 345,

    price: 2999.99,
    mrp: 3999.99,
    discountPercentage: 25,
    save: 1000,

    badge: "Best Seller",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 2,
    category: "Electronics",
    subCategory: "Computers",
    type: "Laptop",
    brand: "HP",

    title: "HP Laptop 15s, Intel i5",

    images: ["Resources/Images/laptop.jpeg"],
    mainImage: "Resources/Images/laptop.jpeg",

    rating: 5,
    reviews: 190,

    price: 55999.99,
    mrp: 62999.99,
    discountPercentage: 11,
    save: 7000,

    badge: "Trending",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 3,
    category: "Electronics",
    subCategory: "Audio",
    type: "Speaker",
    brand: "JBL",

    title: "Portable Bluetooth Speaker",

    images: ["Resources/Images/bluetooth.jpeg"],
    mainImage: "Resources/Images/bluetooth.jpeg",

    rating: 4,
    reviews: 260,

    price: 1999.99,
    mrp: 2499.99,
    discountPercentage: 20,
    save: 500,

    badge: "New Arrival",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  }
];


/* ================= BEAUTY ================= */
const beauty_products = [
  {
    id: 1,
    category: "Beauty",
    subCategory: "Makeup",
    type: "Accessories",
    brand: "Lakme",

    title: "Makeup Brush Set",

    images: ["Resources/Images/beauty.png"],
    mainImage: "Resources/Images/beauty.png",

    rating: 5,
    reviews: 330,

    price: 899.99,
    mrp: 1199.99,
    discountPercentage: 25,
    save: 300,

    badge: "Best Seller",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 2,
    category: "Beauty",
    subCategory: "Skincare",
    type: "Cream",
    brand: "Nivea",

    title: "Face Moisturizing Cream",

    images: ["Resources/Images/facecream.jpeg"],
    mainImage: "Resources/Images/facecream.jpeg",

    rating: 4,
    reviews: 210,

    price: 699.99,
    mrp: 999.99,
    discountPercentage: 30,
    save: 300,

    badge: "Trending",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 3,
    category: "Beauty",
    subCategory: "Fragrance",
    type: "Perfume",
    brand: "Fogg",

    title: "Long Lasting Perfume",

    images: ["Resources/Images/perfumes.jpeg"],
    mainImage: "Resources/Images/perfumes.jpeg",

    rating: 5,
    reviews: 180,

    price: 1999.99,
    mrp: 2499.99,
    discountPercentage: 20,
    save: 500,

    badge: "New Arrival",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  }
];


/* ================= SPORTS ================= */
const sports_products = [
  {
    id: 1,
    category: "Sports",
    subCategory: "Cricket",
    type: "Equipment",
    brand: "SG",

    title: "Cricket Ball Set",

    images: ["Resources/Images/sports.png"],
    mainImage: "Resources/Images/sports.png",

    rating: 4,
    reviews: 150,

    price: 499.99,
    mrp: 699.99,
    discountPercentage: 29,
    save: 200,

    badge: "Best Seller",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 2,
    category: "Sports",
    subCategory: "Football",
    type: "Ball",
    brand: "Nivia",

    title: "Professional Football",

    images: ["Resources/Images/football.jpeg"],
    mainImage: "Resources/Images/football.jpeg",

    rating: 5,
    reviews: 260,

    price: 799.99,
    mrp: 999.99,
    discountPercentage: 20,
    save: 200,

    badge: "Trending",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 3,
    category: "Sports",
    subCategory: "Badminton",
    type: "Racket",
    brand: "Yonex",

    title: "Badminton Racket",

    images: ["Resources/Images/tennis.jpeg"],
    mainImage: "Resources/Images/tennis.jpeg",

    rating: 4,
    reviews: 180,

    price: 1499.99,
    mrp: 1999.99,
    discountPercentage: 25,
    save: 500,

    badge: "New Arrival",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  }
];


/* ================= WATCHES ================= */
const watches_products = [
  {
    id: 1,
    category: "Watches",
    subCategory: "Men",
    type: "Analog",
    brand: "Titan",

    title: "Men Analog Watch",

    images: ["Resources/Images/watches.png"],
    mainImage: "Resources/Images/watches.png",

    rating: 5,
    reviews: 420,

    price: 2999.99,
    mrp: 3999.99,
    discountPercentage: 25,
    save: 1000,

    badge: "Best Seller",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 2,
    category: "Watches",
    subCategory: "Women",
    type: "Fashion",
    brand: "Fastrack",

    title: "Women Stylish Watch",

    images: ["Resources/Images/luxury.jpeg"],
    mainImage: "Resources/Images/luxury.jpeg",

    rating: 4,
    reviews: 310,

    price: 2499.99,
    mrp: 3499.99,
    discountPercentage: 29,
    save: 1000,

    badge: "Trending",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 3,
    category: "Watches",
    subCategory: "Unisex",
    type: "Smart Watch",
    brand: "Noise",

    title: "Smart Watch",

    images: ["Resources/Images/smartwatch.jpeg"],
    mainImage: "Resources/Images/smartwatch.jpeg",

    rating: 5,
    reviews: 520,

    price: 4999.99,
    mrp: 5999.99,
    discountPercentage: 17,
    save: 1000,

    badge: "New Arrival",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  }
];


/* ================= FOOTWEAR ================= */
const footwear_products = [
  {
    id: 1,
    category: "Footwear",
    subCategory: "Men",
    type: "Sports Shoes",
    brand: "Nike",

    title: "Men Sports Shoes",

    images: ["Resources/Images/footwear.png"],
    mainImage: "Resources/Images/footwear.png",

    rating: 4,
    reviews: 290,

    price: 1999.99,
    mrp: 2499.99,
    discountPercentage: 20,
    save: 500,

    badge: "Best Seller",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 2,
    category: "Footwear",
    subCategory: "Women",
    type: "Sandals",
    brand: "Bata",

    title: "Women Sandals",

    images: ["Resources/Images/sneakers.jpeg"],
    mainImage: "Resources/Images/sneakers.jpeg",

    rating: 5,
    reviews: 210,

    price: 1499.99,
    mrp: 1999.99,
    discountPercentage: 25,
    save: 500,

    badge: "Trending",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 3,
    category: "Footwear",
    subCategory: "Kids",
    type: "Casual Shoes",
    brand: "Puma",

    title: "Kids Casual Shoes",

    images: ["Resources/Images/shoes.jpeg"],
    mainImage: "Resources/Images/shoes.jpeg",

    rating: 4,
    reviews: 160,

    price: 1299.99,
    mrp: 1799.99,
    discountPercentage: 28,
    save: 500,

    badge: "New Arrival",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  }
];


/* ================= MEDICAL EQUIPMENTS ================= */
const medical_products = [
  {
    id: 1,
    category: "Medical Equipments",
    subCategory: "Respiratory",
    type: "Nebulizer",
    brand: "Omron",

    title: "Nebulizer Machine",

    images: ["Resources/Images/medical.png"],
    mainImage: "Resources/Images/medical.png",

    rating: 5,
    reviews: 230,

    price: 2499.99,
    mrp: 2999.99,
    discountPercentage: 17,
    save: 500,

    badge: "Best Seller",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 2,
    category: "Medical Equipments",
    subCategory: "Monitoring",
    type: "BP Monitor",
    brand: "Dr Trust",

    title: "Digital BP Monitor",

    images: ["Resources/Images/bpmonitor.jpeg"],
    mainImage: "Resources/Images/bpmonitor.jpeg",

    rating: 4,
    reviews: 180,

    price: 1999.99,
    mrp: 2499.99,
    discountPercentage: 20,
    save: 500,

    badge: "Trending",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  },
  {
    id: 3,
    category: "Medical Equipments",
    subCategory: "Monitoring",
    type: "Oximeter",
    brand: "AccuSure",

    title: "Pulse Oximeter",

    images: ["Resources/Images/thermometer.jpeg"],
    mainImage: "Resources/Images/thermometer.jpeg",

    rating: 4,
    reviews: 310,

    price: 999.99,
    mrp: 1299.99,
    discountPercentage: 23,
    save: 300,

    badge: "New Arrival",
    offers: getRandomOffers(),

    ...COMMON_PRODUCT_DATA
  }
];



const clothing_container = document.getElementById("clothing");
const home_appliances_container = document.getElementById("home_appliances");
const toys_container = document.getElementById("toys");
const mobile_container = document.getElementById("mobile");
const electronics_container = document.getElementById("electronics");
const beauty_container = document.getElementById("beauty");
const sports_container = document.getElementById("sports");
const watches_container = document.getElementById("watches");
const footwear_container = document.getElementById("footwear");
const medical_container = document.getElementById("medical");

renderProducts(clothing_products, clothing_container);
renderProducts(home_appliances_products, home_appliances_container);
renderProducts(toys_products, toys_container);
renderProducts(mobile_products, mobile_container);
renderProducts(electronics_products, electronics_container);
renderProducts(beauty_products, beauty_container);
renderProducts(sports_products, sports_container);
renderProducts(watches_products, watches_container);
renderProducts(footwear_products, footwear_container);
renderProducts(medical_products, medical_container);

function renderProducts(products,containers){
    return products.forEach(product => {
    containers.innerHTML += `
                    <div class="col-md-4 ">
                        <div class="card product-card h-100 border rounded-4 overflow-hidden">
                            <div class="position-relative">
                                <img src="${product.mainImage}" class="card-img-top" alt="${product.mainImage}">
                    
                                
                                <span class="badge bg-primary position-absolute top-0 start-0 m-3 px-3 py-2">
                                    ${product.badge}
                                </span>
                    
                                <span class="badge bg-danger position-absolute top-0 end-0 m-3 px-3 py-2">
                                    Save Rs.${product.save}
                                </span>
                            </div>
                            <div class="card-body">
                                 <p class="text-secondary fs-6">${product.category}</p>
                                <h5 class="fw-bold mb-2">
                                   ${product.title}
                                </h5>
                                
                                <div class="d-flex align-items-center mb-3">
                                    <p class="card-text">
                                        ${generateStars(product.rating)}
                                        <span>(${product.reviews})</span>
                                    </p>
                                </div>
                    
                                
                                <div class="mb-4">
                                    <span class="fs-4 fw-bold">Rs. ${product.price}</span>
                                    <span class="text-muted text-decoration-line-through ms-2">
                                        Rs. ${product.mrp}
                                    </span>
                                </div>
                                 <a class="btn btn-primary btn-sm" onclick="AddToCart(${product.id}, '${product.category}')" ><i class="bi bi-cart"></i> Add to Cart</a>
                                <a class="btn btn-outline-primary btn-sm" onclick="GoToDetails(${product.id}, '${product.category}')" >View
                                    Details</a>
                            </div>
                        </div>
                    </div>
                `;
            });

}

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


function GoToDetails(id, category) {
  const product = getProductById(id, category);

  if (!product) {
    console.error("Product not found:", id, category);
    alert("Product not found");
    return;
  }

  localStorage.setItem("detail", JSON.stringify(product));
  window.location.href = "product_details.html";
}


function getRandomOffers(maxOffers = 2) {
  const shuffled = [...OFFER_POOL].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * maxOffers) + 1);
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


function generateStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating
            ? `<i class="bi bi-star-fill text-warning"></i>`
            : `<i class="bi bi-star-fill text-secondary"></i>`;
    }
    return stars;
}
