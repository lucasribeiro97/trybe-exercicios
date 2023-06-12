const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);

console.log(sum(1, 1, 1, 1, 1));
