// const table = document.getElementById('table')
// const form = document.querySelector('form')
// const input = form.querySelector('input')

// form.addEventListener('submit', e =>{
//   e.preventDefault()
//   const search = input.value

//   stockData(search)
//   input.value = ''
//   table.innerHTML = 'Loading...'
// })

// function stockData(search){

//   fetch('https://api.twelvedata.com/stocks')
//   .then(res => res.json())
//   .then(data => {

//     if(Array.isArray(data.data)){
//       const result = data.data.filter(stock =>{
//         const stockName = stock.name.toLowerCase()
//         return stockName.includes(search.toLowerCase())
//       })
//       if(result){
//          table.innerHTML = `
//          <tr>
//             <th>Type</th>
//             <th>Name</th>
//             <th>Country</th>
//             <th>Currency</th>
//             <th>Exchange</th>
//         </tr>
//          `
//           result.map((data, idx)=>{
//             const {name, country, currency, exchange, type} = data
    
//             const box = document.createElement('tr')
//             box.classList.add('box')
//             box.innerHTML = `
//             <td>${type}</td>
//             <td>${name}</td>
//             <td>${country}</td>
//             <td>${currency}</td>
//             <td>${exchange}</td>
//             `
//             table.appendChild(box)
//           })
//         }else{
//           console.log('no stock found')
//         }
//       }
//   })
//   .catch(error => console.error(error))
// }


function outerFun(){
    var value = 0;

    function resetValue(){
        return value = 0
    }

    function increaseValue(){
        value = value + 1
        return value
    }

    function decreaseValue(){
        value = value - 1
        return value;
    }

    function increaseByParameter(incVal){
        value = value + incVal
        return value
    }

    return {
        defaultValue: resetValue,
        increaseOne: increaseValue,
        decreaseOne: decreaseValue,
        increaseValue: increaseByParameter
    }
}

var myFun = outerFun()

const value = document.getElementById('value')

document.getElementById('increaseOne').addEventListener('click', ()=> value.innerText = myFun.increaseOne())
document.getElementById('reset').addEventListener('click', ()=> value.innerText = myFun.defaultValue())
document.getElementById('decreaseOne').addEventListener('click', ()=> value.innerText = myFun.decreaseOne())
document.getElementById('increaseFive').addEventListener('click', ()=> value.innerText = myFun.increaseValue(5))














