import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import {
    redirect
} from '../actions';

class Splash extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.redirect( this.props.navigation );
    }
    render(){
        return(
            <View/>
        )
    }
}
export default connect( null, {

    redirect

} )( Splash );
