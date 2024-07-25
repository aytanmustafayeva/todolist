const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const icon = document.querySelector("i");
const inputIcon = document.querySelector(".input-parent i");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") return;
  const myli = document.createElement("li");
  const icon = document.createElement("i");

  icon.classList.add("fa-regular", "fa-circle-xmark");
  icon.onclick = function () {
    myli.remove();
  };
  myli.textContent = input.value;
  ul.append(myli);
  myli.append(icon);
  input.value = "";
});

inputIcon.addEventListener("click", () => {
  input.value = "";
});
