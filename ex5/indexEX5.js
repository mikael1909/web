aposentado()

function aposentado (){
    const nome = prompt(`informe seu nome`) 
    const ano = prompt(`informe seu ano de nascimento`)

    const idade = calcularIdade(parseInt(ano))

    if (idade >= 65) {
        console.log(`${nome} você ja esta aposentado(a)`);
    } else {
        const falta = 65 - idade ;
        console.log(`${nome} você ainda não esta aposentado(a) faltam ainda ${falta} anos`);
    }
}

function calcularIdade (nascimento) {
    return 2021 - nascimento;
}