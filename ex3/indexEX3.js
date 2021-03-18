const login = prompt('Informe seu login');
const senha = prompt('Informe sua senha');



if( login == 'aluno' && senha == '123'  || login == 'professor' && senha == '456' ){
    alert('logado com sucesso');
}else{
    alert('erro');
} 

