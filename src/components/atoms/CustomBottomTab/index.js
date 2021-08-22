import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { COLORS, _scaleText, ICONS, NAVIGATION, IMAGES } from '../../../shared';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TABS = [
    {
        defaultIcon: IMAGES.ASPIRE,
        key: 0,
        title: NAVIGATION.BOTTOM_TABS.HOME,
        selectedIcon: IMAGES.ASPIRE_ACTIVE,

    },
    {
        defaultIcon: IMAGES.DEBIT_CARD,
        key: 1,
        title: NAVIGATION.BOTTOM_TABS.DEBIT_CARD,
        selectedIcon: IMAGES.DEBIT_CARD_ACTIVE,
    },
    {
        defaultIcon: IMAGES.PAYMENTS,
        key: 2,
        title: NAVIGATION.BOTTOM_TABS.PAYMENTS,
        selectedIcon: IMAGES.PAYMENTS_ACTIVE,
    },
    {
        defaultIcon: IMAGES.CREDIT,
        key: 3,
        title: NAVIGATION.BOTTOM_TABS.CREDIT,
        selectedIcon: IMAGES.CREDIT_ACTIVE,
    },
    {
        defaultIcon: IMAGES.PROFILE,
        key: 4,
        title: NAVIGATION.BOTTOM_TABS.PROFILE,
        selectedIcon: IMAGES.PROFILE_ACTIVE,
    }
]

const CustomBottomTab = ({
    navigation,
    state,
}) => {
    let { bottom } = useSafeAreaInsets();
    return (
        <View style={styles.barContainer}>

            <View style={styles.container}>
                {TABS.map((item, index) => {
                    let { title, key, defaultIcon, selectedIcon } = item;
                    let active = state.index == key;
                    return <TouchableOpacity
                        activeOpacity={0.8}
                        key={index}
                        onPress={() => navigation.navigate(title)}
                        style={styles.tabContainer}
                    >
                        <Image resizeMode={'contain'} source={active ? selectedIcon : defaultIcon} style={{ width: _scaleText(24).fontSize, height: _scaleText(24).fontSize }} />
                        <Text numberOfLines={1} style={styles.title(active)}>{title}</Text>
                    </TouchableOpacity>
                })}
            </View>
            <SafeAreaView style={{ backgroundColor: 'white', }} />

            {!!bottom && <View style={{ width: '100%', height: bottom, backgroundColor: 'white', }} />}
        </View>
    );
}

export default CustomBottomTab;

const styles = StyleSheet.create({
    barContainer: {
        bottom: 0,
        elevation: 5,
        left: 0,
        position: 'absolute',
        right: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        backgroundColor: 'white'
    },
    backImage: {
        backgroundColor: 'transparent',
        height: _scaleText(54).fontSize,
        justifyContent: 'center',
        width: '100%',
    },
    container: {
        // borderWidth: 2,
        flexDirection: 'row'
    },
    tabContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingVertical: _scaleText(5).fontSize,
    },
    createContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingVertical: _scaleText(5).fontSize,
    },
    create: {
        position: 'absolute',
        top: -_scaleText(27).fontSize
    },
    title: active => ({
        color: active ? COLORS.SECONDARY : COLORS.GREY[555],
        marginTop: _scaleText(2).fontSize,
        fontSize: _scaleText(10).fontSize,
        fontWeight: '500'
    })
});