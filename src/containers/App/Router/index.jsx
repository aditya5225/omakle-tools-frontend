import React, { useState, useEffect } from "react";
import {
	Route,
	Switch,
	Redirect,
	withRouter,
	// useParams
} from "react-router-dom";
import Landing from '../../landingPage/LandingPage';


const Router = (props) => {


	return (
		<main>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Redirect from="*" to="/" />
			</Switch>
		</main>
	);
};


export default withRouter(Router);
