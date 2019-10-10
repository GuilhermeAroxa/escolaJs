alert("Bem-Vindo! A seguir pediremos que informe alguns dados.");
const nome = prompt("Informe seu nome: ");
const idade = prompt("Informe sua idade: ");
const confirmacao = confirm("Sua idade é realmente " + idade + "?");

alert("Nome: " + nome + ", sua idade é " + idade + ", idade confirmada? " + confirmacao);