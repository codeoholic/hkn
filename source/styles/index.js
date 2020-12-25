import { StyleSheet, Dimensions, Platform } from 'react-native';
const WHITE = "#FFF";
const GREY = "#DEDEDE";

export default StyleSheet.create({
	flex:{
		flex: 1,
		backgroundColor: WHITE	
	},
	font_16:{
		fontSize: 16
	},
	font_12:{
		fontSize: 12
	},
	margin_top_10:{
		marginTop: 10
	},
	split_view:{
        flexDirection:'row',
        justifyContent: 'space-between',
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