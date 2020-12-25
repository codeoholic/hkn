import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View>
                <Text>splash</Text>
            </View>
        )
    }
}
export default connect( null )( Home );
