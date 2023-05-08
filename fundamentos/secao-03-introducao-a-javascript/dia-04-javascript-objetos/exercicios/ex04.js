let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

function addNewKey (object, key, value) {
    object[key] = value;
}

function listarKeys(object) {
    return Object.keys(object);
}

function tamanhoObjeto(object) {
    return Object.keys(object).length;
}

function objectValues(object) {
    return Object.values(object);
}

let allLessons = Object.assign({}, { 
    lesson1: lesson1, 
    lesson2: lesson2, 
    lesson3: lesson3, 
});

function totalStudents(object) {
    let total = 0;
    
    let keys = Object.keys(object);
    
    for (let index in keys) {
        total += object[keys[index]].numeroEstudantes
    }
    return total;
}

function getValueByNumber(object, number) {
    return Object.values(object)[number];
}

function verifyPair(object, key, value) {
    let entries = Object.entries(object);
    let isEqual = false;
    for  (let index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual
}

console.log(verifyPair(lesson1, 'materia', 'matematica'))
//console.log(getValueByNumber(lesson1, 2))
//console.log(totalStudents(allLessons));
//console.log(allLessons);
//console.log(objectValues(lesson1));
//console.log(tamanhoObjeto(lesson1));
//addNewKey(lesson2, 'turno', 'noite');
//console.log(listarKeys(lesson1));

