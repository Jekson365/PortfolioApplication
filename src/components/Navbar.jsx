import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'


export const Navbar = () => {
    const [nav,setNav] = useState(false)
    return (
        <>

            <div className='mw-1200 container-fluid d-flex align-items-center justify-content-between'>
                <button className='main-btn'>Jeko</button>
                <ul className={`d-flex nav-items ${nav ? 'nav-items-active' : ''}`}>
                    <a>Intro</a>
                    <a>skillset</a>
                    <a>Projects</a>
                </ul>
                <button className='main-btn borderr'>Contact</button>
                <FaBars className='switch-icon' onClick={()=>setNav(!nav)}/>
            </div>

        </>

    )

}
