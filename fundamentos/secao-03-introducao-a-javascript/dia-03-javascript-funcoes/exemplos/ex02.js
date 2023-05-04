let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaCliente(cliente) {
    if (typeof cliente === 'string') {
        clientesTrybeBank.push(cliente)
        return 'Cliente adicionado!'
    } else {
        return "Nome inválido!"
    }
}

console.log(adicionaCliente('Lucas'));
console.log(clientesTrybeBank)