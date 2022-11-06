
export const toast = (title, menssage) => {
    const main = document.querySelector("main");
    console.log(title);

    const container = document.createElement("div");
    container.classList.add("toast-container");

    const div = document.createElement("div")
    const p = document.createElement("p")

    // const icon = document.createElement("img");
    // icon.alt = "Mensagem de ${title}";

    if (title == "Sucesso!") {
        container.classList.add("sucessToast");

    } else if (title == "Erro!") {
        container.classList.add("errorToast");

    }

    p.innerText = `${menssage}`

    container.appendChild(div)
    main.appendChild(container)
    div.appendChild(p)



}
