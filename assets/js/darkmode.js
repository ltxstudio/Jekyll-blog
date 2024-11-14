document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  const root = document.documentElement;

  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") root.classList.add("dark");

  toggle.addEventListener("click", function () {
    root.classList.toggle("dark");
    if (root.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
