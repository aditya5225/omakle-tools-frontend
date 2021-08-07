import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import AccountGroupOutline from 'mdi-react/AccountGroupOutlineIcon';
import SettingsIcon from '@material-ui/icons/Settings';

const SidebarLink = ({
  title, icon, newLink, route, onClick, customIcon
}) => (
  <NavLink
    to={route}
    onClick={onClick}
    activeClassName="sidebar__link-active"
  >
    <li className="sidebar__link">
            {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ''}
            {customIcon === "People" ? <AccountGroupOutline style={{ width: "16px", color: "#d2d2d2", marginTop: "-6px" }} /> : customIcon === "Setting" ? <SettingsIcon style={{ width: "16px", color: "#d2d2d2", marginTop: "-6px" }} />: null}
      <p className="sidebar__link-title">
        {title}
        {newLink ? <Badge className="sidebar__link-badge"><span>New</span></Badge> : ''}
      </p>
    </li>
  </NavLink>
);

SidebarLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  newLink: PropTypes.bool,
  route: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarLink.defaultProps = {
  icon: '',
  newLink: false,
  route: '/',
  onClick: () => {},
};

export default SidebarLink;
