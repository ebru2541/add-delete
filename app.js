const input = document.querySelector("input");
const add = document.querySelector(".add");
const del = document.querySelector(".del");
const ul = document.querySelector("ul");
console.log(ul);

add.addEventListener("click", () => {
  if (!input.value) {
    alert("please enter a language");
  } else {
    ul.innerHTML += `<li>${input.value}</li>`;
    document.querySelector(".box1").classList.remove("d-none");
    input.value = "";
    input.focus();
  }
});

del.addEventListener("click", () => {
  if (!ul.children) {
    alert("silinecek veri yok");
  } else {
    ul.removeChild(ul.lastElementChild);
    if (ul.childElementCount == 0) {
      ul.parentElement.classList.add("d-none");
    }
  }
  input.focus();
});

input.addEventListener("keydown", (event) => {
  if (event.code === "Delete") {
    del.click();
  } else if (event.code === "Enter") {
    add.click();
  }
});
