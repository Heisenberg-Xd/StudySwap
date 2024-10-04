const apiUrl = 'http://localhost:5000/api'; // Adjust if your backend URL changes
let token = '';

async function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    const response = await fetch(`${apiUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    alert(data.message);
}

async function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (data.token) {
        token = data.token;
        alert('Login successful');
        window.location.href = 'products.html'; // Redirect to products page
    } else {
        alert(data.message);
    }
}

async function addProduct() {
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;

    const response = await fetch(`${apiUrl}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, description, price })
    });

    const data = await response.json();
    alert('Product added!');
    fetchProducts(); // Refresh product list
}

async function fetchProducts() {
    const response = await fetch(`${apiUrl}/products`);
    const products = await response.json();
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        productList.appendChild(li);
    });
}

// Fetch products when on the products page
if (window.location.pathname.endsWith('products.html')) {
    fetchProducts();
}
