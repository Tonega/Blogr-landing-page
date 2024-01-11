import React from "react";
import '../Css/Blogr.css';
import picture from '../assets/images/illustration-phones.svg'

const Blogr = () => {
    return(
        <>
        <div className="state">
            <div className="mid">
                <img className="pic" src={picture} alt="" />
            </div>
          <div className="text">
            <h1>State of the Art Infrastructure</h1>
            <p>With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.</p>
          </div>
        </div>
        </>
    )
}

export default Blogr