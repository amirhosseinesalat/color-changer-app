const boxes = document.querySelectorAll(".parent article");
let redBtn = document.querySelector(".red-btn");
const randomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let newColor = randomColor();
    box.style.backgroundColor = newColor;
    box.querySelector("span").textContent = newColor;
  });

  let redBtn = box.querySelector(".red-btn");
  let greenBtn = box.querySelector(".green-btn");

  if (redBtn) {
    redBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      box.style.backgroundColor = "red";
      box.querySelector("span").textContent = "#ff0000";
    });
  }

  if (greenBtn) {
    greenBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      box.style.backgroundColor = "green";
      box.querySelector("span").textContent = "#008000";
    });
  }
});
