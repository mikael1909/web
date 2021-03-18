const nome1 = prompt('Informe seu nome');
const peso1 = prompt('Informe seu peso');
const altura1 = prompt('Informe seu altura');

const nome2 = prompt('Informe seu nome');
const peso2 = prompt('Informe seu peso');
const altura2 = prompt('Informe seu altura');

const imc1 = peso1 / (altura1*altura1);

const imc2 = peso2 / (altura2*altura2);

if(imc1 > imc2){

    const resultado = `o imc de ${nome1} ( ${imc1} ) é maior do que o de ${nome2}  ( ${imc2} )`;
    console.log(resultado);
}
else if(imc2 > imc1){
    const resultado = `o imc de ${nome2} ( ${imc2} ) é maior do que o de ${nome1}  ( ${imc1} )`;
    console.log(resultado);
}
else{
    console.log('os imcs sao iguais');
}
 
