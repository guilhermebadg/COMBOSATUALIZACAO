var adicionar = document.getElementById('Adicionar')
var remover = document.getElementById('Remover')
var input = document.getElementById('Exemplo')
var valorsubtotal = document.querySelector ('valorsubtotal')
var valordesconto = document.querySelector('valortotal')
var valortotal = document.querySelector('valortotal')

var produto = 0

adicionar.addEventListener('click', function(){
    produto++
    
    if (produto > 0) {
   input.value = produto;
   
} else if (produto <= 0) {
    produto = 0
    input.value = ""
}
})

remover.addEventListener('click', function(){
    produto--
    
    if (produto > 0) {
   input.value = produto;
   
   
} else if (produto <= 0) {
    produto = 0
    input.value = ""
    alert ('atenção, deseja mesmo remover o produto do carrinho?')
}
})

















/*let valoranual = 120;
let valormes = 10;

var produto = 1

preçodesconto.addEventListener('click', function(){

    if (input.value ('12x')) {
   produto * valoranual
   
} else if (input.value ('1x')) {
    produto * valormes
}
})*/
