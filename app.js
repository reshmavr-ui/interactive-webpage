console.log("JS LOADED"); // ← if you don’t see this, JS is NOT loading

const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");

const home = document.getElementById("home");
const about = document.getElementById("about");

const colorBtn = document.getElementById("colorBtn");
const fetchBtn = document.getElementById("fetchBtn");
const nameInput = document.getElementById("nameInput");
const dataText = document.getElementById("dataText");

/* NAV */
homeBtn.onclick = () => {
    home.style.display = "block";
    about.style.display = "none";
};



/* BACKGROUND */
colorBtn.onclick = () => {
    const colors = ["#f5f9ff", "#ffe4e6", "#ecfeff", "#fef9c3"];
    document.body.style.background =
        colors[Math.floor(Math.random() * colors.length)];
};

const darkToggle = document.getElementById("darkToggle");

darkToggle.onclick = () => {
    document.body.classList.toggle("dark");
};


/* FETCH */
fetchBtn.onclick = async () => {
    if (!nameInput.value) {
        dataText.textContent = "⚠️ Enter your name";
        return;
    }

    dataText.textContent = "⏳ Sending...";

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nameInput.value })
    });

    const data = await res.json();
    dataText.textContent = `✅ Hello ${nameInput.value}, pleased to have you here, wanna know more, click on 'About Me'`;
};
function openModal(title) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}


