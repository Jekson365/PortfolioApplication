import React from 'react'

export const Footer = () => {
    return (
        <div className='mt-5 vh-100 w-100 d-flex contact flex-column align-items-center justify-content-center'>
            <div className="w-100 d-flex contact flex-column align-items-center justify-content-center" style={{ "maxWidth": "500px" }}>
                <h1>Contact</h1>
                <input type="text" value="jeko.erg@gmail.com" readOnly />
                <textarea name="" id="" cols="10" rows="10" placeholder='your message'></textarea>
                <button type="submit" className='sb' >Send</button>
            </div>
        </div>
    )
}
