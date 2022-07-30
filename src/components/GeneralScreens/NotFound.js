import React from "react";
import { Link } from "react-router-dom";
import "../../Css/NotFound.css";
import image from'./404.jpg';

const errorStyle = {
  backgroundImage: 'url('+image+')',
  backgroundSize: 'cover',
  objectFit : 'contain',
  backgroundPosition: 'center',
  cursor: 'pointer'
}
const NotFound = () => (
  <>
    <div onClick={() => window.location.href.pathname('/')} style={errorStyle} className="notFound">
      <Link to='/'>Back home</Link>
      {/* <div className='stars'></div>
      <div className='stars2'></div>
      <div className='stars3'></div>
      <div className='title'>
        <span className="text404">
          404
        </span>
        <br />
        <span>
          PAGE NOT FOUND
        </span>
      </div> */}
    </div>

  </>

);

export default NotFound;