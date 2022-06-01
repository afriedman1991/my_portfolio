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
	MenuBarRight: {
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
	MenuBarDateTime: {
		paddingRight: "2vw",
		paddingLeft: "2vw",
		color: "white",
		fontFamily: "Space Mono"
	},
	MeIcon: {
		width: "3vw",
		paddingLeft: "2vw",
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
		<div style={styles.MenuBarContainer}>
		<div style={styles.MenuBarLeft}>
			<img alt="" style={styles.MeIcon} src="https://art.pixilart.com/sr20e13a17053e2.png" />
			<p style={{color: "white", paddingLeft: "1vw", fontSize: "24px", fontFamily: "Space Mono"}}>Alex Friedman</p>
		</div>
			<div style={styles.MenuBarRight}>
				{props.iconList.map((icon, i) =>{
					return <Icon
					key={i}
					iconSrc={icon.src} 
					icon={icon}
					className="menuBar"
				/>})}
				<div style={styles.MenuBarDateTime}>{getCurrentDate()}</div>
				<Clock style={styles.MenuBarDateTime} format={'h:mm a'} ticking={true} />
			</div>
		</div>
	)
}

export default MenuBar;
