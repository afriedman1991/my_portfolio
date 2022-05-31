import { findByLabelText } from '@testing-library/react';
import React, {useState} from 'react';
import Icon from './Icon.jsx';

const styles = {
	modal: {
	  display:"flex",
	  width:"75vw",
	  height: "75vh",
	  outline: "solid red",
	},
	modalContent: {
		padding:"5rem",
		justifyContent: "left",
		alignItems: "flex-start",
		width: "100vw",
	},
	modalContainer: {
	  display:"flex",
	  justifyContent: "center",
	  alignItems: "center",
	  height: "100vh",
	  width: "100vw",
	},
	textStyle: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		overflowWrap: "normal",
	},
	closeButtonStyle: {
		display: "flex",
		justifyContent: "right",
		alignItems: "right",
		height: "4vh",
		width: "3vw",
	}
}

const Modal = function(props) {
	return (
		<div style={styles.modalContainer}>
			<div style={styles.modal}>
				<div style={styles.modalContent}>
					<Icon iconSrc={props.iconSrc} projectName={props.projectName} />
					<p>
						{props.description}
					</p>
				</div>
				<img
					onClick={props.closeModal} 
					style={styles.closeButtonStyle} 
					src="https://cdn-icons-png.flaticon.com/512/1632/1632708.png"
					alt=""
				/>
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