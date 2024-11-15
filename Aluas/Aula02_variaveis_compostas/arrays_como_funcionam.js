//arrays são basicamente variaveis compostas que possuem index para 
//refernciar um local da memoria expecifico
//forma literaria
let list = ["Machado","Celular","Bescoito","Mochila"];
list.sort();//orgainza em uma ordeem
//adicionado um item 
list.push("Carro");
console.log(list);
//iterando sobre a list 
list.forEach(function(item,index,array) {
  console.log(item ,index);
});
//removendobo utimo
list.pop()
console.log(list)
