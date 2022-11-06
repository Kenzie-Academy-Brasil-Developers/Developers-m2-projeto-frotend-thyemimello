export const baseUrl = "http://127.0.0.1:5500/"

export function getLogin() {
    const buttonLogin = document.querySelector(".button_login_homepage")
    console.log(buttonLogin)

    buttonLogin.addEventListener("click", function () {
        window.location.href = `${baseUrl}src/pages/login.html`
    })

}

export function getRegister() {
    const buttonRegister = document.querySelector(".button_register")



    buttonRegister.addEventListener("click", function () {
        window.location.href = `${baseUrl}src/pages/register.html`

    })
}

export function getHomePage() {
    const buttonHome = document.querySelector(".button_homepage")



    buttonHome.addEventListener("click", function () {
        window.location.href = `${baseUrl}/index.html`

    })
}