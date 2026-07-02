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