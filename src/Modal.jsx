import Icon from './Icon.jsx';

const styles = {
	modalContainer: {
		display:"flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		width: "100vw",
	},
	mobileModalContainer: {
		position: "absolute",
		display:"flex",
		justifyContent: "center",
		alignItems: "center",
		height: "auto",
		width: "100vw",
	},
	modal: {
		position: "relative",
		display:"flex",
		width:"75vw",
		height: "75vh",
		backgroundColor: "white",
		borderRadius: "16px",
		overflow: "hidden",
	},
	mobileModal: {
		display: "flex",
		backgroundColor: "white",
		width: "100vw",
		height: "88.5vh",
	},
	modalContent: {
		display: "flex",
		flexDirection: "column",
		padding:"5rem",
		justifyContent: "left",
		alignItems: "flex-start",
		width: "100vw",
		overflowY: "auto",
	},
	mobileModalContent: {
		display: "flex",
		flexDirection: "column",
		padding:"5rem 2rem 5rem 2rem",
		justifyContent: "left",
		alignItems: "flex-start",
		width: "100vw",
		overflowY: "auto",
	},
	modalTitleBar: {
		position: "absolute",
		display: "flex",
		flexDirection: "row",
		justifyContent: "left",
		alignItems: "center",
		width: "100%",
		height: "7vh",
		borderBottom: "2px solid black",
		backgroundColor: "#696969",
		borderRadius: "14px 14px 0px 0px"
	},
	titleBarContent: {
		fontWeight: "bold",
		fontSize: "24px",
		color: "white",
		fontFamily: "Space Mono",
	},
	textStyle: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "left",
		alignItems: "flex-start",
		overflowWrap: "normal",
		fontFamily: "Poppins",
		projectLinks: {
			fontFamily: "Poppins",
		},
		"&#contactInfo": {
			listStyle: "none",
			justifyContent: "space-evenly",
			alignItems: "flex-start",
			height: "100vh",
		},
	},
	closeButtonStyle: {
		display: "flex",
		justifyContent: "right",
		alignItems: "right",
		position: "absolute",
		right: "0px",
		height: "25px",
		width: "25px",
		padding: "1.5vw",
	}
}

const Modal = function(props) {
	// console.log("modal is mobile?", props.isMobile)
	// console.log(styles.mobileModalContainer)
	return (
		<div className="modalContainer" style={props.isMobile ? styles.mobileModalContainer : styles.modalContainer}>
			<div style={props.isMobile ? styles.mobileModal : styles.modal}>
				<div style={styles.modalTitleBar}>
					<Icon iconSrc={props.iconSrc} projectName={props.projectName} />
					<div style={styles.titleBarContent}>{props.modalName}</div>
					<img
						onClick={props.closeModal} 
						style={styles.closeButtonStyle} 
						src="https://cdn-icons-png.flaticon.com/512/1632/1632708.png"
						alt=""
					/>
				</div>
				<div className="ModalContent" style={props.isMobile ? styles.mobileModalContent : styles.modalContent}>
					{props.content ? props.content.map((role, ind) => {
						if (props.modalName === "Connect") {
							return (
								<div id="contactInfo" style={styles.textStyle}>
									<a href={role.name === "Email" ? "mailto:afriedman1991@gmail.com" : role.url} target="_blank"><Icon className="contactInfo" iconSrc={role.src} projectName={""}/></a>
								</div>
							)
						} else {
							const description = role.roleDescription;
							return (
								<div style={styles.textStyle}>
									<h3 style={{fontFamily: "Space Mono"}}>{`${role.title} | ${role.company} | ${role.location} | ${role.timeline}`}</h3>
									<br />
									<ul>
										<li>{description.first}</li>
										<br />
										<li>{description.second}</li>
										<br />
										<li>{description.third}</li>
										<br />
										{description.fourth ? <li>{description.fourth}</li> : <></>}
									</ul>
								</div>
							)
						}
					}) : <p id="projectLinks" style={styles.textStyle.projectLinks}>
							{props.description}
							{console.log("props:", props.url)}
							<a href="mailto:afriedman1991@gmail.com" target="_blank">{props.url}</a>
						</p>}
				</div>
			</div>
		</div>
	)
  }

  export default Modal;