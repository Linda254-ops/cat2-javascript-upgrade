const banner = document.getElementById("banner");
const bannerCaption = document.getElementById("bannerCaption");

banner.addEventListener("click", () => {
    bannerCaption.classList.toggle("show");
});