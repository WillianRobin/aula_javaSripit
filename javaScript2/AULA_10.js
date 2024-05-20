// forEach
let emails = [
    'email1@gmail.com' , 'email2@gmail.com', 'email3@gmail.com', 'email4@gmail.com', 'email5@gmail.com'
]
// for (let elemento = 0; elemento < emails.length; elemento++) {
//     console.log(`E-mail enviado para:${emails[elemento]}`);
    
// }


emails.forEach((email, cadastro, completo)=>{
    console.log('--- --- --- --- --- ---');
    console.log(`E-mail enviado para ${email}`);
    console.log(`Seu número de cadastro é: ${cadastro}`);
    console.log(`Lista da Sala: ${completo}`);
    console.log('--- --- --- --- --- ---');
    })


    