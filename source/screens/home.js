import React, { Component } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';
import RNBootSplash from "react-native-bootsplash";
import moment from 'moment';

class Home extends Component{
    constructor(props) {
        super(props);
        setTimeout(function(){ RNBootSplash.hide({ duration: 250 }); }, 3000);
    }
    keyExtractor = (item, index) => index.toString();
    render_story = ({item, index}) => {
        return(
            <TouchableOpacity key={ index } style={ styles.story } onPress={ () => this.props.navigation.navigate("WebViewCustom", { url: item.url }) } activeOpacity={ 0.9 }>
                <Text style={ styles.font_16 }>{ item.title }</Text>
                <View style={[ styles.margin_top_10, styles.split_view ]}>
                    <Text style={ styles.font_12 }>{ item.score } points</Text>
                    {/*CONVERTING UNIX TIMESTAMP WHICH IS IN SECONDS TO MILLISECONDS WHICH CAN BE PROCESSED BY JS*/}
                    <Text style={ styles.font_12 }>{ moment( item.time * 1000 ).fromNow() }</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render_stories(){
        if( this.props.stories.length > 0 )
            return(
                <FlatList
                    data={ this.props.stories }
                    renderItem={ this.render_story }
                    keyExtractor={ this.keyExtractor }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ marginTop: 20 }}
                />
            )
    }
    render(){
        return(
            <SafeAreaView style={[ styles.flex ]}>
                <View>
                    { this.render_stories() }
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) =>{
    const {
    
        stories

    } = state.variables;
    console.log( stories );
    return {
        
        stories

    };
}

export default connect( mapStateToProps )( Home );
