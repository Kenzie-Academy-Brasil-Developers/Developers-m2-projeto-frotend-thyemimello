import { logoutFunction } from "../usuarioPage/buttons.js";
import { createModal, DetailsModal } from "./modals.js";
import {
  createDepartament,
  editDepartament,
  editUser,
  getAllCompanies,
} from "./requestAdm.js";

const token = JSON.parse(localStorage.getItem("@Token"));

const allCompanies = await getAllCompanies(token);

const createButton = document.querySelector("#createButton");

createButton.addEventListener("click", () => {
  createModal(allCompanies);
});

export const departamentDetails = (
  departament,
  usersDepartament,
  allUnemployed
) => {
  DetailsModal(departament, usersDepartament, allUnemployed);
};

export const createBody = (form) => {
  const inputs = [...form];
  const createBody = {};
  inputs.forEach((input) => {
    if (input.value) {
      createBody[input.id] = input.value;
    }
  });
  createDepartament(createBody);
};

export const editBody = (form, uuid) => {
  const inputs = [...form];
  const createBody = {};
  inputs.forEach((input) => {
    if (input.value) {
      createBody[input.id] = input.value;
    }
  });
  editDepartament(uuid, createBody);
};

logoutFunction();

export const editUserBody = (form, uuid) => {
  const inputs = [...form];
  const createBody = {};
  inputs.forEach((input) => {
    if (input.value) {
      createBody[input.id] = input.value;
    }
  });
  editUser(uuid, createBody);
};

logoutFunction();
