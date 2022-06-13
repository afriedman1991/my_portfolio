import React from 'react';
import Clock from 'react-live-clock';
import Icon from './Icon.jsx';

const styles = {
	MenuBarContainer: {
		position: "absolute",
		display: "flex",
		flexDirection: "row",
		height: "5vh",
		width: "100vw",
		background: "rgba(83, 83, 83, 0.4)",
	},
	mobileMenuBarContainer: {
		position: "absolute",
		display: "flex",
		flexDirection: "row",
		height: "5vh",
		width: "100vw",
		background: "transparent",
	},
	MenuBarRight: {
		display: "flex",
		listStyleType: "none",
		justifyContent: "right",
		alignItems: "center",
		width: "100vw",
		background: "transparent",
	},
	mobileMenuBarRight: {
		display: "flex",
		listStyleType: "none",
		justifyContent: "right",
		alignItems: "center",
		width: "100vw",
		background: "transparent",
	},
	MenuBarLeft: {
		display: "flex",
		justifyContent: "left",
		alignItems: "center",
		width: "100vw",
		background: "transparent",
	},
	mobileMenuBarLeft: {
		display: "flex",
		justifyContent: "left",
		alignItems: "center",
		width: "100vw",
		background: "transparent",
	},
	MenuBarDateTime: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginRight: "2vw",
		width: "11.5vw",
		color: "white",
		fontFamily: "Space Mono"
	},
	mobileMenuBarDateTime: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginRight: "2vw",
		width: "auto",
		color: "white",
		fontFamily: "Space Mono",
		fontSize: "15px",
	},
	MeIcon: {
		width: "3vw",
		paddingLeft: "2vw",
	},
	mobileMeIcon: {
		width: "7.5vw",
		paddingLeft: "2vw",
	},
	Title: {
		color: "white",
		paddingLeft: "1vw",
		fontSize: "24px",
		fontFamily: "Space Mono"
	},
	mobileTitle: {
		color: "white",
		paddingLeft: "2vw",
		fontSize: "14px",
		fontFamily: "Space Mono"
	}
}

const MenuBar = (props) => {

	const getCurrentDate = () => {
		const currDate = new Date().toDateString();
		const dateLen = currDate.length - 4;
		console.log(dateLen, currDate);

		return currDate.slice(0, dateLen - 1);
	}

	return (
		<div style={props.isMobile ? styles.mobileMenuBarContainer : styles.MenuBarContainer}>
			<div className="menu-bar-left" style={props.isMobile ? styles.mobileMenuBarLeft : styles.MenuBarLeft}>
				<img alt="" style={props.isMobile ? styles.mobileMeIcon : styles.MeIcon} src="https://art.pixilart.com/sr20e13a17053e2.png" />
				<p style={props.isMobile ? styles.mobileTitle : styles.Title}>
					Alex Friedman
				</p>
			</div>
			<div className="menu-bar-left" style={props.isMobile ? styles.mobileMenuBarRight : styles.MenuBarRight}>

				{props.isMobile ? <></> : props.iconList.map((icon, i) =>{
					return <Icon
					key={i}
					iconSrc={icon.src} 
					icon={icon}
					className="menuBar"
				/>})}
				<div style={props.isMobile ? styles.mobileMenuBarDateTime : styles.MenuBarDateTime}>
					<div >{props.isMobile ? <></> : getCurrentDate()}</div>
					<Clock format={'h:mm a'} ticking={true} />
				</div>
			</div>
		</div>
	)
}

export default MenuBar;
