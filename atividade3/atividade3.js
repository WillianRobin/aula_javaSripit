let numbers = [1, 2, 3, 4, 5];
numbers.map((numero) => {
    console.log('__________________');
    console.log(numero * 2);
    console.log('__________________');
})

console.log('-----------------');
console.log('-----------------');

let numbersPares = numbers.filter((numbers) => {
    return numbers % 2 === 0
})

console.log(numbersPares);

console.log('-----------------');
console.log('-----------------');
console.log('-----------------');

fruits = ['apple', 'banana', 'orange', 'kiwi']

fruits.forEach(nome => {
    console.log('__________________');
    console.log(`Frutas ${nome}`);
    console.log('__________________');
});

console.log('-----------------');
console.log('-----------------');

students = [
    { nome: 'Jhon', age: 20 },
    { nome: 'Jane', age: 25 },
    { nome: 'Mark', age: 22 }
];

students.forEach((nomes, idade) => {
    console.log('__________________');
    console.log(`nome do aluno: ${nomes.nome}`);
    console.log(`idade do aluno: ${idade.age}`);
    console.log('__________________');
})

console.log('-----------------');
console.log('-----------------');

let studentsName = students.map((names) => {
    return names.nome
})

console.log('__________________');
console.log(studentsName);
console.log('__________________');

console.log(`(¬_¬) |(*-*)| (-_-)zZ`);