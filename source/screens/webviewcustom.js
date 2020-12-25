import React, { Component } from 'react';
import { Dimensions, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';
import { WebView } from 'react-native-webview';

class WebViewCustom extends Component{
    constructor(props) {
        super(props);
        this.state = {
            url : this.props.route.params.url,
            progress : 0
        };
    }
    render_progress(){
        const WIDTH = Dimensions.get('window').width * this.state.progress;
        if( this.state.progress !== 1 )
            return(
                <View style={{ height: 2, width: WIDTH, backgroundColor: "#3C2F8E" }}/>
            )
    }
    render(){
        return(
            <SafeAreaView style={ styles.flex }>
                <View style={[ styles.align_view, styles.header, styles.background_color_white ]}>
                    <TouchableOpacity onPress={ () => this.props.navigation.goBack() } activeOpacity={ 0.9 } style={ styles.margin_right_20 }>
                        <Text>back</Text>
                    </TouchableOpacity>
                </View>
                { this.render_progress() }
                <View style={[ styles.flex, styles.background_color_alabaster ]}>
                    <WebView source={{ uri: this.state.url }} onLoadProgress={({ nativeEvent }) => { this.setState({ progress: nativeEvent.progress }) }}/>
                </View>
            </SafeAreaView>
        )
    }
}
export default connect( null )( WebViewCustom );