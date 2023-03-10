var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

/* 
    Estrutura switch

    O break ao final de cada case é OBRIGATÓRIO

    Default não necessita break, mas pode evitar bugs futuros

    Os cases aceitam apenas números inteiros ou caracteres (strings), não funcionando com intervalos
*/

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break  
}