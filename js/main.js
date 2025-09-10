// js/main.js
document.addEventListener("DOMContentLoaded", function () {
  // Admin override (you only)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('admin') === 'true') {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", "admin");
    localStorage.setItem("userEmail", "admin@wiseworx.digital");
  }

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userRole = localStorage.getItem("userRole") || "user";

  // Update UI based on login
  const nav = document.querySelector(".nav");
  if (isLoggedIn) {
    if (!document.querySelector('.logout-btn')) {
      const logoutBtn = document.createElement('a');
      logoutBtn.href = "#";
      logoutBtn.textContent = "Logout";
      logoutBtn.className = "logout-btn";
      logoutBtn.onclick = logout;
      nav.appendChild(logoutBtn);
    }
  }

  function logout() {
    localStorage.clear();
    alert("Logged out.");
    window.location.href = "index.html";
  }
});
