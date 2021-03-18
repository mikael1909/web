const restaurantes = []
const valores = []
const gorjetas = []

const gorjeta = (valor) => {
    if (valor < 50){
        return 0.2*valor
    } else if (valor >= 50 && valor <= 200){
        return 0.15*valor
    } else if (valor > 200){
        return 0.1*valor
    }
}



for (let i = 0; i < 3; i++){
    restaurantes[i] = prompt(`Informe o NOME do ${i+1}º restaurante`)
    valores[i] = prompt(`Informe o VALOR do ${i+1}º restaurante`)
    gorjetas[i] = gorjeta(parseFloat(valores[i]))
}

const mostrar = (r, v, g) => {
    for (let i = 0; i < 3; i++){
        console.log(`Restaurante ${restaurantes[i]} - [Valor: R$ ${valores[i]} | Gorjeta: R$ ${gorjetas[i]} | Total: R$ ${parseFloat(valores[i])+parseFloat(gorjetas[i])}]`)
    }
}

mostrar(restaurantes,valores,gorjetas)