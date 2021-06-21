import React from 'react'
import './Header.css'

function header() {
    return (
        <div className='header'>
            <img src='../../assets/Logo_White.png' alt="logo" />

            <div className="headerSearch">
                <input className='searchInput' type="text" placeholder='Search all News' />
                <img className='searchIcon' src="../../assets/search-icon@2x.svg" alt="" />
            </div>
        </div>
    )
}

export default header
