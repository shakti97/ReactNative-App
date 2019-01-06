import React from 'react';
import {View,Image,Text} from 'react-native';
class Content extends React.Component{
    render(){
    let pic={uri:'https://s3.amazonaws.com/nxs-wncttv-media-us-east-1/weather/7day.jpg'}
        return(
            <View style={{width: '80%', height: '50%',margin : '10%'}}>
                <Image source={pic} style={{width : '100%' , height : '100%'}} />
                <Text>This is todays Report</Text>
            </View>
        )
    }
}
export default Content;
