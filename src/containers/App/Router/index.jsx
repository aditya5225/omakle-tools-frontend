import React, { useState, useEffect } from "react";
import {
	Route,
	Switch,
	Redirect,
	withRouter,
	// useParams
} from "react-router-dom";
import MainWrapper from "../MainWrapper";
import Landing from '../../landingPage/LandingPage';
import YoutubeThumbnailDownloaderPage from '../../../pages/webTools/youtubeThumbnailDownloaderPage/YoutubeThumbnailDownloaderPage';


const Router = (props) => {


	return (
		<MainWrapper>
			<main>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/tools/youtube-thumbnail-downloader" component={YoutubeThumbnailDownloaderPage} />
					<Redirect from="*" to="/" />
				</Switch>
			</main>
		</MainWrapper>
	);
};


export default withRouter(Router);
