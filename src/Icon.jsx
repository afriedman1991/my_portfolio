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
}
const Icon = function(props) {
	const [iconStyle, setIconStyle] = useState(styles.icon);

	return (
		<div style={props.containerStyle ? styles.containerHover : styles.iconContainer}
		onMouseLeave={props.iconStyle ? (e) => setIconStyle(styles.icon) : null} 
		onMouseOver={props.iconStyle ? (e) => setIconStyle(styles.iconHover) : null}>
		{props.className === "menuBar" ? <a href={props.icon.name === "Email" ? "mailto:afriedman1991@gmail.com" : props.icon.url} target="_blank"><img style={styles.menuBarIcons} alt="" src={props.iconSrc} /></a> : 
			<img 
			onClick={() => {
				return props.showModal ? props.showModal(props.icon) : null;
			}} style={iconStyle} alt="" src={props.iconSrc} />}
		</div>
	)
}

export default Icon;
