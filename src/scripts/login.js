import { getRegister, getHomePage } from "./button.js";
import { loginUser } from "./request.js";

const userLogin = () => {
  const form = document.querySelector("form");
  const elements = [...form.elements];

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const tagBody = {};

    elements.forEach((element) => {
      if (element.tagName == "INPUT" && element.value !== "") {
        tagBody[element.id] = element.value;
      }
    });
    console.log(tagBody);
    await loginUser(tagBody);
  });
};

getRegister();
getHomePage();
userLogin();
