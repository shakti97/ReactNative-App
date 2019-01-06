import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import Header from './Components/Header.js';
import Content from './Components/Content.js';
import ScreenChange from './Components/ScreenChange.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends React.Component {
  render() {
    let pic={uri:'https://www.metoffice.gov.uk/webfiles/1544018228657/images/video/placeholder_thumb_1152x648.jpg'};
    return (
      <View style={styles.container}>
        {/* <ImageBackground source={pic} style={{width:'100%' , height:'100%',flex:1,borderColor : "red",borderWidth : 1}}>
          <Header/>r
          <Content/>
          <ScreenChange/>
        </ImageBackground> */}
          <Header/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
