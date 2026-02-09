
const products = [
    {
        id:1,
        category: "Electronics",
        title: "Premium Wireless Headphones",
        image: "Resources/Images/headphone.jpeg",
        rating: 4,
        reviews: 345,
        price: 299.99,
        oldPrice: 399.99,
        save: 100
    },
    {
        id:2,
        category: "Electronics",
        title: "Premium Refrigerator",
        image: "Resources/Images/fridge.jpeg",
        rating: 4,
        reviews: 568,
        price: 799.99,
        oldPrice: 1299.99,
        save: 500
    },
    {
        id:3,
        category: "Fashion",
        title: "Men's Premium T-shirt",
        image: "Resources/Images/Product2.webp",
        rating: 4,
        reviews: 156,
        price: 199.99,
        oldPrice: 399.99,
        save: 200
    },

    {
        id:4,
        category: "Electronics",
        title: "IPhone 17 Pro",
        image: "Resources/Images/category-mobile.webp",
        rating: 3,
        reviews: 196,
        price: 32299.99,
        oldPrice: 34499.99,
        save: 2000
    },
    {
        id:5,
        category: "Fashion",
        title: "Men's Premium T-shirt",
        image: "Resources/Images/Product2.webp",
        rating: 4,
        reviews: 156,
        price: 199.99,
        oldPrice: 399.99,
        save: 200
    },

    {
        id:6,
        category: "Electronics",
        title: "IPhone 17 Pro",
        image: "Resources/Images/category-mobile.webp",
        rating: 3,
        reviews: 196,
        price: 32299.99,
        oldPrice: 34499.99,
        save: 2000
    }

];

const container = document.getElementById("hotDealsContainer");

products.forEach(product => {
    container.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
    <div class="card position-relative card-hover h-100">

        <!-- Product Image -->
        <img src="${product.image}" 
             class="card-img-top card-image img-fluid"
             alt="${product.title}">

        <!-- Save Badge -->
        <div class="position-absolute top-0 end-0 m-2">
            <span class="bg-danger text-white px-2 py-1 rounded small">
                Save Rs. ${product.save}
            </span>
        </div>

        <div class="card-body d-flex flex-column">

            <p class="text-secondary small mb-1">${product.category}</p>

            <h6 class="card-title fw-semibold">
                ${product.title}
            </h6>

            <p class="card-text mb-2">
                ${generateStars(product.rating)}
                <span class="small">(${product.reviews})</span>
            </p>

            <div class="mb-3">
                <span class="fs-6 fw-bold me-2">Rs. ${product.price}</span>
                <span class="text-decoration-line-through text-secondary small">
                    Rs. ${product.oldPrice}
                </span>
            </div>

            <!-- Push button to bottom -->
            <div class="mt-auto">
                <button class="btn btn-primary w-100">
                    <i class="bi bi-cart2 me-1"></i> Add To Cart
                </button>
            </div>

        </div>
    </div>
</div>

    `;
});

function generateStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating
            ? `<i class="bi bi-star-fill text-warning"></i>`
            : `<i class="bi bi-star-fill text-secondary"></i>`;
    }
    return stars;
}

