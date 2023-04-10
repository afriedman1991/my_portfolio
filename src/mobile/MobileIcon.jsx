import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

function MobileIcon({image}) {




	return (
		<View style={{
			justifyContent: "center",
			width: "15vw",
			height: "7vh",
		}}>
			<TouchableOpacity style={{
				display: "flex",
				width: "23vw",
				borderRadius: "16px",
				backgroundColor: "blue",
			}}>
			<Image
				style={{
					"flex": 1,
					display: "flex",
					width: "23vw",
					height: "23vw",
					borderRadius: "16px",
					overflow: "hidden",
				}} source={image}
			/>
			</TouchableOpacity>
		</View>
	)
}

export default MobileIcon;
