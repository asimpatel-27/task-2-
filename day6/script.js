const productsContainer = document.getElementById("products");

const loadProducts = async () => {
    try {
        productsContainer.innerHTML = "<p>Loading TV products...</p>";

        const response = await fetch(
            "https://dummyjson.com/products/category/mobile-accessories"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch products.");
        }

        const data = await response.json();

        const tvProducts = data.products.filter(product =>
            product.title.toLowerCase().includes("tv") ||
            product.description.toLowerCase().includes("tv")
        );

        if (tvProducts.length === 0) {
            productsContainer.innerHTML =
                "<p>No TV products found.</p>";
            return;
        }

        productsContainer.innerHTML = tvProducts
            .map(
                product => `
                    <article class="card">
                        <img
                            src="${product.thumbnail}"
                            alt="${product.title}"
                        >

                        <h2>${product.title}</h2>

                        <p>${product.description}</p>

                        <p class="price">
                            Price: ₹${product.price}
                        </p>
                    </article>
                `
            )
            .join("");

    } catch (error) {
        productsContainer.innerHTML =
            "<p>Unable to load TV products.</p>";

        console.error(error);
    }
};

loadProducts();