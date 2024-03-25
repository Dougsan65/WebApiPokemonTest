const form = document.getElementById("register-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const requestData = {};
  formData.forEach((value, key) => {
    requestData[key] = value;
  });

  try {
    const tokenTemp = localStorage.getItem("tokenTemp");
    const username = requestData["username"];
    const email = requestData["email"];

    console.log(username, email);

    const response = await fetch(
      `https://back-end-application-p34r.onrender.com/usuarios/checkUserExist/${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenTemp,
        },
      }
    );

    const responseEmail = await fetch(
      `https://back-end-application-p34r.onrender.com/usuarios/checkEmailExist/${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenTemp,
        },
      }
    );
    console.log(response, responseEmail);
    if (!response.ok || !responseEmail.ok) {
      alert("Usuário ou e-mail já registrado!");
      return;
    }

    const registerResponse = await fetch(
      "https://back-end-application-p34r.onrender.com/usuarios/criarUsuario",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      }
    );

    if (registerResponse.ok) {
      const data = await registerResponse.json();
      localStorage.removeItem("tokenTemp");
      alert("Registrado com sucesso!");
    } else {
      throw new Error("Falha ao registrar usuário");
    }
  } catch (error) {
    console.error(error);
    alert("Falha na comunicação com o servidor");
  }
});

document.getElementById("logoPoke").addEventListener("click", () => {
  clickSound();
  setTimeout(function () {
    window.location.href = "/index.html";
  }, 1000);
});

async function clickSound() {
  var audio = new Audio("src/audio/menu/clickMenu.wav");
  await audio.play();
}
