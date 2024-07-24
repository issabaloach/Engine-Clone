const products = [
    {
        title: "Women Tees",
        originalPrice: 2699,
        discountedPrice: 1349,
        imageUrl: "https://engine.com.pk/cdn/shop/files/lt4043-yel_5_800x1000_crop_center.jpg?v=1721734155",
        discount: 50,
    },
    {
        title: "Women Tees",
        originalPrice: 1899,
        discountedPrice: 949,
        imageUrl: "https://engine.com.pk/cdn/shop/files/lt4042-pnk_1_800x1000_crop_center.jpg?v=1721734096",
        discount: 50,
    },
    {
        title: "Women Tees",
        price: 1200,
        imageUrl: "https://engine.com.pk/cdn/shop/files/lt4042-grn_1_800x1000_crop_center.jpg?v=1721734049",
        discount: 0,
    },
    {
        title: "Women Tees",
        price: 2099,
        imageUrl: "https://engine.com.pk/cdn/shop/files/lt4036-rst_1_800x1000_crop_center.jpg?v=1721734005",
        discount: 0,
    },
    {
        title: "Women Tees",
        price: 1300,
        imageUrl: "https://engine.com.pk/cdn/shop/files/flt254-min_1_800x1000_crop_center.jpg?v=1721732874",
        discount: 0,
    },
    {
        title: "Women Tees",
        price: 2100,
        imageUrl: "https://engine.com.pk/cdn/shop/files/flt249-crl_1_800x1000_crop_center.jpg?v=1721732763",
        discount: 0,
    },
    {
        title: "Women Tees",
        price: 3999,
        imageUrl: "https://engine.com.pk/cdn/shop/files/LT4034-RST_2_800x1000_crop_center.jpg?v=1719558471",
        discount: 0,
    },
    {
        title: "Women Tees",
        price: 2199,
        imageUrl: "https://engine.com.pk/cdn/shop/files/FLT240-RED_2_800x1000_crop_center.jpg?v=1718271413",
        discount: 0,
    },
    {
        title: "Women Tees",
        price: 1899,
        imageUrl: "https://engine.com.pk/cdn/shop/files/Untitled-1_085c21be-69cf-4280-a409-4306d55958e4_800x1000_crop_center.png?v=1719301457",
        discount: 0,
    }

];

const productGrid = document.getElementById('product-grid');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-lg', 'relative');

    const productImage = document.createElement('img');
    productImage.src = product.imageUrl;
    productImage.classList.add('w-full', 'h-auto', 'mb-4');
    productCard.appendChild(productImage);

    if (product.discount > 0) {
        const discountBadge = document.createElement('div');
        discountBadge.textContent = `-${product.discount}%`;
        discountBadge.classList.add('absolute', 'top-2', 'right-2', 'bg-red-500', 'text-white', 'px-2', 'py-1', 'rounded');
        productCard.appendChild(discountBadge);
    }

    const productTitle = document.createElement('h3');
    productTitle.textContent = product.title;
    productTitle.classList.add('text-lg', 'font-semibold', 'mb-2');
    productCard.appendChild(productTitle);

    if (product.discount > 0) {
        const originalPrice = document.createElement('span');
        originalPrice.textContent = `Rs.${product.originalPrice}.00`;
        originalPrice.classList.add('text-gray-500', 'line-through', 'mr-2');
        productCard.appendChild(originalPrice);

        const discountedPrice = document.createElement('span');
        discountedPrice.textContent = `Rs.${product.discountedPrice}.00`;
        discountedPrice.classList.add('text-red-500', 'font-semibold');
        productCard.appendChild(discountedPrice);
    } else {
        const price = document.createElement('span');
        price.textContent = `Rs.${product.price}.00`;
        price.classList.add('text-gray-800', 'font-semibold');
        productCard.appendChild(price);
    }

    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('flex', 'justify-between', 'mt-4');

    const heartIcon = document.createElement('button');
    heartIcon.innerHTML = `<svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 9l-4 4-2-2"></path></svg>`;
    iconsContainer.appendChild(heartIcon);

    const eyeIcon = document.createElement('button');
    eyeIcon.innerHTML = `<svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 9l-4 4-2-2"></path></svg>`;
    iconsContainer.appendChild(eyeIcon);

    productCard.appendChild(iconsContainer);

    productGrid.appendChild(productCard);
});
