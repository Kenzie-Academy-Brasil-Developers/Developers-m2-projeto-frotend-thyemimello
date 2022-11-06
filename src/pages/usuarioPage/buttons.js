import { editModal } from "./modals.js";
import { updateUser } from "./requests.js";

export const logoutFunction = () => {
  const logoutButton = document.querySelector(".logoutBtn");

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("@Token");
    window.location.href = "/src/pages/login.html";
  });
};

export const openModal = () => {
  const editButton = document.querySelector(".userEditButton");

  editButton.addEventListener("click", () => {
    editModal();
  });
};

export const editFunction = (form) => {
  const inputs = [...form];
  const editBody = {};
  inputs.forEach((input) => {
    if (input.value) {
      editBody[input.id] = input.value;
    }
  });
  updateUser(editBody);
};

