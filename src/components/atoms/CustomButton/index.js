import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, Switch, } from 'react-native';
import { COLORS, _scaleText, ICONS, NAVIGATION, IMAGES } from '../../../shared';

const CustomButtom = ({
    onPress,
    title,
    titleStyle,
    buttonStyle
}) => {
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress} >
            <Text style={titleStyle}>{title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButtom;

const styles = StyleSheet.create({
    switch: {
        transform: [{ scaleX: .6 }, { scaleY: .6 }],
        marginRight: -_scaleText(10).fontSize
    }
});