import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='mt-5 vh-100 w-100 d-flex contact flex-column align-items-center justify-content-center'>
            <div className="w-100 d-flex contact flex-row align-items-center justify-content-center" style={{ "maxWidth": "500px" }}>
                <div className="col-md-6 mail-icon d-flex align-items-center flex-column text-center">
                    <CiMail className='mail-iconn' />
                    Jeko.erg@gmail.com
                </div>
                <div className="col-md-6 flex-column mail-icon text-center ">
                    <FaLinkedin className='mail-iconn' />
                    <a className='mail-icon' href="https://www.linkedin.com/in/jemiko-199730225/">Linkedin.com/jemiko</a>
                </div>
            </div>
        </div>
    )
}
