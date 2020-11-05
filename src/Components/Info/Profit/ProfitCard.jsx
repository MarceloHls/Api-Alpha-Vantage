import React from 'react'
import './ProfitCard.css'
import TranformValue from '../../js/tranformValue.js'

export default class ProfitCard extends React.Component {

    state = {
        profitability: this.props.data.profitability.profitability,
        year: this.props.year,
        data: this.props.data,
        keys: this.props.keys,
        monthNuber: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        monthName: ["Janeiro", "Fevereiro", "Março	", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        cardBody: false,
        pause: false
    }

    transformPorcentage(value) {
        const { pause } = this.state
        const functions = TranformValue()
        let transform = functions.transformPorcentage(value)
        return transform

    }

    tranformMoney(value) {
        const functions = TranformValue()
        let transform = functions.tranformMoney(value)
        return transform

    }

    renderMonth(control, data, monthNuber, monthName) {
        let month = data[monthNuber[control]]
        if (month)
            return (
                <div className='capsule'>
                    <div className='month'> {monthName[control]}</div>
                    <div className='value'> {this.tranformMoney(month)}</div>
                </div>

            )
    }

    setCardBody(cardBody) {
        this.setState({ cardBody: !cardBody })
    }

    render() {
        const { year, profitability, data, keys, monthName, monthNuber, cardBody } = this.state
        let control = -1


        return (
            <div className={'profitCard'}>

                <div className='cardHeader' onClick={() => this.setCardBody(cardBody)}>
                    <div className='yearCard'><span>Ano:</span> {year}</div>
                    <div className='profitabilityCard'><span>Lucro:</span>{this.transformPorcentage(profitability)}</div>                </div>
                <div className={cardBody ? 'cardBody' : 'bodyNone'}>{keys.map(() => {
                    control++
                    return this.renderMonth(control, data, monthNuber, monthName)
                })}</div>
            </div>

        )
    }
}