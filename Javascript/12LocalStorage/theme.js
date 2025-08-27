  const btn = document.getElementById("theme-toggle");
    const root = document.documentElement;

    // Load saved theme from localStorage (if any)
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      root.setAttribute("data-theme", savedTheme);
      btn.textContent = savedTheme === "dark" ? "Light Mode" : "Dark Mode";
    }

    // Toggle theme on button click
    btn.addEventListener("click", () => {
      const currentTheme = root.getAttribute("data-theme");

      if (currentTheme === "dark") {
        root.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        btn.textContent = "Dark Mode";
      } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        btn.textContent = "Light Mode";
      }
    });