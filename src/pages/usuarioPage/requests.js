export const getUserProfile = async (token) => {
  try {
    const request = await fetch("http://localhost:6278/users/profile", {
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

export const getDepartamentFromUser = async (token) => {
  try {
    const request = await fetch("http://localhost:6278/users/departments", {
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

export const getDepartamentCoWorkers = async (token) => {
  try {
    const request = await fetch(
      "http://localhost:6278/users/departments/coworkers",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await request.json();
    return response;
  } catch (erro) {
    console.log(erro);
  }
};

export const updateUser = async (body) => {
  const token = JSON.parse(localStorage.getItem("@Token"));
  try {
    const date = await fetch("http://localhost:6278/users", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const dateJson = await date.json();
    window.location.reload();
    console.log(dateJson);
  } catch (erro) {
    console.log(erro);
  }
};
