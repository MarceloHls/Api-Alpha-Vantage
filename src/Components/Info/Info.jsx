import React from 'react'
import './Info.css'
import ProfitTotal from './Profit/ProfitTotal'
import ProfitCard from './Profit/ProfitCard'

export default class Info extends React.Component {
    state = {
        codigo: this.props.codigo,
        name: this.props.name,
        data: this.props.data,
        keys: () => {
            let noKeys = this.props.data
            let keys = Object.keys(noKeys).filter(key => key != 'profitability')
            return keys
        },
        back: false,
        time: 60

    }

    renderCard(year, obj) {
        let data = obj[year]
        let keys = Object.keys(data)
        return (
            <ProfitCard year={year} data={data} keys={keys} />
        )
    }
    renderTotal(data, name, codigo) {
        return (
            <ProfitTotal data={data.profitability} name={name} codigo={codigo} />
        )
    }

    renderButtom() {
        let { back, time } = this.state

        if (time != 0) {
            setTimeout(() => {
                this.setState({ time: --time })
            }, 1000)

        } else {
            back = true
        }

        return (
           
                <button className='backButton' onClick={() => {
                    if (back) {
                        this.props.funcao(false)
                    } else {
                        alert('Aguarde!!!')
                    }
                }
                }>{back ? 'Voltar' : `Aguarde ${time}`}</button>
            
        )
    }

    render() {
        const { data, name, codigo } = this.state
        const keys = this.state.keys()

        return (
            <div className='total'>
                <div className='info'>

                    <div className='totalData'>
                        {this.renderButtom()}
                        {this.renderTotal(data, name, codigo)}
                    </div>
                    <div className='title titleCard'>Rentabilidade por Ano</div>

                    <div className='monthCards'>

                        {keys.map(key => this.renderCard(key, data))}</div>

                </div>
            </div>
        )
    }
}