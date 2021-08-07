import React, { Component, useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useHistory, withRouter } from "react-router-dom";
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse, Button } from 'reactstrap';
import { connect, useSelector, useDispatch } from "react-redux";
import { LogOut } from "react-feather"
import TopbarMenuLink from '../TopbarMenuLink';
// import { UserProps, AuthOProps } from '../../../../shared/prop-types/ReducerProps';
// import { hookAuth0 } from '../../../../shared/components/auth/withAuth0';
import client from "../../../../utils/api/HTTPClient.js";
import default_image from "../../../../assets/images/default_image.jpg"
import { switchBackend, switchFrontend } from '../../../../store/actions/panelSwitchActions';
import * as actionCreators from "../../../../store/actions/index";
import { Link } from 'react-router-dom';


const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

const TopbarProfile = (props) => {
    /* static propTypes = {
      user: UserProps.isRequired,
      auth0: AuthOProps.isRequired,
    } */
    const dispatch = useDispatch();
    const userID = useSelector(state => state.auth.merchantId)
    const companyData = useSelector((state) => state.auth.companyData);

    const merchants = useSelector((state) => state.auth.user_merchants);
    // console.log(merchants, "merchants")
    const company = useSelector((state) => state.auth.user_companies);

    const [collapse, setCollapse] = useState(false)
    const history = useHistory()
    const [logoutModal, setLogoutModal] = useState(false)
    const merchantData = JSON.parse(localStorage.getItem("merchant"))
    const currentPanel = useSelector(state => state.panelSwitchReducer.backendPanel)
    const [dropdownTitle, setDropdownTitle] = useState()
    const [path, setPath] = useState()

    //constructor(props) {
    //  super(props);
    //  this.state = {
    //    merchantData: props.merchant, //JSON.parse(localStorage.getItem("merchant")),
    //    logoutModal: false
    //  };
    //}

    useEffect(() => {
        if (currentPanel) {
            setDropdownTitle("Switch to frontend")
            setPath("/pos-landing")
        }
        else {
            setDropdownTitle("Switch to backend")
            setPath("/analytics")
        }
    }, [])

    const switched = () => {
        if (currentPanel) {
            dispatch(switchFrontend());
            setDropdownTitle("Switch to backend")
            setPath("/analytics")
            toggle();
        } else {
            dispatch(switchBackend());
            setDropdownTitle("Switch to frontend")
            setPath("/pos-landing")
            toggle();
        }
    }

    const toggle = () => {
        setCollapse(!collapse)
    };

    const toggleLogoutModal = () => {
        setLogoutModal(!logoutModal)
    }

    const onStoreClick = (company, merchant) => {

        dispatch(actionCreators.setActiveMerchant(merchant));
        dispatch(actionCreators.setActiveCompany(company));
        window.location.reload(true);

    }

    const handleLogout = () => {
        toggleLogoutModal()
        //dispatch(actionCreators.logout(userID, history))
        props.history.push("/account/logout")
        //history.push("/login")
    }

    const renderLogoutModal = () => {
        return (
            <Modal isOpen={logoutModal} toggle={toggleLogoutModal} className="modal-body" centered={true}>
                <form className="theme-form" noValidate="" >
                    <ModalHeader toggle={toggleLogoutModal}>Confirmation</ModalHeader>
                    <ModalBody style={{ textAlign: "center" }}>
                        <h5>You well be returned to the login screen</h5>
                        <div style={{ marginTop: "1rem" }}>
                            <Button color="secondary" className="square" size="sm" style={{ margin: "0 0.7rem" }}> Cancel </Button>
                            <Button color="primary" className="square" size="sm" style={{ margin: "0 0.7rem" }} onClick={handleLogout}> Logout </Button>
                        </div>
                    </ModalBody>
                </form>
            </Modal>
        );
    }

    const renderCompany = (item_c) => {

        let merchant_data = "";
        
        merchant_data = merchants && merchants.map(item =>
            item.company_id == item_c._id && merchantData._id != item._id ?
                 (<div className=" my-1" style={{ border: "1px solid #F2F4F7" }}>
                    <button onClick={() => onStoreClick(item_c, item)} className="topbar__avatar">
                        {item.profile_image == "" ? <img
                            className="topbar__avatar-img"
                            src={default_image}
                            alt="avatar"
                            style={{ height: "33px", width: "33px", margin: "3px", marginRight: "10px" }}
                        />
                            :
                            <img
                                className="topbar__avatar-img"
                                src={`${client.url(`images/merchant-profile/${item.profile_image}?${Date.now()}`)}`}
                                alt="avatar"
                                style={{ height: "30px", width: "30px", margin: "6px", marginRight: "10px" }}
                            />
                        }
                        <p className="topbar__avatar-name text-truncate" style={{ margin: "auto", fontSize: "11px", fontFamily: "'Roboto', sans-serif" }}>
                            {item.business_name}</p>
                    </button>
                </div>)
                :
                null
        )

        merchant_data = merchant_data.filter(function (el) {
            return el != null;
        });
        // console.log(merchant_data, "merchant_data")
        if (merchant_data && merchant_data.length >0) {
            return <div className="mt-2">
                <p style={{ width: "fit-content", marginLeft: "5px", fontSize: "10px", fontWeight: 'bold' }}>{item_c.companyName}</p>

                {
                    merchant_data
                }
            </div>
        }else{
            return null;
        }
    }

    return (
        merchantData?.business_name && merchantData?.business_name ?

            <div className="topbar__profile">
                {logoutModal && <renderLogoutModal />}
                <button className="topbar__avatar" type="button" onClick={toggle}>
                    <img
                        className="topbar__avatar-img mr-2"
                        //src={Ava}
                        //src={(auth0.user && auth0.user.picture) || user.avatar || Ava}
                        src={merchantData.profile_image == "" ? default_image : `${client.url(`images/merchant-profile/${merchantData.profile_image}?${Date.now()}`)}`}
                        alt="avatar"
                    />
                    
                    <p className="topbar__avatar-name text-truncate" style={{ margin: "auto", fontFamily: "'Roboto', sans-serif" }}>
                        {merchantData?.business_name}</p>
                    <DownIcon className="topbar__icon" />
                </button>
                {collapse && <button className="topbar__back" type="button" onClick={toggle} />}
                <Collapse isOpen={collapse} style={{ width: "250px" }} className="topbar__menu-wrap topbar__collapse-content">
                    <div className="topbar__menu" style={{ textAlign: "center", padding: "1rem 0.8rem" }}>
                        <div style={{ borderBlock: "3px solid #4CE1B6", borderInline: "1px solid #F2F4F7" }}>
                            <div className="d-flex pl-2 pb-2 mt-2" style={{ borderBottom: "1px solid #F2F4F7" }}>
                                <img
                                    className="topbar__avatar-img col-2 px-0"
                                    //src={Ava}
                                    //src={(auth0.user && auth0.user.picture) || user.avatar || Ava}
                                    src={merchantData.profile_image == "" ? default_image : `${client.url(`images/merchant-profile/${merchantData.profile_image}?${Date.now()}`)}`}
                                    alt="avatar"
                                />
                                <div className="col-10">
                                    <h5 className="text-truncate" style={{ textAlign: "left", textOverflow: 'ellipsis' }}>  <b style={{ color: "grey" }} >{merchantData?.business_name.toUpperCase()}</b></h5>
                                    <p className="text-truncate" style={{ margin: "0", textAlign: "left", textOverflow: 'ellipsis' }}>{merchantData.ipay_id}</p>
                                </div>
                            </div >
                            
                            <div className="col px-2">

                                {company && company.map(item_c =>
                                    renderCompany(item_c)
                                )
                                }

                            
                                <div className="topbar__menu-divider" style={{ marginBlock: "10px", borderColor: "#F2F4F7" }} />
                                <div className="d-flex">
                                    <Link to='/manage-stores'>
                                        <button onClick={toggle} className="mb-2 py-2 px-2" style={{ fontSize: "10px", borderRadius: 0, color: '#2eb47e', background: '#B9F3E3', border: '0px solid #2eb47e', paddingLeft: '0.6rem', paddingRight: '0.65rem' }}   >Manage Stores</button>
                                    </Link>

                                    <Link to='/manage-companies'>
                                        <button onClick={toggle} className="mb-2 mt-0 py-2 " style={{ fontSize: "10px", borderRadius: 0, color: '#2eb47e', background: '#B9F3E3', border: '0px solid #2eb47e', paddingLeft: '0.80rem', paddingRight: '0.80rem', marginLeft: '0.30rem' }}   >Manage Companies</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <TopbarMenuLink
              title="Account Settings"
              icon="cog"
              path="/account/profile"
              onClick={this.toggle}
            /> */}
                        {/* <TopbarMenuLink
              title="Lock Screen"
              icon="lock"
              path="/lock_screen"
              onClick={this.toggle}
            /> */}
                        {/* {auth0.isAuthenticated && ( */}
                        {/* <TopbarMenuLink
                title="Log Out Auth0"
                icon="exit"
                path="/log_in"
                //onClick={auth0.logout}
              /> */}
                        {/* )
            } */}
                        {/* <TopbarMenuLink
              title="Log Out"
              icon="exit"
              path="/logout"
              onClick={this.logout}
            /> */}
                        {/* <a href="/account/logout" style={{ textAlign: "center" }}>
                            <Button color="primary" size="sm" style={{ width: "95%", margin: "auto" }} onClick={toggleLogoutModal}><LogOut /> Logout</Button>
                        </a> */}
                    </div>
                </Collapse>

            </div> : null
    );
}
const mapStateToProps = state => {
    return {
        merchant: state.auth.registeredUser
    }
}

//export default hookAuth0(TopbarProfile);
export default connect(mapStateToProps)(withRouter(TopbarProfile));