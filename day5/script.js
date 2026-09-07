const button = document.getElementById("loadBtn");
const result = document.getElementById("result");

function delayedAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve("Data loaded successfully!");
            } else {
                reject("API request failed!");
            }
        }, 2000);
    });
}

async function getData() {
    result.textContent = "Loading...";

    try {
        const data = await delayedAPI();
        result.textContent = data;
    } catch (error) {
        result.textContent = error;
    }
}

button.addEventListener("click", getData);