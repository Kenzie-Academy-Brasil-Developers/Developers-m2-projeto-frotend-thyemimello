import { logoutFunction } from "../usuarioPage/buttons.js";
import { departamentDetails } from "./buttonAdm.js";
import { deleteModal, deleteUserModal, editDepartamentModal, editUserModal } from "./modals.js";
import {
  getAllCompanies,
  getAllDepartaments,
  getAllDepartamentsFromCompany,
  getAllUnemployed,
  getAllUsers,
} from "./requestAdm.js";

const token = JSON.parse(localStorage.getItem("@Token"));

const allCompanies = await getAllCompanies(token);
const allUnemployed = await getAllUnemployed();

const usersList = await getAllUsers();

const allCompaniesOptions = (allCompanies) => {
  const select = document.querySelector("#departamentsSelect");

  const optionDefault = document.createElement("option");

  optionDefault.innerText = "Selecionar Empresa";

  select.appendChild(optionDefault);

  allCompanies.forEach((departament) => {
    const option = document.createElement("option");
    option.innerText = departament.name;
    option.value = departament.uuid;
    select.appendChild(option);
  });

  select.addEventListener("change", async () => {
    if (select.value == "Selecionar Empresa") {
      const departaments = await getAllDepartaments();
      displayDepartaments(departaments);
    } else {
      const selectedCompany = await getAllDepartamentsFromCompany(select.value);

      displayDepartaments(selectedCompany);
    }
  });
};

const displayDepartaments = (departamentsList) => {
  const sectionContainer = document.querySelector("#departamentsContainer");

  if (!departamentsList || departamentsList === []) {
    sectionContainer.innerHTML = "";
    const departamentCardDiv = document.createElement("div");
    const departamentName = document.createElement("h2");

    departamentName.innerText = "Empresa Sem Departamentos";

    departamentCardDiv.appendChild(departamentName);

    sectionContainer.appendChild(departamentCardDiv);
  } else {
    sectionContainer.innerHTML = "";
    departamentsList.forEach((departament) => {
      const departamentCardDiv = document.createElement("div");
      const departamentContentDiv = document.createElement("div");

      const departamentName = document.createElement("h2");
      const departamentDescription = document.createElement("span");
      const companyName = document.createElement("span");

      const buttonsContainer = document.createElement("div");
      const eyeButton = document.createElement("button");
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      const eyeImg = document.createElement("img");
      const editIMg = document.createElement("img");
      const deleteImg = document.createElement("img");

      departamentCardDiv.classList.add("departamentCard");
      departamentContentDiv.classList.add("departamentContent");
      buttonsContainer.classList.add("buttonsContainer");

      departamentName.innerText = departament.name;
      departamentDescription.innerText = departament.description;
      companyName.innerText = departament.companies.name;

      eyeImg.src = "../../img/eye.svg";
      editIMg.src = "../../img/edit.svg";
      deleteImg.src = "../../img/delete.svg";

      eyeButton.addEventListener("click", () => {
        const departamentUsers = usersList.filter((user) => {
          if (user.department_uuid === departament.uuid) {
            return user;
          }
        });
        departamentDetails(departament, departamentUsers, allUnemployed);
      });

      editButton.addEventListener("click", () => {
        editDepartamentModal(departament);
      });
      deleteButton.addEventListener("click", () => {
        deleteModal(departament);
      });

      eyeButton.appendChild(eyeImg);
      editButton.appendChild(editIMg);
      deleteButton.appendChild(deleteImg);

      buttonsContainer.append(eyeButton, editButton, deleteButton);

      departamentContentDiv.append(
        departamentName,
        departamentDescription,
        companyName
      );

      departamentCardDiv.append(departamentContentDiv, buttonsContainer);

      sectionContainer.appendChild(departamentCardDiv);
    });
  }
};

const displayAllUsers = (users) => {
  const sectionUser = document.querySelector("#userContainer");

  users.forEach((user) => {
    const userCard = document.createElement("div");
    const userContent = document.createElement("div");
    const userName = document.createElement("h2");
    const userLevel = document.createElement("span");
    const userCompany = document.createElement("span");

    const buttonsContainer = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const editIMg = document.createElement("img");
    const deleteImg = document.createElement("img");

    userCard.classList.add("userCard");
    userContent.classList.add("userContent");
    buttonsContainer.classList.add("buttonsContainer");

    userName.innerText = user.username;
    userLevel.innerText = user.professional_level;
    // userCompany.innerText = user.username;

    editIMg.src = "../../img/edit.svg";
    deleteImg.src = "../../img/delete.svg";

    editButton.appendChild(editIMg);
    deleteButton.appendChild(deleteImg);

    editButton.addEventListener("click", () => {
      editUserModal(user)
    });
    deleteButton.addEventListener("click", () => {
      deleteUserModal(user)
    });

    buttonsContainer.append(editButton, deleteButton);

    userContent.append(userName, userLevel);

    userCard.append(userContent, buttonsContainer);

    sectionUser.appendChild(userCard);
  });
};

allCompaniesOptions(allCompanies);
displayDepartaments();
displayAllUsers(usersList);
logoutFunction();
