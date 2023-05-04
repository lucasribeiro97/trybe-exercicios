let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function verificaString(cliente) {
    if (typeof cliente !== 'string') {
        return "o parametro deve ser do tipo string"
    } else {
        return true
    }
}

function verificaArray(cliente) {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (cliente === clientesTrybeBank[index]) {
            return index;
        }
    }
    return false
}


function removeCliente(cliente) {
    let validacao = verificaString(cliente);
    if (validacao !== true) {
        return validacao
    }


    let index = verificaArray(cliente);
    if (index === false) {
        return 'Cliente nao encontrado.'
    }

    clientesTrybeBank.splice(index, 1);
    return 'Cliente excluido com sucesso.'
}

console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(removeCliente('Barney')); // Cliente não encontrada(o)
console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]