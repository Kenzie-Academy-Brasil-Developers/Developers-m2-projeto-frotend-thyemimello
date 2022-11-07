import { baseUrl } from "./button.js";
import { toast } from "./toast.js";

export const apiUrl = "http://localhost:6278/";
export const urlApi = "http://localhost:6278/sectors";
export const urlApiWork = "http://localhost:6278/companies";

const verifyAdmin = async (token) => {
  try {
    const request = await fetch(apiUrl + "auth/validate_user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const response = await request.json();
    return response.is_admin;
  } catch (erro) {
    toast("Erro!", "E-mail ou senha invalidos");
  }
};

export async function registerUser(body) {
  try {
    const request = await fetch(apiUrl + "auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (request.ok) {
      toast("success", "Criação de usuário bem sucedida");
      setTimeout(() => {
        window.location.href = `${baseUrl}src/pages/login.html`;
      }, 4000);
    } else {
      toast("erro", "E-mail ou senha invalidos");
    }
  } catch (erro) {
    toast("erro", "E-mail ou senha invalidos");
  }
}

export async function loginUser(body) {
  console.log(body);
  try {
    const request = await fetch(apiUrl + "auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const response = await request.json();

    if (!response.error) {
      localStorage.setItem("@Token", JSON.stringify(response.token));
      console.log("Entrou");
      let isAdmin = await verifyAdmin(response.token);
      if (isAdmin) {
        window.location.href = "/src/pages/admPage/adm.html";
      } else {
        window.location.href = "/src/pages/usuarioPage/usuario.html";
      }
    } else {
      console.log(erro);
      toast("erro", "E-mail ou senha invalidos");
    }
  } catch (erro) {}
}

export async function getWorks() {
  try {
    const request = await fetch(urlApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await request.json();
    console.log(response);

    return response;
  } catch (erro) {
    console.log(erro);
  }
}

export async function getSector(setor) {
  try {
    const request = await fetch(`${urlApiWork}/${setor}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await request.json();
    console.log(response);

    return response;
  } catch (erro) {
    console.log(erro);
  }
}
