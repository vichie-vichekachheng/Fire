

const menu = {
    all: [],

    broth: [
        { name: "Original Mala Broth", price: 3.00, image: "https://i0.wp.com/blog.themalamarket.com/wp-content/uploads/2020/11/hot-pot-in-stainless-pot-v2.jpg?fit=800%2C600&ssl=1" },
        { name: "Tomato Broth", price: 3.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaeXRCFMZb8of9Ze-srOGKJtzaY5NS7AsDMcMkGo1eRg&s=10" },
        { name: "Mushroom Broth", price: 3.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwz9IL7lZ0VB0WQAcQ2UoD-ZmtqCc_BAzmgaTdqQVhg&s=10" },
        { name: "Sichuan Spicy Broth", price: 3.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDyLY8ZtjPENtkKIQosxLxj-Uyzb65UaxSlhnSg4rmQ&s=10" },
    ],

    signature: [
        { name: "Classic Mala Bowl", price: 8.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxsXr4qvtHDgY8i8krmdvMZ_xwlVn9lv5ZabZ3yxDAA&s=10" },
        { name: "Beef Mala Bowl", price: 9.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVlsFr_sTJpLVL2YcJufclnBQCuOnix0GCrkjtI7qC4g&s=10" },
        { name: "Seafood Mala Bowl", price: 10.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCL390Q-O-QVEWKzUZYc6QFzTryIbljs_1IAKTucdpw&s=10" },
        { name: "Tomato Mala Bowl", price: 8.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvWttg2aLM1KmRgzUmiQ0RBGYKo7NisBulZIrpdB2rQ&s=10" },
        { name: "Vegetarian Mala Bowl", price: 7.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwvxx5wfOdR3Ekf53a8jP5yFX7FD7j9YXnL4aBAbihg&s=10" },
        { name: "Extra Spicy Mala Bowl", price: 9.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUs-nS8zP8Szl8cliqZhG6OVJnTpm7YVBCkNOSofofGw&s=10" },
        { name: "Premium Mixed Mala Bowl", price: 12.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQM6zbQa0yDbbaaXclzsqr_Ofe4wkaYyL6JLR0xp-a2w&s=10" }
    ],

    meats: [
        { name: "Beef Slices", price: 2.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lckdzNG4SkjgMTiiSP5BBolpYR3eit5Pmf3BjQfi4g&s=10" },
        { name: "Fresh Shrimp", price: 3.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1Ra-9SNxs2Rv9F_64fmaBCI7dTFcNXq4FeGEft-bhg&s=10" },
        { name: "Fish Balls", price: 2.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZXdW3OVx-Uv734wIFuQHERs8Erj7cLfFxK4h_Nub4A&s=10" },
        { name: "Pork Slices", price: 2.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc71zwqpsnqQMyhlOi-Zh7E2N5z4h-UWDMBiekWVoQ0g&s=10" },
        { name: "Chicken Breast", price: 2.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2DRIQc5hw3uKx6UNGcb9gH4XiaB1uw0vA5WIamIG-g&s=10" },
        { name: "Squid Rings", price: 3.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKXeR87cGuSFEzMy4V_Mbqjw9XY8ZIQs0YBu4qUMjCg&s=10" },
        { name: "Crab Sticks", price: 2.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1R7gsPDuCHnn4H3IrNQ3Zqbi20PDQy_Nbeml31GHedw&s=10" },
        
    ],

    veggies: [
        { name: "Enoki Mushroom", price: 1.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxABR_GLnQUkVYmjoS1_DXLs5r7wAXhVgVprElcq9pQA&s=10" },
        { name: "Instant Noodles", price: 1.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsUtvRRsrioe58t__k9BF8nk3qj6YrxGfhmYSbl5MOZA&s=10" },
        { name: "Lotus Root", price: 1.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY01DhYgT9m7NnVWAQRYDO00onn0Yr-W5jAHI3jQJrHQ&s=10" },
        { name: "Bok Choy", price: 1.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0ZSERoU9fgC7X6cf5PlgbhNR_kT-QoV_ePrhZG5mAA&s=10" },
        { name: "Fresh Spinach", price: 1.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWWoNnwPy4MuA5a-_xYXKkswCApXRg5zr93IeIDLYqw&s=10" },
        { name: "Sweet Corn", price: 1.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSVXp5A2IVgQlrssNgdd0O3hp8gs2-kpMRpTTiVZCeg&s=10" },
        { name: "Potato Slices", price: 1.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwntqadfu-1pgXxgTOR6HcXRMvDvB26jcahhYgPRqAQ&s=10" }
    ],

    drinks: [
        { name: "Milk Tea", price: 2.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAS_EHbDpMuH4dYdrGoL7wLc67Cqz-t4OgqUwHp2RpSg&s=10" },
        { name: "Lemon Tea", price: 2.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDs2s0aMXP3X_N2QbVtmKlrIoqG5qMo68b-Fppj8neLg&s=10" },
        { name: "Peach Tea", price: 2.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZuhvM3T1_DEvC510XW74q2YaWWGsvhGUYDc2mGozvCg&s=10" },
        { name: "Passion Fruit Tea", price: 2.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI88v2P8vZUjYyL6utifs6CRHigFAXbweOsWhjkIJ_gw&s=10" },
        { name: "Fresh Orange Juice", price: 2.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT8jPwsdhPS58N-XUsE-4j87w5v7zoOx_-Tw2MDG2omw&s=10" },
        { name: "Coca-Cola", price: 1.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHguxuWCpApinQFedDrBG-9bAPjyoVeTSUkoS6JqO8vg&s=10" },
        { name: "Sting", price: 3.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHVRa0AlN6NP7HjDi24Geewo0EDo44wwfR2c4VMz1Wg&s=10" }
    ]
};
menu.all = [
    ...menu.broth,
    ...menu.signature,
    ...menu.meats,
    ...menu.veggies,
    ...menu.drinks
];


const displayMenu = document.getElementById('display-menu');
const filterTabs = document.getElementById('filter-tabs');

function displayItems(items) {
    displayMenu.innerHTML = items.map(item => `
        <div class="menuCard">
            <img src="${item.image}" alt="${item.name}">
            <div class="menuContent">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <button class="add-cart-btn" >Add to Cart</button>
            </div>
        </div>
    `).join('');
}

displayItems(menu.all);

filterTabs.addEventListener('click', (e) => {

    if (e.target.classList.contains('tab-btn')) {

        document.querySelector('.tab-btn.active')?.classList.remove('active');

        e.target.classList.add('active');

        const category = e.target.dataset.category;

        displayItems(menu[category]);
    }
});
