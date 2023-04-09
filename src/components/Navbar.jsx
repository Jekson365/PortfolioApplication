import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

import { animateScroll } from 'react-scroll'

export const Navbar = () => {
    const [nav, setNav] = useState(false)

    function scrollToo(id) {
        animateScroll.scrollTo(id,{
            duration:10,
        })
    }
    return (
        <>

            <div className='mw-1200 container-fluid d-flex align-items-center justify-content-between'>
                <button className='main-btn'>Jeko</button>
                <ul className={`d-flex nav-items ${nav ? 'nav-items-active' : ''}`}>
                    <a onClick={()=>scrollToo(1100)}>skillset</a>
                    <a onClick={()=>scrollToo(2100)}>Projects</a>
                    <a onClick={()=>scrollToo(9100)}>footer</a>
                </ul>
                <button className='main-btn borderr'>Contact</button>
                <FaBars className='switch-icon' onClick={() => setNav(!nav)} />
            </div>

        </>

    )

}