import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import Archieve from "mdi-react/ArchiveOutlineIcon";
import Bike from 'mdi-react/BikeIcon'
const SidebarBox = ({ boxHeading, boxContent, boxImage, boxLink, onClick, sidebarCollapse, collapseSidebarImage }) => {
    return (
        <Fragment>
            {!sidebarCollapse ?
                <NavLink to={boxLink} onClick={onClick}>
                    <div className='flex ba b--light-gray pa2 ma2 ' style={{ marginBottom: "0.8rem" }}>
                        <div className='w-70 items-end '>
                            <span className='gray' style={{ fontSize: '14px', fontWeight: '500' }}>{boxHeading}</span>
                            <br />
                            <span className=' gray' style={{ fontSize: '13px' }} >{boxContent}</span>
                        </div>
                        <div className='w-30 flex items-start'>
                            <img src={boxImage} alt="" style={{ width: '90%', height: '90%', padding: '0px', margin: '0px' }} />
                        </div>

                    </div>
                </NavLink>
                : <NavLink to={boxLink} style={{ marginBottom: "10px",marginTop: "6px" }}>
                    {/* <img src={collapseSidebarImage} alt="" style={{ width: '40px', height: '40px', padding: '0px', margin: '0px' }} /> */}
                    {boxHeading === "DELIVERY SOLUTION" ? <Archieve style={{ width: "19px", color: "#d2d2d2", marginLeft: "15px" }} /> : <Bike style={{ width: "19px", color: "#d2d2d2", marginLeft: "15px" }}/>}{/*<div className="qrmodal_checkin-poster" style={{
                        backgroundImage: `url(${collapseSidebarImage})`, backgroundPosition: "center",
                        backgroundRepeat: "no-repeat", backgroundSize: "contain", height: "55px", width: "55px"
                    }}>
                    </div> :
                        <div className="qrmodal_checkin-poster" style={{
                            backgroundImage: `url(${collapseSidebarImage})`, backgroundPosition: "center",
                            backgroundRepeat: "no-repeat", backgroundSize: "contain", height: "30px", width: "50px"
                        }}>
                        </div>*/}
                </NavLink>}
        </Fragment>
    )
}

export default SidebarBox
