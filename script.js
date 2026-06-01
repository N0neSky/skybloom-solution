const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");

let currentLanguage = localStorage.getItem("skybloom-language") || "es";
let currentTheme = localStorage.getItem("skybloom-theme") || "light";

function applyLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-es][data-en]").forEach((element) => {
    element.textContent = element.dataset[language];
  });

  languageToggle.textContent = language === "es" ? "🇺🇸 English" : "🇪🇸 Español";
  localStorage.setItem("skybloom-language", language);
}

function applyTheme(theme) {
  currentTheme = theme;

  if (theme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    themeToggle.textContent = "🌙";
  }

  localStorage.setItem("skybloom-theme", theme);
}

languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "es" ? "en" : "es");
});

themeToggle.addEventListener("click", () => {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

applyLanguage(currentLanguage);
applyTheme(currentTheme);
