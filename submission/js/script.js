// Feature 1: Loop-rendered dynamic content
const services = [
    { name: "Wedding Catering", description: "Professional catering services for weddings and receptions." },
    { name: "Corporate Events", description: "Food services for meetings, seminars, product launches, workshops, networking events, conferences, and business events." },
    { name: "Birthday Parties", description: "Delicious meals and snacks for birthday celebrations." }
];

const serviceContainer = document.getElementById("service-container");

services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = service.name;

    const desc = document.createElement("p");
    desc.textContent = service.description;

    card.appendChild(title);
    card.appendChild(desc);
    serviceContainer.appendChild(card);
});

// Feature 2: Dynamically add & remove elements
const addServiceBtn = document.getElementById("add-service-btn");
const newServiceInput = document.getElementById("new-service-input");

addServiceBtn.addEventListener("click", () => {
    const value = newServiceInput.value.trim();
    if (value === "") return;

    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = value;

    const desc = document.createElement("p");
    desc.textContent = "Suggested catering service.";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
        card.remove();
    });

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(removeBtn);
    serviceContainer.appendChild(card);

    newServiceInput.value = "";
});

// Feature 3: Form handling with validation feedback
const bookingForm = document.getElementById("booking-form");
const bookingFeedback = document.getElementById("booking-feedback");

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("booking-name").value.trim();
    const email = document.getElementById("booking-email").value.trim();
    const message = document.getElementById("booking-message").value.trim();

    if (name === "" || !email.includes("@") || message === "") {
        bookingFeedback.textContent = "Please fill in your name, a valid email, and event details.";
        bookingFeedback.style.color = "red";
        return;
    }

    bookingFeedback.textContent = `Thanks, ${name}! Chef Shown will contact you at ${email} soon.`;
    bookingFeedback.style.color = "green";
    bookingForm.reset();
});