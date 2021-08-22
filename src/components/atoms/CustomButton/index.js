import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { _scaleText, } from '../../../shared';

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
