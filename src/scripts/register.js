import { getLogin, baseUrl, getHomePage } from "./button.js"
import { registerUser } from "./request.js"

const userRegister = () => {
    const form = document.querySelector("form")
    const elements = [...form.elements]

    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        const tagBody = {}

        elements.forEach((element) => {
            if (element.tagName == "INPUT" && element.value !== "") {
                tagBody[element.id] = element.value
            }
        })
        await registerUser(tagBody)
    })
}

getLogin()
getHomePage()
userRegister()

