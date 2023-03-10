let num = [5, 8, 2, 9, 3]


console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

num.sort()
console.log(`O elemento em ordem fica ${num}`)

num.push(1)
console.log(`Agora o vetor é ${num}`)

num.sort()
let pos = num.indexOf(8)
if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
   console.log(`O valor 8 está na posição ${pos}.`) 
}
