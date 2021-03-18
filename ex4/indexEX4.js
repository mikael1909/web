const n = prompt('Informe um numero');
const array= [];

for(let i=0; i< n ; i++){
    array[i]= prompt('Informe uma palavra');
}

 
for(let i=n-1; i >= 0 ; i--){
    console.log(array[i]);
}