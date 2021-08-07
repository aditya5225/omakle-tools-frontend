/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import NotificationsIcon from 'mdi-react/NotificationsIcon';
import { connect } from 'react-redux';
import moment from "moment-timezone";
import CircleIcon from "mdi-react/CircleIcon"

// const notifications = [
//   {
//     ava: `${process.env.PUBLIC_URL}/img/topbar/ava.png`,
//     name: 'Cristopher Changer',
//     message: ' has started a new project',
//     date: '09:02',
//   },
//   {
//     ava: `${process.env.PUBLIC_URL}/img/topbar/ava2.png`,
//     name: 'Sveta Narry',
//     message: ' has closed a project',
//     date: '09:00',
//   },
//   {
//     ava: `${process.env.PUBLIC_URL}/img/topbar/ava3.png`,
//     name: 'Lory McQueen',
//     message: ' has started a new project as a Project Managert',
//     date: '08:43',
//   },
//   {
//     ava: `${process.env.PUBLIC_URL}/img/topbar/ava2.png`,
//     name: 'Cristopher Changer',
//     message: ' has closed a project',
//     date: '08:43',
//   },
// ];

 class TopbarNotification extends Component {
  state = {
    collapse: false,
  };

  toggle = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  };

 render_date = (add_date) => {

    if (typeof (add_date) === "undefined") {
        return;
    }

    const convert_date = new Date(add_date);
    const added_date = moment.tz(convert_date, "Australia/Sydney").format("DD/MM/YYYY HH:mm");
    return added_date;
}

  render() {
    const { collapse } = this.state;
    return (
      <div className="topbar__collapse mr-0">
        <button className="topbar__btn" type="button" onClick={this.toggle}>
          <NotificationsIcon />
        </button>
        {collapse && <button className="topbar__back" type="button" onClick={this.toggle} />}
        <Collapse
          isOpen={collapse}
          className="topbar__collapse-content" style={{zIndex:"101"}} onClick={this.toggle}
        >
         
          <div className="topbar__collapse-title-wrap">
            <p className="topbar__collapse-title">Notifications</p>
           {/*  <button className="topbar__collapse-button" type="button">Mark all as read</button> */}
          </div>

          {this.props.notificationsData.filter(el => el.merchant_id === this.props.merchant._id).slice(0,2).map((notification, index) => (
            <div className="topbar__collapse-item" key={index} style={{padding:"12px 40px"}}>
              <div className="topbar__collapse-img-wrap">
              <span className="mr-2" style={{ fontSize: "0.6rem", color: "#4CE1B6"}}><CircleIcon style={{height:"11px", width:"11px" }}/></span>
              </div>
              <div className="topbar__collapse-message">
                <p className="topbar__collapse-name">{notification.title}</p>
                <p>{notification.description}</p>
              </div>
              <p className="topbar__collapse-date">{this.render_date(notification.date)}</p>
            </div>
          ))}
          <Link className="topbar__collapse-link" to="/notifications">
            See all notifications
          </Link>
        </Collapse>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
      merchant: state.auth.registeredUser,
      notificationsData: state.header.notifications
  }
};

export default connect(mapStateToProps)(TopbarNotification)