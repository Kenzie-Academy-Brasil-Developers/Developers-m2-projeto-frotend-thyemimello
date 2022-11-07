import { getLogin, baseUrl, getHomePage } from "./button.js";
import { registerUser } from "./request.js";

const userRegister = () => {
  const registerBtn = document.querySelector("#registerBtn");
  const form = document.querySelector("form");
  const elements = [...form.elements];

  registerBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const tagBody = {};

    elements.forEach((element) => {
      if (element.tagName == "INPUT" && element.value !== "") {
        tagBody[element.id] = element.value;
      }
    });
    await registerUser(tagBody);
  });
};

const buttonHome = document.querySelector("#button_homepage");

buttonHome.addEventListener("click", function () {
  window.location.href = `${baseUrl}/index.html`;
});

getLogin();
getHomePage();
userRegister();
