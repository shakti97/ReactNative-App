import React from 'react';
import {View,Text} from 'react-native';
const ProfileScreen=(props)=>{
    console.log('props ',props.navigation.state.params.name);
    return(
        <View>
            <Text> HEy I m {props.navigation.state.params.name}</Text>
        </View>
    )
}
export default ProfileScreen;