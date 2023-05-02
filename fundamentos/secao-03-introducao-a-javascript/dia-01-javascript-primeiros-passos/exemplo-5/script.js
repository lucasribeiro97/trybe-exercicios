let status = "reprovada";

switch (status) { 
    case "aprovada":
        console.log("Parabéns, voce esta no grupo de pessoas aprovadas!");
        break;
    case "lista":
        console.log("Voce está na lista de espera.");
        break;
    case "reprovada":
        console.log("infelizmente, voce reprovou.");
        break;
    default:
        console.log("Informacao incorreta.");
}

