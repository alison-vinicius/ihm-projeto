const form = document.querySelector("#request-form");
const quantityInput = document.querySelector("#quantity");
const observationInput = document.querySelector("#observation");
const quantityError = document.querySelector("#quantity-error");
const feedback = document.querySelector("#form-feedback");
const cancelButton = document.querySelector("#cancel-button");

function setQuantityError(message) {
  quantityError.textContent = message;
  quantityInput.setAttribute("aria-invalid", message ? "true" : "false");
}

function showFeedback(message, type) {
  feedback.textContent = message;
  feedback.className = `form-feedback form-feedback--${type}`;
}

function clearFeedback() {
  feedback.textContent = "";
  feedback.className = "form-feedback";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearFeedback();
  setQuantityError("");

  const rawQuantity = quantityInput.value.trim();
  const quantity = Number(rawQuantity);

  if (!rawQuantity) {
    setQuantityError("Informe a quantidade de galões.");
    showFeedback("Não foi possível enviar. Preencha o campo obrigatório.", "error");
    quantityInput.focus();
    return;
  }

  if (!Number.isFinite(quantity) || !Number.isInteger(quantity)) {
    setQuantityError("Digite um número inteiro válido.");
    showFeedback("Revise a quantidade informada.", "error");
    quantityInput.focus();
    return;
  }

  if (quantity <= 0) {
    setQuantityError("A quantidade deve ser maior que zero.");
    showFeedback("Não é possível solicitar uma quantidade negativa ou igual a zero.", "error");
    quantityInput.focus();
    return;
  }

  const observation = observationInput.value.trim();
  const observationMessage = observation
    ? ` Observação registrada: “${observation}”.`
    : "";

  showFeedback(
    `Solicitação enviada com sucesso! ${quantity} ${quantity === 1 ? "galão" : "galões"}${observationMessage}`,
    "success",
  );
});

cancelButton.addEventListener("click", () => {
  form.reset();
  setQuantityError("");
  clearFeedback();
  quantityInput.focus();
});

quantityInput.addEventListener("input", () => {
  if (quantityInput.getAttribute("aria-invalid") === "true") {
    setQuantityError("");
    clearFeedback();
  }
});
