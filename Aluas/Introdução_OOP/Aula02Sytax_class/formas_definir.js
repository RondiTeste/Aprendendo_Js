class Pessoa0{
  constructor(name){
    this.name
  }
  somar(x){
    return x+1
  }
}
function Pessoa1(name){
  this.name = name
  let somar = function somar(x){
    return x+1
  }
}
//quando usamos o this presumimos que instaciaremos com new 
let Pessoa2={
  med : function somar(x){ return x + 1}
}
let Pessoa3={
  somar(x){
    return x+1
  }
}
