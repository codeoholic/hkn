import React, { Component } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
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
        const url = (typeof item.url !== "undefined") ? item.url : "https://news.ycombinator.com/item?id=" + item.id;
        return(
            <TouchableOpacity key={ index } style={ styles.story } onPress={ () => this.props.navigation.navigate("WebViewCustom", { url: url }) } activeOpacity={ 0.9 }>
                <Text style={ styles.font_16 }>{ item.title }</Text>
                <Text style={[ styles.font_12, styles.color_primary, styles.margin_top_5 ]}>{ item.url }</Text>
                <View style={[ styles.margin_top_5, styles.split_view ]}>
                    <Text style={ styles.font_12 }>{ item.score } points | by { item.by }</Text>
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
                    contentContainerStyle={{ marginTop: 0 }}
                />
            )
        return(
            <View style={[ styles.align_middle_view,styles.flex ]}>
                <ActivityIndicator color="#222226"/>
                <Text style={[ styles.font_12,styles.margin_top_10, styles.color_black ]}>loading...</Text>
            </View>
        )
    }
    render(){
        return(
            <SafeAreaView style={[ styles.flex ]}>
                <View style={[ styles.flex ]}>
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
