import React from 'react'
import './ProfitTotal.css'
import TranformValue from '../../js/tranformValue.js'

export default class ProfitTotal extends React.Component {

    transformPorcentage(value) {
        const functions = TranformValue()
        return functions.transformPorcentage(value)
    }

    render() {

        const { name, codigo, data } = this.props
        return (
            <div className='profitData'>
                <div className='names'>
                    empresa : <span>  {name} </span> ativo: <span>{codigo} </span>
                </div>
                <div className='title'>Rentabilidade nos ultimos 10 Anos</div>
                <div className='values'>

                    <div className='profitCards'>
                        <span>Total</span> <div>{this.transformPorcentage(data.total)}</div></div>
                    <div className='profitCards'><span> Média Anual</span> <div>{this.transformPorcentage(data.anual)}</div></div>
                </div>
            </div>

        )
    }
}