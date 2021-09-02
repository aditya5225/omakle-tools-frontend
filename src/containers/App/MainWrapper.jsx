
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import '../../scss/MainWrapper.scss';
import Icon from '@mdi/react'
import { mdiChevronRight, mdiMenuDown, mdiRadiusOutline } from '@mdi/js'


const MainWrapper = ({ children }) => {

  return (
    <div className='main_wrapper'>
      <div className='home_button'>
      </div>

      <div className='background_icon'>
        <div className='background_icon_box'>
          <p>
            <Icon path={mdiRadiusOutline}
              className='bk_icon'
              title="background icon"
              size={4}
              color="#4e7aee"
              spin={5}
            />
            makle </p>
        </div>
      </div>
      {children}
    </div>
  );
}


export default withRouter(MainWrapper);