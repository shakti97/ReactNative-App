import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

class Header extends React.Component{
    render(){
        return(
            <View style={styles.headers}>
                    <Text style={{'alignItems' : 'flex-start',width:'45%'}}>MENUBAR</Text>
                    <Text style={{'alignItems' : 'center',width:'37%'}}>TITLE</Text>
                    <Text style={{'alignItems' : 'flex-end'}}>HOME</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    headers:{
    flex:1,
    flexDirection:'row',
    marginTop:'10%',
    color: '#FFFFFF',
    backgroundColor : '#FF0000',
    }
})
export default Header;