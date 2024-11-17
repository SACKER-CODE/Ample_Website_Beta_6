// Function to check if the element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const popOutText = document.querySelector(".pop-out");

  if (isElementInViewport(popOutText)) {
    popOutText.classList.add("show");
  }
}

// Add the scroll event listener
window.addEventListener("scroll", handleScroll);
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.4)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  });
});

document.getElementById("hamburger").addEventListener("click", function () {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("active");
  this.classList.toggle("active");
});
