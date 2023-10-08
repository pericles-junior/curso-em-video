let idade = 30;
console.log(`Sua idade é ${idade} anos.`);
if (idade < 16) {
  console.log("Voto não obrigatório.");
} else if (idade < 18 || idade > 65) {
  console.log("Voto é opcional.");
} else {
  console.log("Voto é obrigatório.");
}
