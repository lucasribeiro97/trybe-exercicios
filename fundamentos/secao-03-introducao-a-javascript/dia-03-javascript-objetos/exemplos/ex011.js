let student = {
    nome: 'Lucas',
    email: 'lucasriibeiro23@gmail.com',
    telefone: '(18) 99680-7371',
};

let newKey = 'gitHub';
let gitHub = 'lucasribeiro97';

function addProperty(objeto, key, value) {
    objeto[key] = value;
}

addProperty(student, newKey, gitHub);
console.log(student);

newKey = 'linkedIn';
let linkedIn = 'lucasribeirocunha';

addProperty(student, newKey, linkedIn);
console.log(student);