import React from 'react'
import './Header.css'

const Header = ({title,titleYear,subTitle,dateTitle}) => {

    return (
        <header>
            <h1 class = "title-heading">{title} <span class = "title-year">{titleYear}</span></h1>
            <h2 class = "sub-title"><u>{subTitle}</u></h2>
    <div class = "date">{dateTitle}</div>
        </header>
    )

}

export default Header