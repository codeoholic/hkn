import React, { Component } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';

class Home extends Component{
    constructor(props) {
        super(props);
    }
    keyExtractor = (item, index) => index.toString();
    render_story = ({item, index}) => {
        return(
            <TouchableOpacity key={ index } style={ styles.story } onPress={ () => this.props.navigation.navigate("WebViewCustom", { url: item.url }) }>
                <Text>{ item.title }</Text>
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
