//cria uma classe como uma sytax familhar a outras lingugens e por
//baixos do panos é o codigo anterior de groço modo
class Pessoa{
  constructor(name,lastname){
    this.name = name
    this.lastname = lastname
  }
  concatenar(){
    return `${this.name} ${this.lastname}`
  }
  
}
//instanciando
let p1 = new Pessoa("Seu Zé","Moura")
console.log(p1)
console.log(
  p1.concatenar()
)
