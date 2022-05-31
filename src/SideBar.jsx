import React from 'react';
import Icon from './Icon.jsx';

const SideBarStyles = {
	display: "flex",
	flexDirection: "column",
	alignItems: "start",
	justifyContent: "start",
	width: "9vw",
	height: "100vh",
	outline: "solid 3px #333",
}

const SideBar = function(props) {
	return (
		<div style={SideBarStyles}>
			{props.iconList.map((icon, i) =>{
				return <Icon key={i} 
				showModal={props.showModal} 
				iconSrc={icon.source} 
				projectName={icon.projectName} 
				description={icon.description}
				icon={icon}
			/>})}
		</div>
	)
}

export default SideBar;