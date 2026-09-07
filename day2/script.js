const products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Mobile", price: 20000, category: "Electronics" },
    { name: "Shoes", price: 1500, category: "Fashion" },
    { name: "Watch", price: 2500, category: "Fashion" },
    { name: "Headphones", price: 3000, category: "Electronics" }
];

const calculateTotal = (items) =>
    items.reduce((total, product) => total + product.price, 0);

const { name, price } = products[0];

const newProducts = [
    ...products,
    { name: "Tablet", price: 15000, category: "Electronics" }
];

const displayProducts = () => {
    document.getElementById("products").innerHTML =
        newProducts.map(product =>
            `<p>${product.name} - ₹${product.price} - ${product.category}</p>`
        ).join("");

    document.getElementById("total").textContent =
        `Total Price: ₹${calculateTotal(products)}`;

    console.log("First Product:", name);
    console.log("First Product Price:", price);
};

displayProducts();