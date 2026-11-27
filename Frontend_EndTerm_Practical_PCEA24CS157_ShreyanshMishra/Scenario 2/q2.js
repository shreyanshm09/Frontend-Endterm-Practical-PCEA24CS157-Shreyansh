const themeToggle = document.getElementById("themeToggle");
const body = document.body;

let savedTheme = null;
try {
  savedTheme = localStorage.getItem("theme");
} catch (e) {

}

if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "Light mode";
}


themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");

  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";

  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch (e) {
  
  }
});