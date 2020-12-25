import {
    CHANGE_VARIABLE
} from './type';

export const redirect = ( navigation ) => {
    return (dispatch)=> {
        redirect_helper({ navigation, dispatch });
    }
}

const redirect_helper = async ({ navigation, dispatch }) => {
	navigation.navigate('Home')
	fetch_top_stories_helper({ dispatch });
}

export const fetch_top_stories = () => {
    return (dispatch)=> {
        fetch_top_stories_helper({ dispatch });
    }
}

const fetch_top_stories_helper = async ({ dispatch }) => {
	const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
    fetch(url)
        .then(response => response.json())
        .then(responseJson => {
        	//TAKING 50 ITEMS
        	const splice = 50;
        	const stories_array = responseJson.splice( 0, splice );
        	var stories_object = [];
        	stories_array.map(function(value,index){
        		console.log( value );
        		const story_url = "https://hacker-news.firebaseio.com/v0/item/"+value+".json";
        		fetch(story_url)
        			.then(response => response.json())
        			.then(responseJson => {
        				console.log( responseJson );
        				stories_object.push( responseJson );
        				console.log( stories_object.length )
        				if( stories_object.length === splice )
        					dispatch({ type: CHANGE_VARIABLE, payload: { key:'stories', value: stories_object } });
        			})
        	})
    	})
}
