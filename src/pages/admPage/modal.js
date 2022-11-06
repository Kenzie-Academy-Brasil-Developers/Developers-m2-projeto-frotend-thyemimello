// import { deleteDepartamentApi } from "./requestAdm.js"

export function deleteModalDepartament(uuid) {

    const body = document.querySelector("body")
    body.innerHTML = ""

    // deleteModal.forEach(element => {
    //     console.log(element)

    const divModal = document.createElement("div")
    const p = document.createElement("p")
    const h2 = document.createElement("h2")
    const form = document.createElement("form")
    const buttonConfirmar = document.createElement("button")

    divModal.classList.add("divModal")
    form.classList.add("form")

    p.classList.add("p_fechar_modal")
    p.innerText = "X"

    h2.classList.add("h2_modal")
    h2.innerText = "Realmente deseja deletar o departamento e demitir seus funcionários?"

    buttonConfirmar.add("button_modal")
    buttonConfirmar.innerText = "Confirmar"

    p.addEventListener("click", () => {
        divModal.remove()
    })

    buttonConfirmar.addEventListener("click", (e) => {
        e.preventDefault()
    })
    // deleteDepartamentApi(uuid, token)       

}

export function openModalDepartament() {
    const buttonNew = document.querySelector("buttonNew")

    buttonNew.addEventListener("click", () => {
        const body = document.querySelector("body")
        body.innerHTML = ""

        const divModal = document.createElement("div")
        const p = document.createElement("p")
        const h2 = document.createElement("h2")
        const form = document.createElement("form")
        const inputDepartament = document.createElement("input")
        const inputDescription = document.createElement("input")
        const select = document.createElement("select")
        const option = document.createElement("option")
        const buttonDepartament = document.createElement("button")

        divModal.classList.add("divModal")
        form.classList.add("form")
        select.classList.add("select")

        p.classList.add("p_fechar_modal")
        p.innerText = "X"

        h2.classList.add("h2_modal")
        h2.innerText = "Criar departamento"

        inputDepartament.classList.add("inputDepartament")
        inputDepartament.type = "text"
        inputDepartament.placeholder = "Nome do departamento"

        inputDescription.classList.add("inputDescription")
        inputDescription.type = "text"
        inputDescription.placeholder = "Descrição"

        option.classList.add("option")
        option.value = `${uuid}`
        option.innerText = "Selecionar Empresas"


        buttonDepartament.add("button_modal")
        buttonDepartament.innerText = "Criar departamento"

        p.addEventListener("click", () => {
            divModal.remove()




        })

    })

}


