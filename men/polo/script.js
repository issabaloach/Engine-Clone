import { auth  , db, doc, addDoc, collection} from "../../utills/utills.js";

const products = [
    {
        title: "Polo",
        originalPrice: 2699,
        discountedPrice: 1349,
        imageUrl: "https://engine.com.pk/cdn/shop/files/MT4113-OLV_3_800x1000_crop_center.jpg?v=1721731368",
        discount: 50,
    },
    {
        title: "Polo",
        originalPrice: 1899,
        discountedPrice: 949,
        imageUrl: "https://engine.com.pk/cdn/shop/files/MT4113-BRN_1_800x1000_crop_center.jpg?v=1721731356",
        discount: 50,
    },
    {
        title: "Men Polo",
        price: 1200,
        imageUrl: "https://engine.com.pk/cdn/shop/files/MT4113-BLK_5_800x1000_crop_center.jpg?v=1721731346",
        discount: 0,
    },
    {
        title: "Men Polo",
        price: 2099,
        imageUrl: "https://engine.com.pk/cdn/shop/files/FT4108-OLV_8_800x1000_crop_center.jpg?v=1721731260",
        discount: 0,
    },
    {
        title: "Men Polo",
        price: 1300,
        imageUrl: "https://engine.com.pk/cdn/shop/files/FT4095-WHT_1_800x1000_crop_center.jpg?v=1721731135",
        discount: 0,
    },
    {
        title: "Men Polo Shirt",
        price: 2100,
        imageUrl: "https://engine.com.pk/cdn/shop/files/FT4091-BLK_1_800x1000_crop_center.jpg?v=1721731122",
        discount: 0,
    },
    {
        title: "Men Polo Shirt",
        price: 3999,
        imageUrl: "https://engine.com.pk/cdn/shop/files/FT4091-BGE_1_800x1000_crop_center.jpg?v=1721709570",
        discount: 0,
    },
    {
        title: "Men Polo Shirt",
        price: 2199,
        imageUrl: "https://engine.com.pk/cdn/shop/files/FT4091-BGE_1_800x1000_crop_center.jpg?v=1721709570",
        discount: 0,
    },
    {
        title: "Men Polo Shirt",
        price: 1899,
        imageUrl: "https://engine.com.pk/cdn/shop/files/FT4089-BLK_4_800x1000_crop_center.jpg?v=1721731106",
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

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded');
    addToCartButton.addEventListener('click', () => addToCart(product));
    iconsContainer.appendChild(addToCartButton);

    productCard.appendChild(iconsContainer);

    productGrid.appendChild(productCard);
});

async function addToCart(product) {
    const user = auth.currentUser;
    if (user) {
        const cartItemsRef = collection(db, 'carts', user.uid, 'items');
        await addDoc(cartItemsRef, {
            productName: product.title,
            quantity: 1, // or any default quantity
            price: product.discountedPrice || product.price,
            imageUrl: product.imageUrl
        });
        alert('Product added to cart');
    } else {
        alert('Please log in to add items to your cart');
    }
}

export { addToCart };