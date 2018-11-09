import React, { Component } from 'react'
import { Buttons } from '../components/Buttons'
// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Text, View, ImageBackground, StatusBar, Button } from 'react-native';
import styles from "../utils/styles";

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

class Main extends Component {
    static navigationOptions = {
        header: null
      }
    render() {
        return (
            <ImageBackground source={require('../../assets/images/bg.png')} style={{width: '100%', height: '100%'}}>
                <StatusBar hidden={true} />
                <View style={styles.container}>
                    <View style={styles.main}>
                        <Icon name="pied-piper-pp" size={80} color="#ffe" />
                        <Text style={styles.text}>Pied Piper</Text>
                    </View>

                    <View style={styles.form}>
                        <Buttons style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
                            Sign in
                        </Buttons>
                        <Buttons style={styles.button} onPress={() => this.props.navigation.navigate('Register')}>
                            Sign up
                        </Buttons>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

export default Main