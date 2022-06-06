import React, {useState} from 'react';

const styles = {
  icon: {
	  display: "flex",
	  width: "3.5vw",
	  translateY: "0px",
	  transition: "0.225s",
	  borderRadius: "16px",
  },
  menuBarIcons: {
	  display: "flex",
	  width: "1.5vw",
	  backgroundColor: "white",
	  borderRadius: "50%",
	  padding: ".2vw",
  },
  iconHover: {
	  width: "7vw",
	  marginLeft: "50px",
	  transition: "0.225s",
	  borderRadius: "32px",
  },
  iconContainer: {
	  display: "flex",
	  flexDirection: "column",
	  alignItems: "center",
	  justifyContent: "center",
	  padding: "1vw",
	  width: "50px",
	  height: "50px",
	  transition: "0.225s",
  },
  containerHover: {
	  display: "flex",
	  flexDirection: "column",
	  alignItems: "center",
	  justifyContent: "center",
	  padding: "1vw",
	  margin: "5px 0 5px 0",
	  transition: "0.225s",
  },
  iconNameDisplay: {
	  position: "absolute",
	  display: "flex",
	  flexDirection: "row",
	  marginLeft: "300px",
	  justifyContent: "center",
	  alignItems: "center",
	  background: "rgba(0, 0, 0, 0.5)",
	  color: "rgba(255, 255, 255, 0.9)",
	  padding: "8px",
	  width: "100%",
	  backDropFilter: "blur(13px)",
	  WebkitBackdropFilter: "blur(13px)",
	  borderRadius: "5px",
	  fontFamily: "Poppins",
	  hideName: {
		  display: "none",
	  }
  }
}
const Icon = function(props) {
	const [iconStyle, setIconStyle] = useState(styles.icon);
	const [iconNameDisplay, setIconNameDisplayStyle] = useState(styles.iconNameDisplay.hideName);

	return (
		<div style={props.containerStyle ? styles.containerHover : styles.iconContainer}
		onMouseLeave={props.iconStyle ? () => {
			setIconStyle(styles.icon)
			setIconNameDisplayStyle(styles.iconNameDisplay.hideName);
		} : null} 
		onMouseOver={props.iconStyle ? () => {
			setIconStyle(styles.iconHover)
			setIconNameDisplayStyle(styles.iconNameDisplay);
		} : null}>
		{props.className === "menuBar" ? <a href={props.icon.name === "Email" ? "mailto:afriedman1991@gmail.com" : props.icon.url} target="_blank"><img style={styles.menuBarIcons} alt="" src={props.iconSrc} /></a> : 
			<img 
			onClick={() => {
				return props.showModal ? props.showModal(props.icon) : null;
			}} style={iconStyle} alt="" src={props.iconSrc} />}
			<div style={iconNameDisplay}>{props.iconName}</div>
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
