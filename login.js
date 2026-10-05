// Senha definida para o sistema
const SENHA_CORRETA = "123456";


const formulario = document.getElementById("loginForm");

const email = document.getElementById("email");
const senha = document.getElementById("senha");

const emailErro = document.getElementById("emailErro");
const senhaErro = document.getElementById("senhaErro");

const mostrarSenha = document.getElementById("mostrarSenha");


// Mostrar / ocultar senha
mostrarSenha.addEventListener("click", function () {

    if (senha.type === "password") {

        senha.type = "text";
        mostrarSenha.textContent = "🙈";

    } else {

        senha.type = "password";
        mostrarSenha.textContent = "👁";

    }

});


// Ao clicar no botão Login
formulario.addEventListener("submit", function (evento) {

    // Impede o formulário de recarregar a página
    evento.preventDefault();


    // Limpa mensagens anteriores
    emailErro.textContent = "";
    senhaErro.textContent = "";


    let valido = true;


    // ==========================
    // VALIDAR EMAIL
    // ==========================

    if (email.value.trim() === "") {

        emailErro.textContent =
            "O campo de email é obrigatório.";

        valido = false;

    } else if (!email.checkValidity()) {

        emailErro.textContent =
            "Digite um email válido.";

        valido = false;
    }


    // ==========================
    // VALIDAR SENHA
    // ==========================

    if (senha.value === "") {

        senhaErro.textContent =
            "O campo de senha é obrigatório.";

        valido = false;

    } else if (senha.value !== SENHA_CORRETA) {

        senhaErro.textContent =
            "Senha incorreta.";

        valido = false;
    }


    // ==========================
    // LOGIN CORRETO
    // ==========================

    if (valido) {

        window.location.href = "homeSolicitante.html";

    }

});