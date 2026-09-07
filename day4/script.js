const products = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    },
    {
        name: "Mouse",
        price: 800,
        category: "Electronics"
    },
    {
        name: "Keyboard",
        price: 1500,
        category: "Electronics"
    },
    {
        name: "Notebook",
        price: 300,
        category: "Stationery"
    },
    {
        name: "Bag",
        price: 1200,
        category: "Accessories"
    }
];

const affordableProducts = products.filter(
    product => product.price < 1000
);

const productNames = affordableProducts.map(
    product => product.name
);

const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

const electronicsProduct = products.find(
    product => product.category === "Electronics"
);

products.forEach(product => {
    console.log(`${product.name} - ₹${product.price}`);
});

console.log(
    `Category: ${electronicsProduct?.category}`
);

console.log("Products under ₹1000:", affordableProducts);
console.log("Product Names:", productNames);
console.log("Total Price: ₹" + totalPrice);
console.log("First Electronics Product:", electronicsProduct);