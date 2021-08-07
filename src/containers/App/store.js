import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import {
  cryptoTableReducer,
  newOrderTableReducer,
  sidebarReducer,
  themeReducer,
  customizerReducer,
  todoReducer,
  rtlReducer,
  authReducer as userReducer,
} from '../../redux/reducers/index';
import covidReducer from '../Maps/VectorMapWithRequestData/redux/covidReducer';

import authReducer from "../../store/reducers/auth";
import posProducts from "../../store/reducers/posProducts";
import quickBillsReducer from '../../store/reducers/quickBills';
import merchantReducer from '../../store/reducers/merchant';
import customerReducer from '../../store/reducers/customerReducer';
import headerReducer from '../../store/reducers/header';
import seatMapFloorsAndRoomsReducer from '../../store/reducers/seatMapFloorsAndRoomsReducer';
import seatMapTablesReducer from '../../store/reducers/seatMapTablesReducer';
import seatMapComponentsReducer from '../../store/reducers/seatMapComponentsReducer';
import seatMapAddOnsReducer from '../../store/reducers/seatMapAddOnsReducer';
import previewFrontEndReducer from '../../store/reducers/previewFrontEndReducer';
import usersRolesReducer from '../../store/reducers/usersRoles';
import reservationFormSettingReducer from "../../store/reducers/reservtnFormSetting";
import workingTimeForm from "../../store/reducers/workingTimeForm";
import bookingReducer from "../../store/reducers/booking";
import customerSideBooking from '../../store/reducers/customerSideBooking';
import panelSwitchReducer from '../../store/reducers/panelSwitchReducer'
import pos_items from '../../store/reducers/pos_items'
import mailTemplates from '../../store/reducers/emailTemplates';
import { composeWithDevTools } from 'redux-devtools-extension';



const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  rtl: rtlReducer,
  sidebar: sidebarReducer,
  cryptoTable: cryptoTableReducer,
  newOrder: newOrderTableReducer,
  customizer: customizerReducer,
  todos: todoReducer,
  user: userReducer,
  covid: covidReducer,
  seatMapFloorsAndRoomsReducer: seatMapFloorsAndRoomsReducer,
  seatMapTablesReducer: seatMapTablesReducer,
  seatMapComponentsReducer: seatMapComponentsReducer,
  seatMapAddOnsReducer: seatMapAddOnsReducer,
  auth: authReducer,
  quickBills: quickBillsReducer,
  merchant: merchantReducer,
  header: headerReducer,
  previewFrontEndReducer,
  reservationFormSettings: reservationFormSettingReducer,
  workingTimeForm,
  usersRoles: usersRolesReducer,
  bookings: bookingReducer,
  customersideBookings: customerSideBooking,
  mailTemplates: mailTemplates,
  posProducts:posProducts,
  panelSwitchReducer:panelSwitchReducer,
  customerReducer: customerReducer,
  posItems:pos_items,
});



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
