import React, {useState} from 'react';
import Icon from './Icon.jsx';

const styles = { 
	SideBar: {
		position: "relative",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
		width: "auto",
		height: "auto",
		maxWidth: "5vw",
		maxHeight: "100vw",
		borderRadius: "16px",
		background: "rgba(83, 83, 83, 0.25",
		backdropFilter: "blur(13px)",
		WebkitBackdropFilter: "blur(13px)",
		border: "1px solid rgba(255, 255, 255, 0.18",
		marginLeft: "1vw",
	},
	SideBarContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: "auto",
		height: "100vh",
	},
};

const SideBar = function(props) {
	const [iconContainerStyle, setIconContainerStyle] = useState(false);
	const [iconStyle, setIconStyle] = useState(false);

	return (
		<div style={styles.SideBarContainer}>
			<div
			onMouseEnter={() => {
				setIconContainerStyle(true);
				setIconStyle(true);
			}}
			onMouseLeave={() => {
				setIconContainerStyle(false);
				setIconStyle(false)
			}}
			style={styles.SideBar}>
				{props.iconList.map((icon, i) =>{
					return <Icon key={i} 
					showModal={props.showModal} 
					iconSrc={icon.source} 
					iconName={icon.iconName} 
					description={icon.description}
					icon={icon}
					containerStyle={iconContainerStyle}
					iconStyle={iconStyle}
				/>})}
			</div>
		</div>
	)
}

export default SideBar;