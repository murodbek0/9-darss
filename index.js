
const name = document.querySelector("#name");
const container = document.querySelector(".container");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const year = document.querySelector("#year")
const button = document.querySelector("#button");
const body = document.querySelector("body");
const form = document.querySelector("form");
const input = document.querySelector(".input");
const forms = document.querySelector(".forms")
console.log(input);
console.log(form);
function createCard(info) {
  return `
    <div class="card">
            <h2>${info.name}</h2>
            <h2>${info.surname}</h2>
            <h2>${info.email}</h2>
            <h2>${info.age}</h2>
            <h2>${info.year}</h2>
            
        </div>
        
      `;
}
button.addEventListener("click", function (event) {
  event.preventDefault();

  let info = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    age:age.value,
    year:year.value
  };
  let item = createCard(info);
  console.log(info);
  input.innerHTML += item;
});