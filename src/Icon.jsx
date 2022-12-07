import React, {useState} from 'react';
import Styles from './Styles.js';


const Icon = function(props) {
	const styles = props.isMobile ? Styles.MobileStyles.Icon : Styles.Icon;
	const [iconStyle, setIconStyle] = useState(styles.icon);
	const [iconNameDisplay, setIconNameDisplayStyle] = useState(styles.iconNameDisplay.hideName);

	const handleMobileIconCheck = () => {
		if (props.icon.name === "Email") {
			return <a href="mailto:afriedman1991@gmail.com" target="_blank"><img style={iconStyle} alt="" src={props.iconSrc} /></a>
		} else {
			return <img 
				onClick={() => {
					console.log('Icon clicked');
					return props.showModal ? props.showModal(props.icon) : null;
				}} style={iconStyle} alt="" src={props.iconSrc} />
		}
	}

	return (
		<div style={props.containerStyle ? styles.containerHover : styles.iconContainer}
		onMouseLeave={props.iconStyle && !props.isMobile ? () => {
			setIconStyle(styles.icon)
			setIconNameDisplayStyle(styles.iconNameDisplay.hideName);
		} : null} 
		onMouseOver={props.iconStyle && !props.isMobile ? () => {
			setIconStyle(styles.iconHover)
			setIconNameDisplayStyle(props.isMobile ? {} : styles.iconNameDisplay);
		} : null}>
		{props.className === "menuBar" ? <a href={props.icon.name === "Email" ? "mailto:afriedman1991@gmail.com" : props.icon.url} target="_blank"><img style={styles.menuBarIcons} alt="" src={props.iconSrc} /></a> : 
			<img 
			onClick={() => {
				console.log('Icon clicked');
				return props.showModal ? props.showModal(props.icon) : null;
			}} style={iconStyle} alt="" src={props.iconSrc} />}
			{<div style={iconNameDisplay}>{props.iconName}</div>}
		</div>
	)
}

export default Icon;
/**
 * 	  position: "absolute",
	  display: "flex",
	  flexDirection: "row",
	  marginLeft: "300px",
	  justifyContent: "center",
	  alignItems: "center",
	  padding: "8px",
	  width: "100%",
	  background: "rgba(0, 0, 0, 0.1)",
	  border: "1px solid rgba(255, 255, 255, 0.3)",
	  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
	  webkitBackdropFilter: "blur(13px)",
	  backdropFilter: "blur(13px)",
	  borderRadius: "8px",
 */
