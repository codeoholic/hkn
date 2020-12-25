import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Splash extends Component{
    constructor(props) {
        super(props);
        console.log("this");
    }
    render(){
        return(
            <View>
                <Text>splash screen</Text>
            </View>
        )
    }
}
export default connect( null )( Splash );
