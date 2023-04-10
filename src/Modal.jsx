import Icon from './Icon.jsx';

const Modal = function(props) {
	return (
		<div className="modalContainer" style={props.styles.modalContainer}>
			<div style={props.styles.modal}>
				<div style={props.styles.modalTitleBar}>
					<Icon iconSrc={props.iconSrc} projectName={props.projectName} />
					<div style={props.styles.titleBarContent}>{props.modalName}</div>
					<img
						onClick={props.closeModal} 
						style={props.styles.closeButtonStyle} 
						src="https://cdn-icons-png.flaticon.com/512/1632/1632708.png"
						alt=""
					/>
				</div>
				<div className="ModalContent" style={props.styles.modalContent}>
					{props.content ? props.content.map((role, ind) => {
						if (props.modalName === "Connect") {
							return (
								<div id="contactInfo" style={props.styles.textStyle}>
									<a href={role.name === "Email" ? "mailto:afriedman1991@gmail.com" : role.url} target="_blank"><Icon className="contactInfo" iconSrc={role.src} projectName={""}/></a>
								</div>
							)
						} else {
							const description = role.roleDescription;
							return (
								<div style={props.styles.textStyle}>
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
					}) : <p id="projectLinks" style={props.styles.textStyle.projectLinks}>
							{props.description}
							{console.log("props:", props.url)}
							<a href={props.url} target="_blank">{props.url}</a>
						</p>}
				</div>
			</div>
		</div>
	)
  }

  export default Modal;