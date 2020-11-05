import react from 'react'
import './Card.css'

export default class Card extends react.Component {
    render() {
        const {nome, codigo } = this.props
        return (
            <div className={'card'} onClick={() => this.props.funcao(codigo, nome)}>
                <div className={'codigo'}
                    >
                    {codigo}
                </div>
                <div className={'nome'}>
                    {nome}
                </div>
            </div>
        )
    }
}