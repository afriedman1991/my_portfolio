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
	mobileSideBar: {
		position: "relative",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		width: "100vw",
		height: "10vh",
		maxWidth: "95vw",
		maxHeight: "10vh",
		borderRadius: "20px",
		background: "rgba(83, 83, 83, 0.25",
		backdropFilter: "blur(13px)",
		WebkitBackdropFilter: "blur(13px)",
		border: "1px solid rgba(255, 255, 255, 0.18",
		marginBottom: "1vh",
	},
	mobileSideBarContainer: {
		position: "absolute",
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-end",
		justifyContent: "center",
		width: "100vw",
		height: "100vh",
	}
};

const SideBar = function(props) {
	const [iconContainerStyle, setIconContainerStyle] = useState(false);
	const [iconStyle, setIconStyle] = useState(false);

	return (
		<div className="sideBar" style={props.isMobile ? styles.mobileSideBarContainer : styles.SideBarContainer}>
			<div
			onMouseEnter={() => {
				setIconContainerStyle(true);
				setIconStyle(true);
			}}
			onMouseLeave={() => {
				setIconContainerStyle(false);
				setIconStyle(false)
			}}
			style={props.isMobile ? styles.mobileSideBar : styles.SideBar}>
				{props.iconList.map((icon, i) =>{
					return <Icon key={i}
					showModal={props.showModal} 
					iconSrc={icon.source} 
					iconName={icon.iconName} 
					description={icon.description}
					icon={icon}
					containerStyle={iconContainerStyle}
					iconStyle={iconStyle}
					isMobile={props.isMobile}
				/>})}
			</div>
		</div>
	)
}

export default SideBar;