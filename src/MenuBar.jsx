import React from 'react';
import Clock from 'react-live-clock';
import Icon from './Icon.jsx';
import PixelMe from './Icons/PixelMe.png';

const MenuBar = (props) => {

	const getCurrentDate = () => {
		const currDate = new Date().toDateString();
		const dateLen = currDate.length - 4;
		console.log(dateLen, currDate);

		return currDate.slice(0, dateLen - 1);
	}

	return (
		<div style={props.styles.MenuBarContainer}>
			<div className="menu-bar-left" style={props.styles.MenuBarLeft}>
				<img alt="" style={props.styles.MeIcon} src={PixelMe} />
				<p style={props.styles.Title}>
					Alex Friedman
				</p>
			</div>
			<div className="menu-bar-right" style={props.styles.MenuBarRight}>

				{props.isMobile ? <></> : props.iconList.map((icon, i) =>{
					return <Icon
					key={i}
					iconSrc={icon.src} 
					icon={icon}
					className="menuBar"
				/>})}
				<div style={props.styles.MenuBarDateTime}>
					<div>{props.isMobile ? <></> : getCurrentDate()}</div>
					<Clock format={'h:mm a'} ticking={true} />
				</div>
			</div>
		</div>
	)
}

export default MenuBar;
