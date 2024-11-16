function div(n1,n2) {
  return new Promise(function(resove,reject) {
    let res = n1/n2
    if (n2 != 0) {
      resove(res) 
    } else {
      reject(rew)
    }
  })
}
function callBackSussecs(r) {
  console.log(r)
}
function callBackError(r) {
  console.log(r)
}
console.log(div(10,20).then(callBackSussecs).catch(callBackError).finally(console.log("terminou!")))
