document.querySelectorAll(".load-image").forEach((item) => {
  item.addEventListener("click", (event) => {
    const href = event.target.getAttribute("href");
    const newImage = document.createElement("img");
    event.preventDefault();
    newImage.setAttribute("src", href);
    document.body.insertBefore(newImage, event.target);
    event.target.remove();
  });
});
