import React, { useState } from "react";
import { Redirect, Route, useHistory, withRouter, Switch } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import Layout from "../../../Layout/index";
import Commerce from "./Commerce";
import Crypto from "./Crypto";
import Documentation from "./Documentation";
import DefaultPages from "./DefaultPages";
import Account from "./Account";
import Maps from "./Maps";
import Charts from "./Charts";
import Tables from "./Tables";
import Forms from "./Forms";
import UI from "./UI";
import Store from "../../../../pages/store/Store";
import Chat from "../../../Chat/index";
import Todo from "../../../Todo/index";

import FitnessDashboard from "../../../Dashboards/Fitness/index";
import DefaultDashboard from "../../../Dashboards/Default/index";
import MobileAppDashboard from "../../../Dashboards/MobileApp/index";
import BookingDashboard from "../../../Dashboards/Booking/index";

import Mail from "../../../Mail/index";
import * as actionCreators from "../../../../store/actions/index";
import { useEffect } from "react";
import Container from "./Container";

import PosCheckout from "../../../../pages/posSettings/PosCheckout";
import PosProducts from "../../../../pages/posSettings/PosProducts";
import PosSettings from "../../../../pages/posSettings/PosSettings";
import MyQrcodePage from "../../../../pages/myQrcodePage/MyQrcodePage";
import TransactionPage from "../../../../pages/transactions/TransactionPage";
import PaymentInvoices from "../../../../pages/paymentInvoices/PaymentInvoices";
import AppDownloadPage from "../../../../pages/AppDownload/AppDownloadPage";
import Schedule from "../../../../pages/schedule/Schedule";
import ReservationList from "../../../../pages/reservationList/ReservationList";
import ReservationSettings from "../../../../pages/reservationSettings/ReservationSettings";
import PosOrders from "../../../../pages/posSettings/Settings/PosOrders";
import PreviewFrontEnd from "../../../../pages/previewFrontEnd/PreviewFrontEnd";
import ManageUsersAndRoles from "../../../../pages/manageUsersAndRoles/ManageUsersRoles";
import SettingsProfile from "../../../../pages/settingsProfile/SettingsProfile";
import OperatingHours from "../../../../components/posSettings/operatingHours/OperatingHours.jsx";
import GuestCheckInPage from "../../../../pages/guestCheckIn/GuestCheckIn";
import UpdateReservation from "../../../../pages/reservationList/UpdateReservation";
import AddReservation from "../../../../pages/reservationList/AddReservation";
import DeliveryPartners from "./DeliveryPartners";
import Notifications from "../../../../pages/notifications/Notifications";
import HeaderSupportPage from "../../../../pages/headerSupport/HeaderSupport";
import logoutPage from "../../../../pages/auth/logout/logout";
import Customer from "../../../../pages/posSettings/Settings/PosCustomer";
import Staff from "../../../../pages/posSettings/PosStaff";
import PosLanding from "../../../../pages/posSettings/PosLanding";
import Dashboard from "../../../../pages/dasboard/Dashboard";
import people from "../../../../pages/people/People";
import Hardwares from "../../../../pages/Hardwares/Hardwares";
import VerifyStorePage from "../../../../pages/verifyStorePage/VerifyStorePage.jsx";
import ManageStoresPage from "../../../../pages/manageStoresPage/ManageStoresPage";
import ManageCompaniesPage from "../../../../pages/manageCompaniesPage/ManageCompaniesPage";
import CompanySettings from "../../../../pages/CompanySettings";
import FeaturesPage from "../../../../pages/featuresPage/FeaturesPage";
import CreateCompany from "../../../../components/companySettings/CreateCompany";
import UpdateItemsPageForm from "../../../../components/Product/itemsPage/UpdateItemsPageForm";
import UpdateVarientParent from "../../../../components/Product/itemsPage/components/UpdateVarientsParents"
import UpdateVarient from "../../../../components/Product/itemsPage/components/UpdateVarient"
import SubscriptionPlanPage from "../../../../pages/subscriptionPlanPage/SubscriptionPlanPage";
import SubscriptionPlanCheckoutPage from "../../../../pages/subscriptionPlanCheckoutPage/SubscriptionPlanCheckoutPage";


const WrappedRoutes = (props) => {
	const currentPanel = useSelector((state) => state.panelSwitchReducer.backendPanel);
	const [reservationSettingsSteps, setreservationSettingsSteps] = useState(0)
	// const [registeredUser, setregisteredUser] = useState(null)

	const registeredUser = useSelector((state) => state.auth.registeredUser);
	const user_merchants = useSelector((state) => state.auth.user_merchants);

	useEffect(() => {
		props.setStoreCompany();
	}, []);

	useEffect(() => {
		props.validateStore();
	}, [user_merchants]);

	useEffect(() => {
		if (registeredUser) {
			setreservationSettingsSteps(registeredUser.reservation_settings_steps);
		}
	}, [registeredUser])


	return (
		<div>
			{currentPanel ? (
				<div>
					{registeredUser ?
						<>
							<Layout />
							<Container>
								<Switch>
									{/* Comented by me */}
									<Route path="/analytics" component={Commerce} />
									<Route path="/account/logout" component={logoutPage} />
									<Route path="/dashboard" component={Dashboard} />
									<Route path="/download-app" component={AppDownloadPage} />
									<Route path="/transactions" component={TransactionPage} />
									<Route path="/payment-invoices" component={PaymentInvoices} />
									<Route path="/manage-users-roles" component={ManageUsersAndRoles} />
									<Route path="/profile" component={SettingsProfile} />
									<Route path="/guest-check-in" component={GuestCheckInPage} />
									<Route path="/people" component={people} />
									<Route path="/verify-store" component={VerifyStorePage} />
									<Route path="/manage-stores" component={ManageStoresPage} />
									<Route path="/manage-companies" component={ManageCompaniesPage} />
									<Route path="/item-update" component={UpdateItemsPageForm} />
									<Route path="/varient/parent-update" component={UpdateVarientParent} />
									<Route path="/update-varient" component={UpdateVarient} />
									<Route path="/subscription-plans" component={SubscriptionPlanPage} />
									<Route path="/subscription-plans-checkout" component={SubscriptionPlanCheckoutPage} />

									{reservationSettingsSteps >= 6 && <Route path="/schedule" component={Schedule} />}
									{reservationSettingsSteps >= 6 && <Route path="/reservation-list" component={ReservationList} />}
									{reservationSettingsSteps >= 6 && <Route path="/preview-frontend" component={PreviewFrontEnd} />}
									{reservationSettingsSteps >= 6 && <Route path="/update-reservation" component={UpdateReservation} />}
									{reservationSettingsSteps >= 6 && <Route path="/add-reservation" component={AddReservation} />}
									<Route path="/reservation-settings" component={ReservationSettings} />
									<Route path="/pos-settings" component={PosSettings} />
									<Route path="/pos-Customers" component={Customer} />
									<Route path="/pos-Staff" component={Staff} />
									<Route path={`/store/:merchant_id`} component={Store} />
									<Route path="/features" component={FeaturesPage} />

									<Route path="/qr-details" component={MyQrcodePage} />
									<Route path="/notifications" component={Notifications} />
									<Route path="/contact-us" component={HeaderSupportPage} />
									{/* // <Route path="/" component={Commerce} /> */}

									<Route path="/delivery-partners" component={DeliveryPartners} />
									<Route path="/dashboard_fitness" component={FitnessDashboard} />
									<Route path="/dashboard_crypto" component={Crypto} />
									<Route exact path="/dashboard_mobile_app" component={MobileAppDashboard} />
									<Route path="/dashboard_booking" component={BookingDashboard} />
									<Route path="/ui" component={UI} />
									<Route path="/mail" component={Mail} />
									<Route path="/chat" component={Chat} />
									<Route path="/todo" component={Todo} />
									<Route path="/forms" component={Forms} />
									<Route path="/tables" component={Tables} />
									<Route path="/charts" component={Charts} />
									<Route path="/maps" component={Maps} />
									<Route path="/account" component={Account} />
									<Route path="/default_pages" component={DefaultPages} />
									<Route path="/documentation" component={Documentation} />
									<Route path="/pos-orders" component={PosOrders} />
									<Route path="/pos-products" component={PosProducts} />
									<Route path="/Hardwares" component={Hardwares} />
									<Route path="/company-setting" component={CompanySettings} />
									<Route path="/create" component={CreateCompany} />
									<Redirect from="*" to="/dashboard" />
									{/* End  Comented by me */}
								</Switch>
							
							</Container>
						</>
						:
						<Switch>
							<Route path="/manage-stores" component={ManageStoresPage} />
							<Redirect from="*" to="/manage-stores" />

						</Switch>

					}
				</div>
			) : (
				<Switch>
					<Route path="/pos-checkouts" component={PosCheckout} />
					<Route path="/pos-landing" component={PosLanding} />
					<Redirect from="*" to="/pos-checkouts" />
				</Switch>
			)}
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		setStoreCompany: (history) => dispatch(actionCreators.setStoreCompanyList(history)),
		validateStore: (history) => dispatch(actionCreators.validateStore(history))
	};
};

export default connect(undefined, mapDispatchToProps)(withRouter(WrappedRoutes));
