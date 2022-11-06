import { logoutFunction, openModal } from "./buttons.js";
import {
  getDepartamentCoWorkers,
  getDepartamentFromUser,
  getUserProfile,
} from "./requests.js";

const token = JSON.parse(localStorage.getItem("@Token"));

const user = await getUserProfile(token);
const departamentInfo = await getDepartamentFromUser(token);
const coworkers = await getDepartamentCoWorkers(token);

const displayUser = (user) => {
  const userContent = document.querySelector(".userContent");
  const userInfoDiv = document.querySelector(".userInfoDiv");

  const username = document.createElement("h1");
  const spanEmail = document.createElement("span");
  const spanSenioridade = document.createElement("span");
  const spanWorkPlace = document.createElement("span");

  username.innerText = user.username;
  spanEmail.innerText = user.email;
  spanSenioridade.innerText = user.professional_level || "Null";
  spanWorkPlace.innerText = user.kind_of_work || "Null";

  userInfoDiv.append(spanEmail, spanSenioridade, spanWorkPlace);
  userContent.append(username, userInfoDiv);
};

const displayCompanyName = (departamentInfo) => {
  const mainHeader = document.querySelector("#mainHeader");

  const companyName = document.createElement("h2");

  companyName.innerText = `${departamentInfo.name} - `;

  departamentInfo.departments.forEach((departament) => {
    companyName.innerText += ` ${departament.name} /`;
  });

  companyName.innerText = companyName.innerText.substring(
    0,
    companyName.innerText.length - 1
  );

  mainHeader.appendChild(companyName);
};

const displayCoWorkers = (coWorksList) => {
  const cardsContainer = document.querySelector("#containerCards");
  coWorksList.users.forEach((coWork) => {
    console.log(coWork);
    const card = document.createElement("div");
    const h3Name = document.createElement("h3");
    const spanLevel = document.createElement("span");

    card.classList.add("card");

    h3Name.innerText = coWork.username;
    spanLevel.innerText = coWork.professional_level;

    card.append(h3Name, spanLevel);
    cardsContainer.appendChild(card);
  });
};

if (coworkers[0]) {
  displayCoWorkers(coworkers[0]);
}

if (!departamentInfo.error) {
  displayCompanyName(departamentInfo);
} else {
  const main = document.querySelector("#main");
  main.innerHTML = "";

  const box = document.createElement("div");
  const text = document.createElement("h1");

  box.classList.add("boxContainer");

  text.innerText = "Você ainda não foi contratado";

  box.appendChild(text);
  main.appendChild(box);
}

displayUser(user);
logoutFunction()
openModal()
