import { findByLabelText } from '@testing-library/react';
import React, {useState} from 'react';
import Icon from './Icon.jsx';

const styles = {
	modal: {
	  display:"flex",
	  width:"50vw",
	  height: "50vh",
	  padding:"5rem",
	  outline: "solid red",
	  justifyContent: "left",
	  alignItems: "flex-start",
	},
	modalContainer: {
	  display:"flex",
	  justifyContent: "center",
	  alignItems: "center",
	  height: "100vh",
	},
	textStyle: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		overflowWrap: "normal",
	},
	closeButtonStyle: {
		display: "flex",
		height: "5vh",
		width: "3vw",
		justifyContent: "right",
		alignItems: "flex-start",
	}
}

const Modal = function(props) {
	return (
		<div style={styles.modalContainer}>
			<div style={styles.modal}>
				{/* <img style={styles.closeButtonStyle} src="https://cdn-icons-png.flaticon.com/512/1632/1632708.png"></img> */}
				<Icon iconSrc={props.iconSrc} projectName={props.projectName} />
				<p>
					{props.description}
				</p>
			</div>
		</div>
	)
	// if (props.modalName === "Rogue Apocalypse") {
	//   return props.icons.map(icon => icon);
	// } else if (props.modalName === "experience") {
	//   return <div style={styles.modal}>
	// 	Experience
	//   </div>
	// } else if (props.modalName === "contact") {
	//   return <div style={styles.modal}>
	// 	Contact
	//   </div>
	// }
  }

  export default Modal;

  /**
   * function Modal(props) {
  if (props.name === "Projects") {
    return <div style={styles.modal}>
      {icons.map(icon => <img style={styles.icon} alt="error" src={icon} />)}
    </div>
  }
}
function App() {
  // const [theme, setTheme] = useState(themes.dark);
  const [modal, setModal] = useState(<></>);

  const showModal = (buttonClicked) => {
    console.log(`${buttonClicked} clicked`);
    const newModal = <Modal modalName={buttonClicked} />;
    setModal(newModal)
  }
   */