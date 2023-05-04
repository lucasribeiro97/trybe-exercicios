let saldo = 100

function adiciona(valor) {
    return saldo + valor;
}

function subtraia(valor) {
    return saldo - valor;
}

function taxa(valor) {
    return saldo * valor
}

function divide(valor) {
    return saldo / valor
}

console.log(adiciona(100));
console.log(subtraia(100));
console.log(taxa(0.15));
console.log(divide(2));

