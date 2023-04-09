import React from 'react'
import icon1 from '../assets/icons/ai.png'
import icon2 from '../assets/icons/css_.png'
import icon3 from '../assets/icons/github.png'
import icon4 from '../assets/icons/node.png'
import icon5 from '../assets/icons/js.png'
import icon6 from '../assets/icons/photoshop.png'
import icon7 from '../assets/icons/scss.png'
import icon8 from '../assets/icons/html.png'
import icon9 from '../assets/icons/bootstrap.png'
import icon10 from '../assets/icons/figma.png'
import icon11 from '../assets/icons/react.png'

export const Skills = () => {
    const skillset = [
        icon1,
        icon2,
        icon3,
        icon4,
        icon5,
        icon6,
        icon7,
        icon8,
        icon9,
        icon10,
        icon11,
    ]
    return (
        <>
            <h1 className='set'>Skillset</h1>
            <div className='skills'>
                {skillset.map((each) => {
                    return (
                        <>
                            <div className='circle'>
                                <img src={each} />
                            </div>
                        </>
                    )
                })}
            </div>
            <h1 className='set'>Projects</h1>
        </>
    )
}
