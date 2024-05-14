alert(`Insira um decontos desses : DESC1 , DESC2 , DESC3 , DESC4 , DESC5 .`);
let promocao = prompt(`Escreva a promoção.`);
let valor_descontado;
let produto = 1000;

switch (promocao) {

    case `DESC1`:
        valor_descontado = produto - (produto * 0.05);

        alert("5% de desconto");
        alert(`Valor total é R$ ${produto} e valor com desconto é R$ ${valor_descontado}`);
        break;

    case `DESC2`:
        valor_descontado = produto - (produto * 0.1);

        alert(" 10% de desconto");
        alert(`Valor total é R$ ${produto} e valor com desconto é R$ ${valor_descontado}`)
        break;

    case `DESC3`:
        valor_descontado = produto - (produto * 0.15);

        alert(" 15% de desconto");
        alert(`Valor total é R$ ${produto} e valor com desconto é R$ ${valor_descontado}`)
        break;

    case `DESC4`:
        valor_descontado = produto - (produto * 0.2);

        alert(" 20% de desconto");
        alert(`Valor total é R$ ${produto} e valor com desconto é R$ ${valor_descontado}`)
        break;

    case `DESC5`:
        valor_descontado = produto - (produto * 0.25);

        alert(" 25% de desconto");
        alert(`Valor total é R$ ${produto} e valor com desconto é R$ ${valor_descontado}`)
        break;

    default:
        alert("Codigo ínvalido")
        break;
}
