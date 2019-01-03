import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

class Header extends React.Component{
    render(){
        return(
            <View style={styles.topView}>
                <View style={styles.header}>
                    <Text style={styles.menubar}>MENUBAR</Text>
                    <Text style={styles.title}>TITLE</Text>
                    <Text style={styles.home}>HOME</Text>
                </View>
            </View>
            // <View style={{backgroundColor : 'black'}}>
            //     <View style={{backgroundColor : 'white'}}></View>
            // </View>
        )
    }
}
const styles=StyleSheet.create({
    topView:{
        backgroundColor : '#87cefa'
    },
    header : {
        flex:1,
        flexDirection : 'row',
        opacity : 10,
        marginTop : '10%',
        backgroundColor : '#FFF000'
    },
    menubar : {
        'color' : 'white'
    },
    title : {
        'color' : 'white'
    },
    home : {
        'color' : 'white'
    }
})
export default Header;