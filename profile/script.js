// Firebase initialization
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const userInfo = document.getElementById('user-info');
const logoutBtn = document.getElementById('logout-btn');

// Display user information
auth.onAuthStateChanged(user => {
    if (user) {
        userInfo.innerHTML = `
            <p><strong>Name:</strong> ${user.displayName || 'N/A'}</p>
            <p><strong>Email:</strong> ${user.email}</p>
        `;
    } else {
        userInfo.innerHTML = '<p>No user is logged in.</p>';
    }
});

// Logout functionality
logoutBtn.addEventListener('click', () => {
    auth.signOut().then(() => {
        window.location.href = '../auth/login/index.html';
    }).catch(error => {
        console.error('Error signing out:', error);
    });
});
