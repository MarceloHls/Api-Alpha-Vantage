import React from 'react'
import './Search.css'
import stonks from './js/stonks'
import getData from './js/getData'
import Card from './Card/Card'
import Info from './Info/Info'


export default class Filtro extends React.Component {
    state = {
        lista: stonks(),
        filtro: "",
        info: false,
        data: {},
        codigo: '',
        nome: ''
    }

    renderCard(objeto, filtro) {
        if (objeto.nome.includes(filtro.toUpperCase()))
            return (
                <Card nome={objeto.nome}
                    codigo={objeto.codigo}
                    funcao={this.setData.bind(this)}
                />
            )
    }


    async setData(codigo, nome) {
        
        if (codigo) {
            let data = await getData()(codigo)
                .then(data => {
                    if (!data) return
                    this.setState({ data: data, codigo: codigo, nome: nome })
                    this.setInfo(true)
                    
                })
        }

    }

    setInfo(state){
        this.setState({info: state })
    }

    renderInfo(codigo, name, data) {

        return (
            <Info codigo={codigo} name={name} data={data}  funcao={this.setInfo.bind(this)} />
        )
    }

    setFiltro(e) {
        this.setState({ filtro: e.target.value })
    }


    render() {
        const { lista, filtro, info, codigo, nome, data } = this.state
        return (
            <div className='filtro'>
                <div className='buscador'>
                    <input type="text" placeholder="Buscar ação" onChange={e => this.setFiltro(e)} />
                </div>
                <div className='cards'>
                    {lista.map(acao => this.renderCard(acao, filtro))}
                </div>
                {info ? this.renderInfo(codigo, nome, data) : ''}
            </div>
        )
    }
}