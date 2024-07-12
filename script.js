const userList = document.getElementById("user-list");
const addButton = document.getElementById("btn-add");

function renderUsers() {
  userList.innerHTML = "";
  users.forEach((user) => {
    const userItem = document.createElement("div");
    userItem.classList.add("user-item");
    userItem.textContent = user.name;
    userList.appendChild(userItem);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderUsers();
});

addButton.addEventListener("click", function () {
  const newName = prompt("Ingrese el nombre del nuevo usuario:");
  if (newName) {
    const newUser = {
      id: users.length + 1,
      name: newName,
    };
    users.push(newUser);
    renderUsers();
  }
});
