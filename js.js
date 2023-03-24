fetch('https://api.twelvedata.com/stocks')
.then(res => res.json())
.then(data => stockData(data))
.catch(error => console.error(error))


function stockData(data){
  const search = "micro"

  const foundArray = data.data.find(array => array.name.toLowerCase() === search)

  if(foundArray){
    console.log(foundArray)
  }else{
    console.log('Not Found')
  }
}
