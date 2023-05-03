let custo = 20;
let valorCustoTotal = custo + custo*0.2;
let venda = -30;
let produtos = 1000;

let lucro = (venda*produtos) - (valorCustoTotal*produtos);

if (venda < 00 || custo < 0) {
    console.log("[ERRO] Valores de entrada invalidos!")
} else {
    console.log(lucro)
}
