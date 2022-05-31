import React, {useState} from 'react';
import Modal from './Modal.jsx';
const styles = {
  icon: {
    display: "flex",
    width: "4vw",
  },
  iconContainer: {
    display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	padding: "2vw",
  },
}
const Icon = function(props) {

	return (
		<div style={styles.iconContainer}>
			{/* {console.log("props.icon:", props.icon)} */}
			<img onClick={() => {
				return props.showModal ? props.showModal(props.icon) : null;
			}} style={styles.icon} alt="" src={props.iconSrc} />
			<li style={{listStyle: "none", textAlign: "center"}}>{props.iconName}</li>
		</div>
	)
}

export default Icon;
