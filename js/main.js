const menuItems = [
    {
        id: 1,
        name: "Signature Spicy Malatang",
        description: "Our signature spicy soup with fresh vegetables and noodles.",
        price: 5.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_vB2HscnOimJhnIfa5puoMutSA0Vyr-AjFYjqR-mng&s=10"
    },
    {
        id: 2,
        name: "Beef Malatang",
        description: "Tender beef slices served with our flavorful soup base.",
        price: 6.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqeB0ksWMQQxTh-SZ31StIrI2hkaYOwvzudcXmahWbg&s=10"
    },
    {
        id: 3,
        name: "Seafood Malatang",
        description: "A delicious combination of fresh seafood and vegetables.",
        price: 7.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_vB2HscnOimJhnIfa5puoMutSA0Vyr-AjFYjqR-mng&s=10"
    },
    {
        id: 4,
        name: "Mushroom Malatang",
        description: "A tasty selection of mushrooms in a rich soup base.",
        price: 5.49,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YtxwmE4RQGWt72XT-P9TPCIoWXeoY7fBXZCUPb3uFA&s=10"
    },
    {
        id: 5,
        name: "Chicken Malatang",
        description: "Juicy chicken with fresh vegetables and delicious spices.",
        price: 6.49,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90qqXI0BP4rPmw14bwa_bhLI0w_hhQzm-syDhasGYrw&s=10"
    },
    {
        id: 6,
        name: "Vegetarian Malatang",
        description: "Fresh vegetables, tofu, and noodles in a flavorful broth.",
        price: 4.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekimoNuJnuW7kXcZDych7kHOw3N8ou0BRZEtUkGhMDA&s=10"
    }
];

const menuContainer = document.getElementById("menu-container");

menuItems.forEach(item => {

    menuContainer.innerHTML += `
        <div class="swiper-slide">
            <div class="menu-card">
                <img src="${item.image}" alt="${item.name}">

                <div class="menu-card-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>

                    <div class="menu-card-bottom">
                        <span class="menu-price">$${item.price.toFixed(2)}</span>

                        <button class="add-cart-btn" onclick="addToCart(${item.id})">
                            <i class="fa-solid fa-cart-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

});

const swiper = new Swiper(".menuSwiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,

    navigation: {
        nextEl: ".menu-next",
        prevEl: ".menu-prev"
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        900: {
            slidesPerView: 3
        },
        1200:{
            slidesPerView:4
        }
    }
});

function addToCart(id) {

    const selectedItem = menuItems.find(item => item.id === id);

    alert(`${selectedItem.name} added to cart!`);

}