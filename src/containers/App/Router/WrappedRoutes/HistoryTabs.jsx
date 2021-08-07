import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { Card } from "reactstrap";

const HistoryTabs = (props) => {
	//const [tabsData, setTabsData] = useState(['/analytics']);

	const [tabsData, setTabsData] = useState([{ tabName: "Dashboard", tabLink: "/dashboard" }]);

	useEffect(() => {
		let getUrl = [...tabsData];
		let getData = getUrl.findIndex((val) => val.tabLink == props.history.location.pathname);

		if (getData == -1) {
			const tabname = props.history.location.pathname.split("/")[1].replace(/-/g, " ");
			if (tabname === "pos settings") {
				getUrl.push({ tabName: "POS settings", tabLink: props.history.location.pathname });
				setTabsData(getUrl);
			} else {
				getUrl.push({ tabName: tabname, tabLink: props.history.location.pathname });
				setTabsData(getUrl);
			}
		}
	}, [props.history.location.pathname]);

	const setNextActiveTab = (link) => {
		const getIndexofCurruntTab = tabsData.findIndex((tab) => link == tab.tabLink);
		if (link == props.history.location.pathname) {
			if (getIndexofCurruntTab == tabsData.length - 1) {
				props.history.push(tabsData[getIndexofCurruntTab - 1].tabLink);
			} else {
				props.history.push(tabsData[getIndexofCurruntTab + 1].tabLink);
			}
		}
	};

	return (
		<Card style={{ paddingBottom: "10px" }}>
			<div>
				{tabsData.map((tab, index) => {
					return (
						<div
							key={index}
							className={"m-1 rounded d-inline-block"}
							style={
								props.history.location.pathname == tab.tabLink
									? { backgroundColor: "#45C7A2", fontSize: "16px" }
									: { background: "#fff" }
							}
						>
							<div className="d-flex">
								<Link to={tab.tabLink}>
									<p
										className={"ml-2 mr-1 px-1 py-1  text-capitalize"}
										style={props.history.location.pathname == tab.tabLink ? { color: "#fff" } : { color: "#343a40" }}
									>
										{tab.tabName}
									</p>
								</Link>
								<button
									style={
										index == 0
											? { display: "none" }
											: props.history.location.pathname == tab.tabLink
											? {
													background: "transparent",
													border: "none",
													fontSize: "1rem",
													color: "#fff",
											  }
											: {
													background: "transparent",
													border: "none",
													fontSize: "1rem",
													color: "#6c757d",
											  }
									}
									onClick={() => {
										let getUrl = [...tabsData];
										getUrl = getUrl.filter((val) => val.tabLink !== tab.tabLink);
										setTabsData(getUrl);
										setNextActiveTab(tab.tabLink);
									}}
									type="button"
								>
									{" "}
									&#10006;{" "}
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</Card>
	);
};

export default withRouter(HistoryTabs);
