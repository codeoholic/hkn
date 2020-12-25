import { StyleSheet, Dimensions, Platform } from 'react-native';
const WHITE = "#FFF";
const GREY = "#DEDEDE";

export default StyleSheet.create({
	flex:{
		flex: 1,
		backgroundColor: WHITE	
	},
	story:{
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: GREY
	}
})