const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const products = document.getElementById("products");
const status = document.getElementById("status");

async function searchProducts(query) {
    status.textContent = "Loading...";
    products.innerHTML = "";

    try {
        const response = await fetch(
            `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        const electronics = data.products.filter(product =>
            ["laptops", "mobile-accessories", "tablets"].includes(product.category)
        );

        if (electronics.length === 0) {
            status.textContent = "No products found.";
            return;
        }

        status.textContent = `${electronics.length} product(s) found.`;

        products.innerHTML = electronics.slice(0, 10).map(product => `
            <div class="card">
                <img src="${product.thumbnail}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.description.slice(0, 70)}...</p>
                <p class="price">$${product.price}</p>
            </div>
        `).join("");

    } catch (error) {
        status.textContent = "Something went wrong. Please try again.";
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = input.value.trim();

    if (!query) {
        status.textContent = "Please enter a product name.";
        return;
    }

    searchProducts(query);
});