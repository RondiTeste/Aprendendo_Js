const URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL" 
var myHeaders = new Headers()
var InitConfig ={
  method:"GET",
  headers:myHeaders,
  mode:"cors",
  cache:"default"
}
fetch(URL,InitConfig).then(
  function(response){
    return response.json()
  }
).then(
  function (json){
    console.log(json)
  }
)
