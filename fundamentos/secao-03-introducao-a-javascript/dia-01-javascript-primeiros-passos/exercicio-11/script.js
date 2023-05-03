let salarioAliquota;
let salario;
let salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
    salarioAliquota = salarioBruto - salarioBruto*0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    salarioAliquota = salarioBruto - salarioBruto*0.09;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189,82) {
    salarioAliquota = salarioBruto - salarioBruto*0.11;
} else if (salarioBruto > 5189.82) {
    salarioAliquota = salarioBruto - 570.88;
}
    

if (salarioAliquota <= 1903.98) {
    salario = salarioAliquota
} else if (salarioAliquota >= 1903.99 && salarioAliquota <= 2826.65) {
    salario = salarioAliquota - ((salarioAliquota * 0.075) - 142.80);
} else if (salarioAliquota >= 2826.66 && salarioAliquota <= 3751.05) {
    salario = salarioAliquota - ((salarioAliquota * 0.15) - 354.80);
} else if (salarioAliquota >= 3751.06 && salarioAliquota <= 4664.68) {
    salario = salarioAliquota - ((salarioAliquota * 0.225) - 636.13);
} else if (salarioAliquota > 4664.68) {
    salario = salarioAliquota - ((salarioAliquota * 0.275) - 869.36)
}

console.log(salarioAliquota);
console.log(salario);


