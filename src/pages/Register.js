import React, {Component} from 'react';
import styles from "../utils/styles";
import { Buttons } from '../components/Buttons'
import { Input } from '../components/Inputs'

// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Text, View } from 'react-native';
// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

class Register extends Component {
    state  = {
        fullname: '',
        email: '',
        password: ''
      }
      static navigationOptions = () => ({
        headerStyle: {
          backgroundColor: '#2196f3',
          color: '#fff'
        },
        headerTintColor: '#fff'
      });
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.main}>
                <Icon name="pied-piper-pp" size={80} color="#ffe" />
                <Text style={styles.text}>Pied Piper</Text>
                </View>
                
                <View style={styles.form}>
                <Input 
                    style={styles.input}
                    placeholder = 'Full Name'
                    placeholderTextColor= 'rgba(0,0,0, .4)'
                    placeholderStyle={styles.textBoxField}
                    onChangeText={fullname => this.setState({fullname})}
                    value={this.state.fullname}
                    // returnKeyType='next'
                />
                <Input 
                    style={styles.input}
                    placeholder = 'Email'
                    placeholderTextColor= 'rgba(0,0,0, .4)'
                    placeholderStyle={styles.textBoxField}
                    keyboardType='email-address'
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                    // returnKeyType='next'
                />
                <Input 
                    style={styles.input}
                    placeholder = 'Password'
                    placeholderTextColor= 'rgba(0,0,0, .4)'
                    secureTextEntry = {true}
                    placeholderStyle={styles.textBoxField}
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                    
                />
    
                <Buttons style={styles.button} onPress={() => console.log('Button pressed')}>
                    Sign up
                </Buttons>
    
                </View>
            </View>
         )
    }
}

export default Register