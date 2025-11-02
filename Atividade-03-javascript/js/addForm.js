const nome = document.getElementById("name");
const cpf = document.getElementById("cpf");
const birthDate = document.getElementById("nascimento");
const email = document.getElementById("mail");
const city = document.getElementById("cidest");
const submitButton = document.getElementById("send");

console.log(submitButton);

submitButton.addEventListener("click", function (e) {
  console.log("ain");
  e.preventDefault();

  // Validação de tipos e valores
  const nomeValue = nome?.value?.trim();
  const nascimentoValue = birthDate?.value;
  const mailValue = email?.value?.trim();
  const cidestValue = city?.value?.trim();
  console.log(nomeValue, nascimentoValue, mailValue, cidestValue);

  if (
    typeof nomeValue === "string" &&
    nomeValue.length > 0 &&
    typeof nascimentoValue === "string" &&
    nascimentoValue.length > 0 &&
    typeof mailValue === "string" &&
    mailValue.length > 0 &&
    typeof cidestValue === "string" &&
    cidestValue.length > 0
  ) {
    localStorage.setItem("name", nomeValue);
    localStorage.setItem("nascimento", nascimentoValue);
    localStorage.setItem("mail", mailValue);
    localStorage.setItem("cidest", cidestValue);
  }
});
