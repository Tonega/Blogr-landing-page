import React from 'react'
import img1 from '../assets/images/illustration-laptop-mobile.svg'
import img2 from '../assets/images/illustration-laptop-desktop.svg'
import '../Css/Simple.css'

const Simple = () => {
  return (
    <>
    <div className="free">
        <div className="img">
        <img className='pic1' src={img1} alt="" />
        <img className='pic2' src={img2} alt="" />
        </div>
        <div className="open">
            <h1 className='simple'>Free, open, simple</h1>
            <p className='blogr'>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>

            <h1 className='power'>Powerful tooling</h1>
            <p className='blogr2'>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.</p>
        </div>
    </div>
    </>
  )
}

export default Simple