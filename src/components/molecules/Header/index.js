import React from 'react';
import { Text, StyleSheet, View, Image, Dimensions, TouchableHighlight, } from 'react-native';
import { _scaleText, COLORS, ICONS, IMAGES } from '../../../shared';
import { connect } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const W = Dimensions.get('window').width

const CustomHeader = ({
    container,
    left,
    onBackPress = () => { },
    right,
    showBackIcon,
    showBackGround = true,
    title,
    titleStyle,
    showMenuIcon,
    onRightPress = () => { },
    rightText,
    backIcon,
}) => {
    return (
        <View style={styles.container}>
            {showBackIcon &&
                <View style={styles.left}>
                    <TouchableHighlight underlayColor='transparent'
                        onPress={() => {
                            onBackPress()
                        }}
                    >
                        <MaterialIcons name="arrow-back-ios" color={COLORS.WHITE} size={20} />
                    </TouchableHighlight>
                </View>}
            <View style={styles.center}>
                <Text numberOfLines={1} style={[styles.title, titleStyle]}>{title}</Text>
            </View>
            <View style={styles.right}>
                <Image source={IMAGES.LOGO} style={styles.icon}></Image>
            </View>
        </View>
    )
};

export default CustomHeader;

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: _scaleText(10).fontSize,
        borderBottomWidth: _scaleText(1).fontSize,
        borderColor: COLORS.GREY.LIGHT,
        width: _scaleText(200).fontSize
    },
    menuLabel: selected => ({
        color: selected ? COLORS.GREY._1 : COLORS.GREY._2,
        // marginLeft: _scaleText(8).fontSize,
        fontSize: _scaleText(10).fontSize,
    }),
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: W,
        height: W * 0.176,
        backgroundColor: COLORS.PRIMARY,
        borderWidth: 0
    },
    icon: {
        height: _scaleText(30).fontSize,
        width: _scaleText(30).fontSize,
    },
    title: {
        fontSize: _scaleText(22).fontSize,
        color: COLORS.WHITE,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    rightTitle: {
        fontSize: _scaleText(12).fontSize,
        color: COLORS.WHITE
    },
    headerRow: { flexDirection: 'row', marginTop: _scaleText(-10).fontSize, borderWidth: 0, alignItems: 'center' },
    left: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: _scaleText(12).fontSize
    },
    right: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        paddingRight: _scaleText(10).fontSize
    },
    center: {
        flex: 8,
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: _scaleText(20).fontSize
    }
});