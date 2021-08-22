import React from 'react'
import { Image, View, Text, StyleSheet } from "react-native";
import { IMAGES, STRINGS, _scaleText, COLORS, CommonStyles } from "../../../shared";
const DebitCardUI = ({ showCardDetails, userData }) => {
    const _hiddenCard = '●●●●  ●●●●  ●●●●'
    const _hiddenCVV = "***"
    return (
        <View style={styles.card}>
            <View style={styles.logoContainer}>
                <Image source={IMAGES.ASPIRE_WHITE} style={styles.logo} />
                <Text style={styles.aspire}>{STRINGS.ASPIRE}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{userData?._name}</Text>
                {showCardDetails ?
                    <Text style={styles.cardNumberText}>{userData?._cardDetails?._number}</Text> :
                    <Text style={CommonStyles.marginTop(30)}><Text style={styles.hiddenCardText}>{_hiddenCard}</Text>
                        <Text style={styles.cardNumberText}>{'  ' + userData?._cardDetails?._number.split(' ')[3]}</Text>
                    </Text>}
                <View style={CommonStyles.row}>
                    <Text style={styles.expiryText}>{STRINGS.DATE}{userData?._cardDetails?._expiry}</Text>
                    <Text style={styles.cvvText}>{STRINGS.CVV}
                    </Text>
                    <Text style={styles.hiddenCvv(showCardDetails)}>
                        {showCardDetails ? userData?._cardDetails?._cvv : _hiddenCVV}</Text></View>
            </View>
            <View style={{ position: 'absolute', bottom: _scaleText(20).fontSize, right: _scaleText(20).fontSize }}><Image resizeMode='contain' source={IMAGES.VISA} style={{ height: _scaleText(20).fontSize, width: _scaleText(80).fontSize, marginRight: -_scaleText(12).fontSize }} /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: -_scaleText(60).fontSize,
        width: '100%',
        height: _scaleText(210).fontSize,
        backgroundColor: COLORS.SECONDARY,
        borderRadius: _scaleText(10).fontSize,
        padding: _scaleText(20).fontSize
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    logo: {
        width: _scaleText(22).fontSize,
        height: _scaleText(22).fontSize
    },
    detailsContainer: {
        marginTop: _scaleText(20).fontSize
    },
    name: {
        color: COLORS.WHITE,
        fontSize: _scaleText(20).fontSize,
        fontWeight: 'bold'
    },
    aspire: {
        color: COLORS.WHITE,
        fontWeight: '600',
        marginLeft: _scaleText(3).fontSize,
        fontSize: _scaleText(15).fontSize
    },
    cardNumberText: {
        color: COLORS.WHITE,
        letterSpacing: 2,
        marginTop: _scaleText(30).fontSize,
        fontSize: _scaleText(13).fontSize,
        fontWeight: '600'
    },
    hiddenCardText: {
        color: COLORS.WHITE,
        letterSpacing: 2,
        fontSize: _scaleText(10).fontSize,
        fontWeight: '600'
    },
    expiryText: {
        color: COLORS.WHITE,
        marginTop: _scaleText(20).fontSize,
        fontWeight: '600',
        fontSize: _scaleText(12).fontSize
    },
    cvvText: {
        marginLeft: _scaleText(35).fontSize,
        color: COLORS.WHITE,
        marginTop: _scaleText(20).fontSize,
        fontWeight: '600',
        fontSize: _scaleText(12).fontSize
    },
    hiddenCvv: (showCardDetails) => ({
        color: COLORS.WHITE,
        marginTop: _scaleText(20).fontSize,
        fontWeight: '600',
        fontSize: _scaleText(showCardDetails ? 12 : 16).fontSize
    })
})
export default DebitCardUI;