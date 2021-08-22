import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, Switch, TextInput, } from 'react-native';
import { COLORS, _scaleText, ICONS, NAVIGATION, IMAGES, STRINGS } from '../../../shared';
import CurrencyInput from 'react-native-currency-input';

const CustomInput = ({
    onChange,
    value,
}) => {
    return (
        <View style={styles.container}>
            <View
                style={styles.currencyContainer}>
                <Text style={styles.currencyText}>{STRINGS.SD}</Text>
            </View>
            <CurrencyInput
                value={value}
                placeholder={'0'}
                onChangeValue={onChange}
                delimiter=","
                minValue={0}
                precision={0}
                style={styles.text}
            />
        </View>
    );
}

export default CustomInput;

const styles = StyleSheet.create({
    currencyContainer: {
        width: _scaleText(35).fontSize,
        height: _scaleText(20).fontSize,
        backgroundColor: COLORS.SECONDARY,
        borderRadius: _scaleText(4).fontSize,
        alignItems: 'center',
        justifyContent: 'center'
    },
    currencyText: {
        fontSize: _scaleText(12).fontSize,
        fontWeight: 'bold',
        color: COLORS.WHITE
    },
    container: {
        flexDirection: 'row',
        paddingVertical: _scaleText(10).fontSize,
        borderBottomWidth: 0.5,
        borderColor: COLORS.GREY.A7,
        alignItems: 'center'
    },
    text: {
        fontWeight: '800',
        flex: 1,
        fontSize: _scaleText(20).fontSize,
        marginLeft: _scaleText(10).fontSize,
    },
    formattedText: {
        position: 'absolute',
        left: _scaleText(10).fontSize,
        color: 'black',
        height: '100%',
        width: '100%',
        fontWeight: 'bold',
        fontSize: _scaleText(20).fontSize,
        lineHeight: _scaleText(20).fontSize
    }
});