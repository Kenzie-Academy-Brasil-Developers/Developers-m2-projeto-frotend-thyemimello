import { getLogin, baseUrl, getRegister } from "./button.js"
import { getSector, getWorks } from "./request.js"


getLogin(baseUrl)
getRegister(baseUrl)

function SelectWork(array) {
    const select = document.querySelector(".select_home")

    select.addEventListener("change", async () => {

        const selectSector = select.value
        console.log(selectSector)

        const sector = await getSector(selectSector)
        console.log(sector)


        displayWork(sector)



    })
    array.forEach(element => {


        const option = document.createElement("option")

        option.classList.add("optin_display")
        option.innerText = element.description


        select.appendChild(option)


    });
}

function displayWork(array) {
    const ul = document.querySelector(".list_home")
    const select = document.querySelector(".select_home")
    ul.innerHTML = ""


    array.forEach(element => {
        console.log(element)

        const li = document.createElement("li")
        const option = document.createElement("option")
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const button = document.createElement("button")

        li.classList.add("li_home");
        option.classList.add("optin_display")
        option.innerText = element.description

        h2.classList.add("h2_home_display")
        h2.innerText = element.name
        p.classList.add("p_home_display")
        p.innerText = element.opening_hours

        button.classList.add("button_home_display")
        button.innerText = element.sectors.description


        ul.appendChild(li)
        select.appendChild(option)
        li.append(h2, p, button)






    });
}
SelectWork(await getWorks())


