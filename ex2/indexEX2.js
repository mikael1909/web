const nome = prompt('Informe seu nome');
const peso = prompt('Informe seu peso');
const altura = prompt('Informe seu altura');

const imc = peso / (altura*altura);


if(imc < 17 ){
    console.log(nome+' vc esta Muito abaixo do peso');
}
else if(imc <= 18.49){
    console.log(nome+' vc esta Abaixo do peso');
}
else if(imc <= 24.99){
    console.log(nome+' vc esta com Peso normal');
}
else if(imc <= 29.99){
    console.log(nome+' vc esta Acima do peso');
}
else if(imc <= 34.99){
    console.log(nome+' vc esta com Obesidade I');
}
else if(imc <= 39.99){
    console.log(nome+' vc esta com Obesidade II (severa)');
}
else {
    console.log(nome+' vc esta com Obesidade III (mórbida)');
}
 
