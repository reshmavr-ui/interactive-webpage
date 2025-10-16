// 🎨 Change background color
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
    const colors = ["#f5f9ff", "#ffe8e8", "#e8fff1", "#fff6e8", "#e8e8ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// 👋 Greet the user
const greetBtn = document.getElementById("greetBtn");
greetBtn.addEventListener("click", () => {
    const name = document.getElementById("nameInput").value.trim();
    const greetingText = document.getElementById("greetingText");

    if (name) {
        greetingText.textContent = `Hello, ${name}! 👋 Hope you're having a great day!`;
    } else {
        greetingText.textContent = "Please enter your name first 😊";
    }
});
