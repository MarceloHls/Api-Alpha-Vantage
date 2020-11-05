import axios from 'axios'
import encapsulateDate from './encapsulateDate.js'

export default ()=>{

async function getData(codigo) {
       

    let _function = 'TIME_SERIES_MONTHLY'
    let _symbol = `${codigo}.sao`
    let _apiKey = '565NKQ3CNX65ACF7'
    let url = `https://www.alphavantage.co/query?function=${_function}&symbol=${_symbol}&apikey=${_apiKey}`

    
   return new Promise((resolve,reject)=>{
 
    axios.get(url)
    .then(a => a.data['Monthly Time Series'])
    .then(a => encapsulateDate().encapsulateDate(a))
    .then(a => resolve(a))
    .catch(err => reject(err))

   })

}

return getData

}
