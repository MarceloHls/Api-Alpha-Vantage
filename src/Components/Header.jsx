import React from 'react'
import './Header.css'

export default props=>{
    return (
        <header className='header'>
            {props.title}
        </header>
    )
}