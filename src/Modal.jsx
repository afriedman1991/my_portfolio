import Icon from './Icon.jsx';

const styles = {
	modal: {
		position: "relative",
		display:"flex",
		width:"75vw",
		height: "75vh",
		outline: "solid red",
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
	modalContainer: {
		display:"flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		width: "100vw",
	},
	textStyle: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "left",
		alignItems: "flex-start",
		overflowWrap: "normal",
		"&#contactInfo": {
			listStyle: "none",
			justifyContent: "left",
			alignItems: "flex-start",
		}
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
	return (
		<div style={styles.modalContainer}>
			<div style={styles.modal}>
				<div style={styles.modalContent}>
					<Icon iconSrc={props.iconSrc} projectName={props.projectName} />
					{props.content ? props.content.map(role => {
						if (props.modalName === "Contact Me") {
							return (
								<div id="contactInfo" style={styles.textStyle}>
									<a href={role.url}><Icon iconSrc={role.src} projectName={""} /></a>
								</div>
							)
						} else {
							const description = role.roleDescription;
							return (
								<div style={styles.textStyle}>
									<h3>{`${role.title} | ${role.company} | ${role.location} | ${role.timeline}`}</h3>
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
					}) : <p style={styles.textStyle}>
							{props.description}
							{console.log("props:", props.url)}
							<a href={props.url}>{props.modalName}</a>
						</p>}
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
  }

  export default Modal;