const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  // .toggle("active") 切換活動
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

setInterval(() => {
  let topBackground = document.querySelector("section.backgroud-img");
  let currentBackgroundImage = getComputedStyle(topBackground).backgroundImage;

  if (
    currentBackgroundImage.includes(
      "big-round-table-with-different-side-dishes-it-with-soup-middle.jpg"
    )
  ) {
    topBackground.style.backgroundImage =
      'url("./photo/happy-family-havinf-dinner-together.jpg")';
  } else if (
    currentBackgroundImage.includes("happy-family-havinf-dinner-together.jpg")
  ) {
    topBackground.style.backgroundImage =
      'url("./photo/big-round-table-with-different-side-dishes-it-with-soup-middle.jpg")';
  }
}, 3000);
