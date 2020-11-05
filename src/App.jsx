import React from 'react'
import Search from './Components/Search'
import Header from './Components/Header'
import Footer from './Components/Footer'


import './App.css'

export default class App extends React.Component {



  render() {

    

    return (
      <div className="app">
            <Header title="Consumo de Api"/>
            <Search/>
             <Footer/>
      </div>
    )
  }

}
