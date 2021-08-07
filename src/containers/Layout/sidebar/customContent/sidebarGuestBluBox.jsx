import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import { Badge } from 'reactstrap';
import Visitor from 'mdi-react/BadgeAccountOutlineIcon'

// import NewIcon from '../../../../assets/images/scan-me.png';
import visitor_checkin from "../../../../assets/images/visitor_checkin.png"

const sidebarGuestBluBox = ({ onClick, sidebarCollapse, newLink }) => {
    return (
        <Fragment >
            {!sidebarCollapse ?
                <NavLink to="/guest-check-in">
                    <div className='pa2 ma2 ba b--light-gray' onClick={onClick}>
                        <div className='flex items-center justify-start' style={{ paddingBottom: '5px' }}>
                            <span className='gray' style={{ fontSize: '14px', fontWeight: '500' }}>VISITORY REGISTER</span>
                            {newLink ? <Badge className="sidebar__link-badge"><span>New</span></Badge> : ''}
                            {/*  <img src={NewIcon} alt="" style={{ paddingLeft: '5px', width: '70px', height: '20px' }} /> */}
                        </div>
                        <div>
                            <span className='gray'>New contactless check-in
                            features that allow you to
                            check-in visitors</span>
                        </div>
                    </div></NavLink> :
                <NavLink to="/guest-check-in" style={{ marginTop: "6px" }}>
                    {/*  <img src={visitor_checkin} alt="" style={{ paddingLeft: '5px', width: '90%', height: '90%' }} /> */}
                    <Visitor style={{ width: "19px", color: "#d2d2d2", marginLeft: "15px" }} />
                </NavLink>}
        </Fragment>
    )
}

export default sidebarGuestBluBox
