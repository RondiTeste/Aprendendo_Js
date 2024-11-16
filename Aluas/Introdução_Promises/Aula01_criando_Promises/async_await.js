function div(n1,n2) {
  return new Promise(function(resove,reject) {
    setTimeout(()=>{
    let res = n1/n2
    if (n2 != 0) {
      resove(res) 
    } else {
      reject('Imposivel dividir por zero')
    }
    },3000)
 })
}
function callBackSussecs(r) {
  console.log(r)
}
function callBackError(r) {
  console.log(r)
}
function mostar(r){
  return new Promise((resove,rejct)=>{
     console.log(r)
  })
}
async function cacl() {
  let divsao = await div(20,7)
   await mostar(divsao)
}
//ele automaticamente consuta os callbacks 
