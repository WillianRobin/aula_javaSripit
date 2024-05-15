let certo = false;

while (certo === false ) {
    let idade = Number(prompt('Escreva sua idade'));

    if (idade > 0) {
        alert(`certo`)
        certo = true;
    } else if(idade <=0){
        alert(`está errado! Escreva de novo.`)
    }
}

