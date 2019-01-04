import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

class Header extends React.Component{
    render(){
        return(
            <View style={styles.navbar}>
              <Icon name="dehaze" size={25}/>
              <View style={styles.MiddleNav}>
                <Text>App</Text>
              </View>
              <View style={styles.rightNav}>
                <Icon name='person' size={25}/>
              </View>
          </View>
        )
    }
}
const styles=StyleSheet.create({
    navbar : {
        height : 55,
        backgroundColor : 'white',
        elevation : 10,
        padding : 15,
        flexDirection : 'row',
        justifyContent : 'space-between'
      }
})
export default Header;
// class Header extends React.Component{
//     render(){
//         return(
//             <View style={styles.topView}>
//                 <View style={styles.header}>
//                     <Text>MENUBAR</Text>
//                     <Text>TITLE</Text>
//                     <Text>HOME</Text>
//                 </View>
//             </View>
//             // <View style={{backgroundColor : 'black'}}>
//             //     <View style={{backgroundColor : 'white'}}></View>
//             // </View>
//         )
//     }
// }
// const styles=StyleSheet.create({
//     topView:{
//         backgroundColor : '#87cefa',
//         borderColor : 'green',
//         borderWidth : 2
//     },
//     header : {
//         flex:1,
//         flexDirection : 'row',
//         marginTop : '10%',
//         backgroundColor : '#FFF000',
//         borderColor : 'yellow',
//         borderWidth : 3,
//         alignSelf : 'stretch'
//     },
//     menubar : {
//         'color' : 'white',
//         borderColor : 'white',
//         borderWidth : 2
//     },
//     title : {
//         'color' : 'white',
//         borderColor : 'white',
//         borderWidth : 2
//     },
//     home : {
//         'color' : 'white',
//         borderColor : 'white',
//         borderWidth : 2
//     }
// })
// export default Header;