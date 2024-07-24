const products = [
    {
        title: "Basic Casual Shirt",
        originalPrice: 2699,
        discountedPrice: 1349,
        imageUrl: "https://engine.com.pk/cdn/shop/products/FC3077-BLU_1_800x1000_crop_center.jpg?v=1686742999",
        discount: 50,
    },
    {
        title: "Casual Shirt",
        originalPrice: 1899,
        discountedPrice: 949,
        imageUrl: "https://engine.com.pk/cdn/shop/products/FC3085-FRZ_2_b1f99b93-6595-4d68-ae9b-01837bac6ac3_800x1000_crop_center.jpg?v=1690795277",
        discount: 50,
    },
    {
        title: "Casual Shirt",
        price: 1200,
        imageUrl: "https://engine.com.pk/cdn/shop/products/FC3083-RED_2_800x1000_crop_center.jpg?v=1689337746",
        discount: 0,
    },
    {
        title: "Casual Shirt",
        price: 2099,
        imageUrl: "https://engine.com.pk/cdn/shop/products/FC3100-BLK_2_800x1000_crop_center.jpg?v=1700633473",
        discount: 0,
    },
    {
        title: "Casual Shirt",
        price: 1300,
        imageUrl: "https://engine.com.pk/cdn/shop/products/MC3111-BGE_2_800x1000_crop_center.jpg?v=1700224248",
        discount: 0,
    },
    {
        title: "Casual Shirt",
        price: 2100,
        imageUrl: "https://engine.com.pk/cdn/shop/products/MC3034-LLC_2_800x1000_crop_center.jpg?v=1677482024",
        discount: 0,
    },
    {
        title: "Casual Shirt",
        price: 3999,
        imageUrl: "https://engine.com.pk/cdn/shop/products/MC3057-MST_2_800x1000_crop_center.jpg?v=1686219122",
        discount: 0,
    },
    {
        title: "Casual Shirt",
        price: 2199,
        imageUrl: "https://engine.com.pk/cdn/shop/products/MC3095-GRN_1_800x1000_crop_center.jpg?v=1694432945",
        discount: 0,
    },
    {
        title: "Casual Shirt",
        price: 1899,
        imageUrl: "https://engine.com.pk/cdn/shop/products/MC3076-NVY_2_800x1000_crop_center.jpg?v=1689664785",
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
