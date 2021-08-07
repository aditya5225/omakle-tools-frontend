import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './topbarProfile/TopbarProfile';
// import TopbarMail from './TopbarMail';
import TopbarNotification from './topbarNotification/TopbarNotification';
// import TopbarSearch from './TopbarSearch';
// import TopbarLanguage from './TopbarLanguage';
import TopbarProducts from "./topbarProducts/TopbarProducts";
import TopbarPos from "../topbar/topbarPos/TopbarPos";
import TopbarPricing from "./topbarPricing/TopbarPricing";
import { UserProps } from '../../../shared/prop-types/ReducerProps';
import Support from './Support/Support';
import ChefScreen from './ChefScreen/ChefScreen';
import POSScreen from './POSScreen/POSScreen';
import LogoutIcon from "mdi-react/LogoutIcon";
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Logout } from './Logout';





const Topbar = ({
    changeMobileSidebarVisibility, changeSidebarVisibility, user,
}) => (
    <div className="topbar">
        <div className="topbar__left">
            <TopbarSidebarButton
                changeMobileSidebarVisibility={changeMobileSidebarVisibility}
                changeSidebarVisibility={changeSidebarVisibility}
            />
            <Link className="topbar__logo" to="/dashboard" />
        </div>
        <div className="topbar__right">
            {/*  <TopbarSearch />
      <div className="topbar__right-search">
      </div> */}
            <div className="topbar__right-over">
                {/* <TopbarPos />
                    <TopbarProducts />
                    <TopbarPricing />*/}
                <POSScreen />
                <ChefScreen />
                <Support />
                <TopbarNotification />
                {/* <TopbarMail new /> */}
                <TopbarProfile />
                <Logout />
                {/* <TopbarLanguage /> */}
            </div>
        </div>
    </div>
);

Topbar.propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
    changeSidebarVisibility: PropTypes.func.isRequired,
    user: UserProps.isRequired,
};

export default Topbar;
