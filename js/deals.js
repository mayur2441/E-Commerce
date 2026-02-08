
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
        <div class="col-md-3 mb-4">
            <div class="card position-relative card-hover" style="width: 21rem;">
                
                <img src="${product.image}" class="card-img-top card-image" alt="${product.title}">
                
                <div class="position-absolute top-0 end-0 m-3">
                    <span class="bg-danger text-white px-2 py-1 rounded">
                        Save Rs. ${product.save}.00
                    </span>
                </div>

                <div class="card-body">
                    <p class="text-secondary">${product.category}</p>
                    <h5 class="card-title">${product.title}</h5>

                    <p class="card-text">
                        ${generateStars(product.rating)}
                        <span>(${product.reviews})</span>
                    </p>

                    <div class="pb-3">
                        <span class="fs-5 fw-bold">Rs. ${product.price}</span>
                        <span class="text-decoration-line-through text-secondary">Rs.${product.oldPrice}</span>
                    </div>

                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary w-100">
                            <i class="bi bi-cart2"></i> Add To Cart
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

