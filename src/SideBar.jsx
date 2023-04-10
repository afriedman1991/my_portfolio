import React, {useState} from 'react';
import Icon from './Icon.jsx';

const SideBar = function(props) {
	const [iconContainerStyle, setIconContainerStyle] = useState(false);
	const [iconStyle, setIconStyle] = useState(false);

	return (
		<div className="sideBar" style={props.styles.SideBarContainer}>
			<div
			onMouseEnter={() => {
				setIconContainerStyle(true);
				setIconStyle(true);
			}}
			onMouseLeave={() => {
				setIconContainerStyle(false);
				setIconStyle(false)
			}}
			style={props.styles.SideBar}>
				{props.iconList.map((icon, i) =>{
					if (props.isMobile && icon.iconName === "Black and Mobile") {
						return null;
					}
					return <Icon key={i}
					showModal={props.showModal} 
					iconSrc={icon.source} 
					iconName={icon.iconName} 
					description={icon.description}
					icon={icon}
					containerStyle={iconContainerStyle}
					iconStyle={iconStyle}
				/>})}
			</div>
		</div>
	)
}

export default SideBar;