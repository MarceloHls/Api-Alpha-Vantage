export default () => {

    function encapsulateDate(data) {
        let temp = {}

      

        if(!data) return(false)
        Object.keys(data).forEach(dayInvert => {

            let close = parseFloat(data[dayInvert]["4. close"]).toFixed(1)
            let arrayDay = dayInvert.split('-')
            let year = arrayDay[0]
            let month = arrayDay[1]
            let day = arrayDay[2]

            if (!temp[year]) {
                temp[year] = {}
                temp[year][month] = close
            } else {
                temp[year][month] = close
            }
        })
     
        
        return addProfitability(temp)

    }

    function addProfitability(obj) {
        let temp = {}
        temp.profitability = {}
        temp.profitability.total = 0
        temp.profitability.anual = 0
        let year10s = Object.keys(obj).filter(year => parseFloat(year) >= 2010)
        year10s.forEach(year => {
            let data = obj[year]
            let dataKeys = Object.keys(data)
            let dataArray = arrayDatas(dataKeys)
            let firstMonth = data[dataArray.smaller]
            let lastMonth = data[dataArray.larger]
            let yearProfit = profitability(firstMonth,lastMonth)


            yearProfit.monthlyProfitability = yearProfit.profitability / dataArray.length 
            data['profitability'] = yearProfit
            temp[year] = data
            temp.profitability.total =  Number(temp.profitability.total) +  Number(yearProfit.profitability)
            

        })

        
        temp.profitability.anual = temp.profitability.total / 10


        return temp
        

    }

    function arrayDatas(array) {
        let length = 0
        let first = 0
        let last = 0
        let larger = -100000000
        let smaller = 1000000000

        array.forEach(element => {
            if (element > larger)
                larger = element;
            if (element < smaller)
                smaller = element;

            if (!first) first = element;
            last = element
            length++

        })
        return { length, first, last, larger, smaller }
    }

    function profitability(first, last) {

        const profit = (last - first).toFixed(2)
        const profitability = (profit / first * 100).toFixed(2)
        return { profitability, profit }
    }



        return { encapsulateDate }
    }