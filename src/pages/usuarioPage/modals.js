import { editFunction } from "./buttons.js";

export const editModal = () => {
  const body = document.querySelector("body");

  const modalBackground = document.createElement("div");
  const modalContainer = document.createElement("div");

  const modalHeader = document.createElement("div");
  const titleHeader = document.createElement("h2");
  const closeButton = document.createElement("button");

  const editForm = document.createElement("form");
  const nameInput = document.createElement("input");
  const emailInput = document.createElement("input");
  const passwordInput = document.createElement("input");
  const submitButton = document.createElement("button");

  modalBackground.classList.add("modalBackground");
  modalContainer.classList.add("modalContainer");
  modalHeader.classList.add("modalHeader");
  editForm.classList.add("formContainer");
  submitButton.classList.add("submitButton");

  nameInput.id = "username";
  emailInput.id = "email";
  passwordInput.id = "password";

  titleHeader.innerText = "Editar Perfil";
  closeButton.innerText = "X";

  closeButton.addEventListener("click", () => {
    modalBackground.remove();
  });

  nameInput.placeholder = "Seu nome";
  emailInput.placeholder = "Seu Email";
  passwordInput.placeholder = "Sua Senha";

  submitButton.innerText = "Editar Perfil";
  submitButton.type = "submit";

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    editFunction(editForm);
  });

  editForm.append(nameInput, emailInput, passwordInput);

  modalHeader.append(titleHeader, closeButton);
  modalContainer.append(modalHeader, editForm, submitButton);
  modalBackground.appendChild(modalContainer);
  body.appendChild(modalBackground);
};

export const createModal = () => {
  const body = document.querySelector("body");

  const modalBackground = document.createElement("div");
  const modalContainer = document.createElement("div");

  const modalHeader = document.createElement("div");
  const titleHeader = document.createElement("h2");
  const closeButton = document.createElement("button");

  const editForm = document.createElement("form");
  const nameInput = document.createElement("input");
  const emailInput = document.createElement("input");
  const passwordInput = document.createElement("input");
  const submitButton = document.createElement("button");

  modalBackground.classList.add("modalBackground");
  modalContainer.classList.add("modalContainer");
  modalHeader.classList.add("modalHeader");
  editForm.classList.add("formContainer");
  submitButton.classList.add("submitButton");

  nameInput.id = "username";
  emailInput.id = "email";
  passwordInput.id = "password";

  titleHeader.innerText = "Editar Perfil";
  closeButton.innerText = "X";

  closeButton.addEventListener("click", () => {
    modalBackground.remove();
  });

  nameInput.placeholder = "Seu nome";
  emailInput.placeholder = "Seu Email";
  passwordInput.placeholder = "Sua Senha";

  submitButton.innerText = "Editar Perfil";
  submitButton.type = "submit";

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    editFunction(editForm);
  });

  editForm.append(nameInput, emailInput, passwordInput);

  modalHeader.append(titleHeader, closeButton);
  modalContainer.append(modalHeader, editForm, submitButton);
  modalBackground.appendChild(modalContainer);
  body.appendChild(modalBackground);
};
