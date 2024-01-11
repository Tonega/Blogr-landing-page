import React from "react";
import pic1 from '../assets/images/illustration-editor-mobile.svg';
import pic2 from '../assets/images/illustration-editor-desktop.svg';
import '../Css/Design.css';

const Design = ()=> {
    return (
        <>
        <h1 className="design">Designed for the future</h1>
        <div className="intro">
            <div className="image">
            <img className="img1" src={pic1} alt="" />
            <img className="img2" src={pic2} alt="" />
            </div>
          <div className="robust">
            <h1 className="editor">Introducing an extensible editor</h1>
            <p className="para">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.</p>

            <h1 className="manage">Robust content management</h1>
            <p className="para2">Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
            </div>
        </div>
        </>
    )
    }

export default Design