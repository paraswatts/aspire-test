import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, Switch, } from 'react-native';
import { COLORS, _scaleText, ICONS, NAVIGATION, IMAGES } from '../../../shared';

const CustomSwitch = ({
    toggleSwitch,
    isEnabled
}) => {
    return (
        <Switch
            style={styles.switch}
            trackColor={{ false: COLORS.GREY.EEE, true: COLORS.SECONDARY }}
            thumbColor={COLORS.WHITE}
            ios_backgroundColor={isEnabled ? COLORS.SECONDARY : COLORS.GREY.EEE}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
}

export default CustomSwitch;

const styles = StyleSheet.create({
    switch: {
        transform: [{ scaleX: .6 }, { scaleY: .6 }],
        marginRight: -_scaleText(10).fontSize
    }
});