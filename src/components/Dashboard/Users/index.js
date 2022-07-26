import React from 'react';
import "./index.css";
import Picture from "../../../assets/picture.png";



const index = () => {
  return (
    <div className='user_container'>
      <div>
        <div>
          <img src={Picture} alt="user" height={"40px"} width={"40px"}/>
        </div>
      </div>

      <div className='user_info'>
        <div className='user__name'>Charvie Sharma</div>
        <div className='user__email'>charviesharma@gmail.com</div>
      </div>
    </div>
  )
}

export default index;