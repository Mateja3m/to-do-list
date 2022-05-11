// Get elements

const inputField = document.querySelector("#input-field");
const btn = document.querySelector("#btn");
const tasks = document.querySelector("#tasks");


// Added eventListener to create new to do's
btn.addEventListener("click", function() {
  if (inputField.value.length === 0) {
    alert("Please Enter a Task");
  } else {
    tasks.innerHTML += `
    <li class='list-group-item items'>
     ${inputField.value} 
    <span class="close">x</span>
    </li>`;
    let current_tasks = document.querySelectorAll(".close");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
});
