import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopbarMenuLinks = ({
  title, icon, path, onClick, subtitle
}) => (
    <Link className="topbar__link" to={path?path:""} onClick={onClick} style={{height:"45px",padding:"12px"}}>
      <span className={`topbar__link-icon lnr lnr-${icon}`} />
      <div>
        <p className="topbar__link-title">{title}</p>
        <p style={{margin:"0"}}>{subtitle != null ? subtitle : ""}</p>
      </div>
    </Link>
  );

TopbarMenuLinks.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  //path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TopbarMenuLinks;
