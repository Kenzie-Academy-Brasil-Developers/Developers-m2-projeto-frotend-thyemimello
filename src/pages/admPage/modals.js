import { createBody, editBody, editUserBody } from "./buttonAdm.js";
import { deleteDepartament, deleteUser, dismissUser, hireUser } from "./requestAdm.js";

export const createModal = (allCompanies) => {
  const body = document.querySelector("body");

  const modalBackground = document.createElement("div");
  const modalContainer = document.createElement("div");

  const modalHeader = document.createElement("div");
  const titleHeader = document.createElement("h2");
  const closeButton = document.createElement("button");

  const createForm = document.createElement("form");
  const nameInput = document.createElement("input");
  const descriptionInput = document.createElement("input");
  const companySelect = document.createElement("select");
  const submitButton = document.createElement("button");

  modalBackground.classList.add("modalBackground");
  modalContainer.classList.add("modalContainer");
  modalHeader.classList.add("modalHeader");
  createForm.classList.add("formContainer");
  submitButton.classList.add("submitButton");

  nameInput.id = "name";
  descriptionInput.id = "description";
  companySelect.id = "company_uuid";

  titleHeader.innerText = "Criar Departamento";
  closeButton.innerText = "X";

  closeButton.addEventListener("click", () => {
    modalBackground.remove();
  });

  nameInput.placeholder = "Seu nome";
  descriptionInput.placeholder = "Sua Descrição";

  const optionDefault = document.createElement("option");

  optionDefault.innerText = "Selecionar Empresa";

  companySelect.appendChild(optionDefault);

  allCompanies.forEach((departament) => {
    const option = document.createElement("option");
    option.innerText = departament.name;
    option.value = departament.uuid;
    companySelect.appendChild(option);
  });

  submitButton.innerText = "Criar Departamento";
  submitButton.type = "submit";

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    createBody(createForm);
  });

  createForm.append(nameInput, descriptionInput, companySelect);

  modalHeader.append(titleHeader, closeButton);
  modalContainer.append(modalHeader, createForm, submitButton);
  modalBackground.appendChild(modalContainer);
  body.appendChild(modalBackground);
};

export const DetailsModal = (departament, usersDepartament, allUnemployed) => {
  const body = document.querySelector("body");

  const modalBackground = document.createElement("div");
  const modalContainer = document.createElement("div");

  const modalHeader = document.createElement("div");
  const titleHeader = document.createElement("h2");
  const closeButton = document.createElement("button");

  const subHeader = document.createElement("div");
  const textContent = document.createElement("div");
  const descritpionDepartamentH3 = document.createElement("h3");
  const companieSpan = document.createElement("span");

  const inputContainer = document.createElement("div");
  const userSelect = document.createElement("select");
  const optionDefault = document.createElement("option");
  const submitButton = document.createElement("button");

  const usersContainer = document.createElement("div");

  modalBackground.classList.add("modalBackground");
  modalContainer.classList.add("modalContainer");
  modalHeader.classList.add("modalHeaderCreate");
  subHeader.classList.add("modalSubHeader");
  textContent.classList.add("textContainer");
  inputContainer.classList.add("modalInputContainer");
  usersContainer.classList.add("usersContainer");

  closeButton.innerText = "X";
  titleHeader.innerText = departament.name;
  descritpionDepartamentH3.innerText = departament.description;
  companieSpan.innerText = departament.companies.name;

  closeButton.addEventListener("click", () => {
    modalBackground.remove();
  });

  optionDefault.innerText = "Selecionar Usuário";
  userSelect.appendChild(optionDefault);

  allUnemployed.forEach((user) => {
    const option = document.createElement("option");
    option.innerText = user.username;
    option.value = user.uuid;
    userSelect.appendChild(option);
  });

  submitButton.innerText = "Contratar";

  submitButton.addEventListener("click", () => {
    hireUser(userSelect.value, departament.uuid);
  });

  usersDepartament.forEach((user) => {
    // console.log(user);
    const userCard = document.createElement("div");
    const userTitle = document.createElement("h2");
    const userLevel = document.createElement("span");
    const userCompany = document.createElement("span");
    const dismissButton = document.createElement("button");

    userCard.classList.add("userCardDetails");

    userTitle.innerText = user.username;
    userLevel.innerText = user.professional_level;
    userCompany.innerText = departament.companies.name;
    dismissButton.innerText = "Desligar";

    dismissButton.addEventListener('click', ()=> {
      dismissUser(user.uuid)
    })

    userCard.append(userTitle, userLevel, userCompany, dismissButton);

    usersContainer.appendChild(userCard);
  });

  modalHeader.append(titleHeader, closeButton);
  textContent.append(descritpionDepartamentH3, companieSpan);
  inputContainer.append(userSelect, submitButton);

  subHeader.append(textContent, inputContainer);

  modalContainer.append(modalHeader, subHeader, usersContainer);

  modalBackground.appendChild(modalContainer);
  body.appendChild(modalBackground);
};

export const editDepartamentModal = (departamnent) => {
  const body = document.querySelector("body");

  const modalBackground = document.createElement("div");
  const modalContainer = document.createElement("div");

  const modalHeader = document.createElement("div");
  const titleHeader = document.createElement("h2");
  const closeButton = document.createElement("button");

  const createForm = document.createElement("form");
  const nameInput = document.createElement("input");
  const descriptionInput = document.createElement("input");
  const submitButton = document.createElement("button");

  modalBackground.classList.add("modalBackground");
  modalContainer.classList.add("modalContainer");
  modalHeader.classList.add("modalHeader");
  createForm.classList.add("formContainer");
  submitButton.classList.add("submitButton");

  nameInput.id = "name";
  descriptionInput.id = "description";

  titleHeader.innerText = "Editar Departamento";
  closeButton.innerText = "X";

  closeButton.addEventListener("click", () => {
    modalBackground.remove();
  });

  nameInput.placeholder = "Seu nome";
  descriptionInput.placeholder = "Sua Descrição";

  submitButton.innerText = "Salvar Alterações";
  submitButton.type = "submit";

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    editBody(createForm, departamnent.uuid);
  });

  createForm.append(nameInput, descriptionInput);

  modalHeader.append(titleHeader, closeButton);
  modalContainer.append(modalHeader, createForm, submitButton);
  modalBackground.appendChild(modalContainer);
  body.appendChild(modalBackground);
};

export const deleteModal = (data) => {
  const { uuid } = data;
  const body = document.querySelector("body");

  const modalBackground = document.createElement("div");
  const modalContainer = document.createElement("div");
  const closeButton = document.createElement("button");
  const textH1 = document.createElement("h1");
  const deleteButton = document.createElement("button");

  modalBackground.classList.add("modalBackground");
  modalContainer.classList.add("modalDeleteContainer");
  deleteButton.classList.add("deleteButton");
  closeButton.classList.add("closeButton");

  closeButton.innerText = "X";
  textH1.innerText = `Realmente deseja deletar o ${data.name} e demitir seus funcionários`;

  closeButton.addEventListener("click", () => {
    modalBackground.remove();
  });

  deleteButton.innerText = "Confirmar";

  deleteButton.addEventListener("click", () => {
    deleteDepartament(uuid);
  });

  modalContainer.append(closeButton, textH1, deleteButton);
  modalBackground.appendChild(modalContainer);
  body.appendChild(modalBackground);
};

export const editUserModal = (user) => {
  const body = document.querySelector("body");

  const modalBackground = document.createElement("div");
  const modalContainer = document.createElement("div");

  const modalHeader = document.createElement("div");
  const titleHeader = document.createElement("h2");
  const closeButton = document.createElement("button");

  const createForm = document.createElement("form");
  const work = document.createElement("select");
  const workDefault = document.createElement("option");
  const presencial = document.createElement("option");
  const homeOffice = document.createElement("option");

  const level = document.createElement("select");
  const levelDefault = document.createElement("option");
  const estagio = document.createElement("option");
  const junior = document.createElement("option");
  const pleno = document.createElement("option");
  const senior = document.createElement("option");

  const submitButton = document.createElement("button");

  titleHeader.innerText = "Editar Usuário";
  closeButton.innerText = "X";

  closeButton.addEventListener("click", () => {
    modalBackground.remove();
  });

  modalBackground.classList.add("modalBackground");
  modalContainer.classList.add("modalContainer");
  modalHeader.classList.add("modalHeader");
  createForm.classList.add("formContainer");
  submitButton.classList.add("submitButton");

  work.id = "kind_of_work";
  level.id = "professional_level";

  workDefault.innerText = "Selecionar modalidade de trabalho";
  presencial.innerText = "presencial";
  homeOffice.innerText = "homeOffice";

  levelDefault.innerText = "selecionar nível profissional";
  estagio.innerText = "estágio";
  junior.innerText = "júnior";
  pleno.innerText = "pleno";
  senior.innerText = "sênior";

  workDefault.value = "";
  presencial.value = "presencial";
  homeOffice.value = "home office";

  levelDefault.value = "";
  estagio.value = "estágio";
  junior.value = "júnior";
  pleno.value = "pleno";
  senior.value = "sênior";

  submitButton.innerText = "Salvar Alterações";
  submitButton.type = "submit";

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    editUserBody(createForm, user.uuid);
  });

  work.append(workDefault, presencial, homeOffice);
  level.append(levelDefault, estagio, junior, pleno, senior);

  createForm.append(work, level);

  modalHeader.append(titleHeader, closeButton);
  modalContainer.append(modalHeader, createForm, submitButton);
  modalBackground.appendChild(modalContainer);
  body.appendChild(modalBackground);
};

export const deleteUserModal = (user) => {
  const body = document.querySelector("body");

  const modalBackground = document.createElement("div");
  const modalContainer = document.createElement("div");
  const closeButton = document.createElement("button");
  const textH1 = document.createElement("h1");
  const deleteButton = document.createElement("button");

  modalBackground.classList.add("modalBackground");
  modalContainer.classList.add("modalDeleteContainer");
  deleteButton.classList.add("deleteButton");
  closeButton.classList.add("closeButton");

  closeButton.innerText = "X";
  textH1.innerText = `Realmente deseja remover o ${user.username}?`;

  closeButton.addEventListener("click", () => {
    modalBackground.remove();
  });

  deleteButton.innerText = "Confirmar";

  deleteButton.addEventListener("click", () => {
    deleteUser(user.uuid);
  });

  modalContainer.append(closeButton, textH1, deleteButton);
  modalBackground.appendChild(modalContainer);
  body.appendChild(modalBackground);
};
