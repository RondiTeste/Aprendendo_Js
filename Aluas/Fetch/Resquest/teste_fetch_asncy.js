const URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
async function main(){
  let response = await new fetch(URL)
  console.log(await response.json())
}
main()
