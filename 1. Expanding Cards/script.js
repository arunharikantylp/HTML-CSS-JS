const panels = document.querySelectorAll(".panel");
console.log(panels);
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeAllActiveClasses();
    panel.classList.add("active");
  });
});

removeAllActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
