import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { CustomHeader } from '../../../components/';
import { COLORS, _scaleText } from '../../../shared';
const ScreenHOC = ({
    bottomSafeArea,
    children,
    containerStyle = {},
    safeAreaRequired = true,
    showHeader = false,
    statusBarColor = COLORS.PRIMARY,
    title,
    showBackIcon,
    titleStyle,
    onBackPress = () => { }
}) => {

    return (
        <View style={{ flex: 1, backgroundColor: 'white', borderColor: 'red', borderWidth: 0 }}>
            {!!safeAreaRequired && <SafeAreaView style={{ backgroundColor: statusBarColor, }} />}
            {<StatusBar backgroundColor={statusBarColor} animated barStyle={'dark-content'} />}

            {!!showHeader && <CustomHeader
                titleStyle={titleStyle}
                showBackIcon={showBackIcon}
                title={title}
                onBackPress={onBackPress}
            />}
            <View style={{ flex: 1, ...containerStyle, borderWidth: 0 }}>
                {children}
            </View>
            {!!bottomSafeArea && <SafeAreaView style={{ backgroundColor: 'white', }} />}
        </View>)
};


export default ScreenHOC;
