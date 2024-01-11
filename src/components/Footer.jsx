import React from 'react'
import '../Css/Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="blogr">
            <h1>Blogr</h1>
        </div>
        <div className="product">
            <h2>Product</h2>
            <ul>
                <li><a href="">Overview</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Marketplace</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Integrations</a></li>
            </ul>
        </div>
        <div className="product">
             <h2>Company</h2>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Careers</a></li>
            </ul>
        </div>
        <div className="product">
                 <h2>Connect</h2>
            <ul>
                <li><a href="">Contact</a></li>
                <li><a href="">Newsletter</a></li>
                <li><a href="">Linkedin</a></li>
            </ul>
        </div>
        </div>    
    </>
  )
}

export default Footer