let word = 'tryber';
let invertido = '';

for (let index = 0 ; index < word.length; index += 1) {
    invertido += word[word.length -1 - index]
}

console.log(invertido);