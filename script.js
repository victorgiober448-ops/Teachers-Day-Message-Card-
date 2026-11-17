const card = document.getElementById("greetingCard");
const openButton = document.getElementById("openCard");
const closeButton = document.getElementById("closeCard");
const hint = document.getElementById("hint");
const themeToggle = document.getElementById("themeToggle");

openButton.addEventListener("click", () => {
  card.classList.add("open");
  hint.textContent = "A message of appreciation, just for you.";
});

closeButton.addEventListener("click", () => {
  card.classList.remove("open");
  hint.textContent = "Tap “Open your letter” to read your message.";
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkMode = document.body.classList.contains("dark");
  themeToggle.innerHTML = darkMode ? "☀ <span>Change theme</span>" : "☾ <span>Change theme</span>";
  document.querySelector('meta[name="theme-color"]').setAttribute("content", darkMode ? "#211521" : "#f7a8c8");
});
