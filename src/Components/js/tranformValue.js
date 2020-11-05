export default tranformData =>{

    function transformPorcentage(value){
        let number = parseFloat(value)
       return `${number.toFixed(2)}%`
    }

    function tranformMoney(value){
        let number = parseFloat(value)
        return number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

    return{transformPorcentage,tranformMoney}
}