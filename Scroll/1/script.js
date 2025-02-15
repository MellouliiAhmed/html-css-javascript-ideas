document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(".progress-bar");

  if (!progressBar) {
    console.error("Progress bar element not found!");
    return;
  }

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrolled = (scrollTop / height) * 100;
    progressBar.style.width = `${scrolled}%`;
  });
});
