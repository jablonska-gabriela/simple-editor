import "../scss/main.scss";

const textarea = document.querySelector(".main__textarea");
const save = document.querySelector(".save--js");
const load = document.querySelector(".load--js");

save.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("textarea", textarea.value);
});
load.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem("textarea");
});
console.log('hello');


