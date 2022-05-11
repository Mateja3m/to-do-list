// Get elements

const inputField = document.querySelector("#input-field");
const btn = document.querySelector("#btn");
const tasks = document.querySelector("#tasks");

// Added eventListener to create new to do's
btn.addEventListener("click", function (index) {
  if (inputField.value.length === 0) {
    alert("Please Enter a Task");
  } else {
    tasks.innerHTML += `
    <li class='list-group-item items'>
    ${inputField.value} 
    <span class="close">x</span>
    </li>`;
    let currentTasks = document.querySelectorAll(".close");
    for (let i = 0; i < currentTasks.length; i++) {
      currentTasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
});
