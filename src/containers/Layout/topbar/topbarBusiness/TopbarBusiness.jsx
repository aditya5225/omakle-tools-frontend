import React from 'react';
const TopbarBusiness = () => {
	const merchantData = JSON.parse(localStorage.getItem("merchant"))
	return (
		<div className="topbar__profile">
			<button className="topbar__avatar" type="button" style={{ borderLeft: "1px solid #CDCDCD", borderRight: "1px solid #CDCDCD",width:"110px"}}>
				<p className="topbar__avatar-name text-truncate" style={{ margin: "auto", fontFamily: "'Roboto', sans-serif" }}>
					{merchantData?.business_name}
				</p>
			</button>
		</div>
	);
}

export default TopbarBusiness;