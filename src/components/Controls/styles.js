import { StyleSheet } from "react-native";



const styles = StyleSheet.create({

	controls: {
		flex:1,
		backgroundColor: "#3C3C3C",
		padding: "1%",
		justifyContent: "center",
		alignSelf: "center",
		alignItems: "center"
		
	},
	pretender: {
		backgroundColor: "#3C3C3C",
		flexDirection: "column",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
	},
	row: {
		flex: 1,
		flexDirection: "row",
		// flexWrap: "wrap",
		position: "relative",
		alignItems: "center",

	},
	box: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 99,
		width: "23%",
		height: "75%",
		margin: "1%"

	},
	double: {
		width: "48%"
	},
	darkGary:{
		backgroundColor: "#5B5B5B"
	},
	orange:{
		backgroundColor: "#FF8000"
	}



})


export default styles;