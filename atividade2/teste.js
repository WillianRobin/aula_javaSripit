let idade = 1;

while (idade <= 10) {
    console.log(`Idade de uma criança = ${idade}`);
    idade++;
}

console.clear();
let i = 0,
    text = 'aaaaa';
do {
    text += `O número é ${i}\n`;
    i++;
} while (i < 10);
console.log(text);

console.clear();
for (let i = 10; i > 0; i--) console.log(`Laço For número: ${i}`);

console.clear();
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false,
    },
];

// For overloop 
for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}

const num1 = new Array(30, -1, 5, 3, 121); 
// Ou podemos fazer 
const num2 = [-2, 40, 16, 111, 33, 64]; 
 
console.log(num1); 
console.log(num2); 
 
// Acessando elementos diversos dos arrays 
console.log(`primeiro elemento de num1: ${num1[0]}`); 
console.log(`primeiro elemento de num2: ${num2[0]}`); 
 
console.log(`terceiro elemento de num1: ${num1[2]}`); 
console.log(`quinto elemento de num2: ${num2[5]}`);