import React, { Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../../scss/app.scss";
import Router from "./Router";

const App = () => {

	return (
		<Fragment>
			<BrowserRouter basename="/">
				<div>
					<Router />
				</div>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
