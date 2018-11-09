import React, {Component} from 'react';
import { Button } from "native-base";
import { Text, View, StyleSheet , TextInput } from 'react-native'
// import styles from '../src/utils/styles';

const Input = ({ label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    placeholderTextColor,
    keyboardType,
    style,
    returnKeyType
    }) => {
    return (
        <View>
            {/* <Text>{label}</Text> */}
            <TextInput 
                autoCorrect={false}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style = {style}
                placeholderTextColor = {placeholderTextColor}
                keyboardType ={keyboardType}
                returnKeyType={returnKeyType}
            />
        </View>
    )
}

export { Input }
