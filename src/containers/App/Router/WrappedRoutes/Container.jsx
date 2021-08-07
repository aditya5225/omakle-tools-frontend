import React from 'react';
import { withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';
import * as actionCreators from "../../../../store/actions/index";
import { useEffect } from 'react';
import HistoryTabs from './HistoryTabs';
// import Commerce from './Commerce';
// import Crypto from './Crypto';
// import Documentation from './Documentation';
// import DefaultPages from './DefaultPages';
// import Account from './Account';
// import ECommerce from './ECommerce';
// import Maps from './Maps';
// import Charts from './Charts';
// import Tables from './Tables';
// import Forms from './Forms';
// import UI from './UI';
// import Chat from '../../../Chat/index';
// import Todo from '../../../Todo/index';
// import FitnessDashboard from '../../../Dashboards/Fitness/index';
// import DefaultDashboard from '../../../Dashboards/Default/index';
// import MobileAppDashboard from '../../../Dashboards/MobileApp/index';
// import BookingDashboard from '../../../Dashboards/Booking/index';
// import Mail from '../../../Mail/index';
// import { useDispatch, useSelector } from 'react-redux'
// import { getGhostPaper } from '@amcharts/amcharts4/.internal/core/rendering/Paper';




const Container = (props) => {


  // const { children } = props

  /*  useEffect(() => {
     props.onTryAutoSignup(props.history);
 
     //console.log("container");
   }, [children]); */

  useEffect(() => {
    let socket = socketIOClient('https://api.ipaypro.co');
    // let socket = socketIOClient("http://localhost:5000");
    socket.on('connect', () => {
      console.log("Socket Connected");

      socket.emit('joinipayrequest', { request_id: props.merchant._id });

      socket.on("merchantNotification", (data) => {
        //console.log(data);
        addNotification({
          title: data.title,
          subtitle: data.title,
          message: data.description,
          theme: 'darkblue',
          native: true // when using native, your OS will handle theming.
        });
      })
      socket.on("merchantAllNotification", data => {
        props.onSetNotificationsData(data)
      })

    });
    socket.on('disconnect', () => {
      socket.removeAllListeners();
      console.log("Socket Disconnected");
    });

  }, [])


  return (
    <div className="container__wrap">
      <HistoryTabs />
      {props.children}
      <ToastContainer />
      <Notifications />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    merchant: state.auth.registeredUser,
    tabs: state.tabsReducer
  }
}


const mapDispatchToProps = dispatch => {
  return {
    // onTryAutoSignup: (history) => dispatch(actionCreators.authCheckState(history)),
    onSetNotificationsData: (notifications) => dispatch(actionCreators.setNotifications(notifications))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Container))