import React, {useState} from 'react';
import Modal from './Modal.jsx';
const styles = {
  icon: {
    display: "flex",
    width: "5vw",
  },
  iconContainer: {
    display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "start",
    paddingTop: "2vw",
	paddingBottom: "2vw",
	paddingLeft: ".5vw"
  },
}
const Icon = function(props) {

	return (
		<div style={styles.iconContainer}>
			{/* {console.log("props.icon:", props.icon)} */}
			<img onClick={() => {
				return props.showModal ? props.showModal(props.icon) : null;
			}} style={styles.icon} alt="" src={props.iconSrc} />
			<li style={{listStyle: "none"}}>{props.projectName}</li>
		</div>
	)
}

export default Icon;
