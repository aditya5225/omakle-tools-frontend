
import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../scss/MainWrapper.scss';
import Icon from '@mdi/react'
import { mdiChevronRight, mdiMenuDown, mdiRadiusOutline } from '@mdi/js'


const MainWrapper = ({ children }) => {

  return (
    <div className='main_wrapper'>
      <Link to='/'>
        <div className='home_button'>
        </div>
      </Link>

      <div className='background_icon'>
        <div className='background_icon_box'>
          <Icon path={mdiRadiusOutline}
            className='bk_icon'
            title="background icon"
            size={4}
            color="#4e7aee"
            spin={5}
          />
          <span className='omakle_text'></span>
        </div>
      </div>

      <div className= 'children_content'>
        {children}
      </div>
    </div>
  );
}


export default withRouter(MainWrapper);