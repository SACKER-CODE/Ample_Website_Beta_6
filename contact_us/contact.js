function openTab(event, tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  const tabButtons = document.querySelectorAll(".tab");

  // Hide all tab contents
  tabs.forEach((tab) => tab.classList.remove("active"));

  // Remove active class from all tab buttons
  tabButtons.forEach((button) => button.classList.remove("active"));

  // Show the selected tab content
  document.getElementById(tabId).classList.add("active");

  // Highlight the clicked tab
  event.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the first tab as active
  openTab(event, "event-coordinators");
});
