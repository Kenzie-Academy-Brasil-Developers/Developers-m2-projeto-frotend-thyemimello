export const getAllCompanies = async (token) => {
  try {
    const request = await fetch("http://localhost:6278/companies/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await request.json();
    return response;
  } catch (erro) {
    console.log(erro);
  }
};

export const getAllDepartaments = async () => {
  const token = JSON.parse(localStorage.getItem("@Token"));
  try {
    const request = await fetch("http://localhost:6278/departments/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await request.json();
    return response;
  } catch (erro) {
    console.log(erro);
  }
};

export const getAllDepartamentsFromCompany = async (uuid) => {
  const token = JSON.parse(localStorage.getItem("@Token"));
  try {
    const date = await fetch(`http://localhost:6278/departments/${uuid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const dateJson = await date.json();

    return dateJson;
  } catch (erro) {
    console.log(erro);
  }
};

export const getAllUsers = async () => {
  const token = JSON.parse(localStorage.getItem("@Token"));
  try {
    const date = await fetch(`http://localhost:6278/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const dateJson = await date.json();
    const users = dateJson.filter((user) => user.is_admin == false);
    return users;
  } catch (erro) {
    console.log(erro);
  }
};

export const getAllUnemployed = async () => {
  const token = JSON.parse(localStorage.getItem("@Token"));
  try {
    const date = await fetch(`http://localhost:6278/admin/out_of_work`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const dateJson = await date.json();
    const users = dateJson.filter((user) => user.is_admin == false);
    return users;
  } catch (erro) {
    console.log(erro);
  }
};

export const createDepartament = async (body) => {
  const token = JSON.parse(localStorage.getItem("@Token"));
  try {
    const date = await fetch("http://localhost:6278/departments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const dateJson = await date.json();
    console.log(dateJson);
    window.location.reload();
  } catch (erro) {
    console.log(erro);
  }
};

export const hireUser = async (userUUID, departamentUUID) => {
  const token = JSON.parse(localStorage.getItem("@Token"));
  const body = {
    user_uuid: userUUID,
    department_uuid: departamentUUID,
  };

  try {
    const data = await fetch("http://localhost:6278/departments/hire/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const dataJson = await data.json();
    window.location.reload();
    console.log(dataJson);
  } catch (erro) {
    console.log(erro);
  }
};

export const editDepartament = async (uuid, body) => {
  const token = JSON.parse(localStorage.getItem("@Token"));
  try {
    const date = await fetch(`http://localhost:6278/departments/${uuid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const dateJson = await date.json();
    console.log(dateJson);
    window.location.reload();
  } catch (erro) {
    console.log(erro);
  }
};

export const deleteDepartament = async (uuid) => {
  const token = JSON.parse(localStorage.getItem("@Token"));
  try {
    const date = await fetch(`http://localhost:6278/departments/${uuid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.reload();
  } catch (erro) {
    console.log(erro);
  }
};

export const editUser = async (uuid, body) => {
  const token = JSON.parse(localStorage.getItem("@Token"));
  try {
    const date = await fetch(
      `http://localhost:6278/admin/update_user/${uuid}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      }
    );
    const dateJson = await date.json();
    console.log(dateJson);
    window.location.reload();
  } catch (erro) {
    console.log(erro);
  }
};

export const deleteUser = async (uuid) => {
  const token = JSON.parse(localStorage.getItem("@Token"));
  try {
    const date = await fetch(
      `http://localhost:6278/admin/delete_user/${uuid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    window.location.reload();
  } catch (erro) {
    console.log(erro);
  }
};
