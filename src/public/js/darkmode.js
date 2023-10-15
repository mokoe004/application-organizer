let darkBtn = document.getElementById("darkBtn"); 
let lightBtn = document.getElementById("lightBtn");

if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    console.log("Darkmode activated");
    document.documentElement.classList.add("dark");
    darkBtn.classList.remove("hidden");
  }

darkBtn.onclick = () => {
    document.documentElement.classList.remove("dark");
    darkBtn.classList.add("hidden");
    lightBtn.classList.remove("dark:hidden");
};

lightBtn.onclick = () => {
    document.documentElement.classList.add("dark");
    lightBtn.classList.add("dark:hidden");
    darkBtn.classList.remove("hidden");
};