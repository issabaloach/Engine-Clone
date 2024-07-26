import {
    auth,
    db,
    storage,
    onAuthStateChanged,
    signOut,
    doc,
    getDoc,
    getDocs,
    ref,
    getDownloadURL,
    collection,
    deleteDoc
} from "../utills/utills.js";

// Elements
const userInfo = document.getElementById('user-info');
const logout = document.getElementById("logout-btn");
const cartItems = document.getElementById('cart-items');




// Display user information
onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
  
      if (userSnap.exists()) {
        const userData = userSnap.data();
        let profilePicURL = 'default-image-url';
  
        // Get the image from Firebase Storage
        const storageRef = ref(storage, `users/${user.uid}/image`);
        try {
          profilePicURL = await getDownloadURL(storageRef);
        } catch (error) {
          console.error('Error getting profile picture:', error);
        }
  
        userInfo.innerHTML = `
          <div>
            <img src="${userData.imageUrl}" alt="Profile Picture" width="100" height="100">
          </div>
          <div>
            <p><strong>Name:</strong> ${userData.firstName || 'N/A'}</p>
            <p><strong>Email:</strong> ${user.email}</p>
          </div>
        `;
  
        // Fetch and display cart items
        fetchCartItems(user.uid);
      }
    } else {
      window.location.href = "../auth/login/index.html"; // Redirect to login if no user is logged in
    }
  });
// Logout functionality
logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = '/';
    }).catch(error => {
        console.error('Error signing out:', error);
    });
});

// Fetch and display cart items from Firestore
async function fetchCartItems(userId) {
    const cartItemsRef = collection(db, 'carts', userId, 'items');
    const querySnapshot = await getDocs(cartItemsRef);

    if (querySnapshot.empty) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        const itemsMap = new Map();

        querySnapshot.forEach(doc => {
            const item = doc.data();
            if (itemsMap.has(item.imageUrl)) {
                const existingItem = itemsMap.get(item.imageUrl);
                existingItem.quantity += item.quantity;
            } else {
                itemsMap.set(item.imageUrl, { ...item, id: doc.id });
            }
        });

        let itemsHTML = '';
        itemsMap.forEach((item, key) => {
            itemsHTML += `
                <div class="grid grid-cols-3 gap-4 mb-4">
                    <img src="${item.imageUrl}" alt="${item.productName}" width="100" height="150">
                    <div>
                        <p><strong>Product:</strong> ${item.productName}</p>
                        <p><strong>Quantity:</strong> ${item.quantity}</p>
                        <p><strong>Price:</strong> Rs.${item.price}.00</p>
                        <button onclick="removeFromCart('${userId}', '${item.id}')">Delete</button>
                    </div>
                </div>
            `;
        });

        cartItems.innerHTML = itemsHTML;
    }
}

// Remove item from cart
async function removeFromCart(userId, itemId) {
    try {
        await deleteDoc(doc(db, 'carts', userId, 'items', itemId));
        fetchCartItems(userId);
    } catch (error) {
        console.error('Error removing item from cart:', error);
    }
}

export { fetchCartItems, removeFromCart };
