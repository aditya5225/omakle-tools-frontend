import React, { useState, useEffect } from "react";
import {
	Route,
	Switch,
	Redirect,
	withRouter,
	// useParams
} from "react-router-dom";
import Landing from '../../Landing/index';


const Router = (props) => {


	return (
		<main>
			<Switch>
				<Route exact path="/" component={Landing} />
				{/* <Route path="/account/logout" component={logoutPage} />
					<Route path="/register" component={RegisterPage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/setup-account" component={SetupAccount} />
					<Route path="/forget-password" component={ForgetPasswordPage} />
					<Route path="/verify-otp" component={VerifyOtpPage} />
					<Route path={`/create-password/:userId/:token`} component={CreatePasswordPage} />
					<Route path="/account-verification" component={AccountVerifiedPage} />
					<Route path="/account-created" component={Allset} />
					<Route path="/404" component={NotFound404} />
					<Route path={`/biz/:merchant_id`} component={ReservationHomepage} />
					<Route path={`/biz/:merchant_id/print-bookings`} component={PrintBookings} />
					<Route path="/allSet" component={Allsetpage} />
					<Route path="/awd" component={checkout} />
					<Redirect from="*" to="/login" /> */}
			</Switch>

			{/* <Loading loading={true} /> */}
		</main>
	);
};


export default withRouter(Router);
