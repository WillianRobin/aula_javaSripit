let nome = ['Matheus', 'Davi', 'João', 'Pedro']


nome.forEach((nomes, chamada, sala) => {
    console.log('________________________________');
    console.log(`Nome : ${nomes}`);
    console.log(`Número : ${chamada}`);
    console.log(`Sala: ${sala}`);
    console.log('________________________________');
});


let frutas = ['Banana', 'Abacaxi', 'Melão']

let newFrutas = frutas.map((fruta) =>{
    return fruta.toUpperCase()
});

console.log(newFrutas);

let aluno = [
    {
        nome: 'Ermedon',
        curso: 'Dev.Web',
        matriculado: true,
    },
    {
        nome: 'Leslie',
        curso: 'Dev.Web',
        matriculado: true,
    },
    {
        nome: 'Cesae',
        curso: 'ADM',
        matriculado: true,
    },
];

let nomeAlunos = aluno.map((objeto)=>{
    return objeto.curso
})

console.log(nomeAlunos);


let nota = [9, 5, 8, 7, 6];

let notaAprovados = nota.filter((nota)=>{
    return nota >= 7
})

console.log(notaAprovados);


