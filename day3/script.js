const form = document.getElementById("userForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;

    message.textContent = `Hello ${name}! Your email is ${email}.`;
});