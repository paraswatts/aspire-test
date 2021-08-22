import { Image, View, Text, StyleSheet } from "react-native";
import { IMAGES, STRINGS, _scaleText, COLORS, CommonStyles } from "../../../shared";
import React from 'react'
import { CustomSwitch } from "../../atoms";
const rows = [
    {
        _id: 1,
        _title: STRINGS.TOP_UP_ACCOUNT_TITLE,
        _subtitle: STRINGS.TOP_UP_ACCOUNT_SUBTITLE,
        _switch: false,
        _icon: IMAGES.TOP_UP,
        _isEnabled: false
    }, {
        _id: 2,
        _title: STRINGS.WEEKLY_SPENDING_LIMIT_TITLE,
        _subtitle: STRINGS.WEEKLY_SPENDING_LIMIT_SUBTITLE,
        _switch: true,
        _icon: IMAGES.WEEKLY_SPENDING,
    }, {
        _id: 3,
        _title: STRINGS.FREEZE_CARD_TITLE,
        _subtitle: STRINGS.FREEZE_CARD_SUBTITLE,
        _switch: true,
        _icon: IMAGES.FREEZE_CARD
    }, {
        _id: 4,
        _title: STRINGS.GET_NEW_CARD_TITLE,
        _subtitle: STRINGS.GET_NEW_CARD_SUBTITLE,
        _switch: false,
        _icon: IMAGES.GET_NEW_CARD
    }, {
        _id: 5,
        _title: STRINGS.DEACTIVATED_CARDS_TITLE,
        _subtitle: STRINGS.DEACTIVATED_CARDS_SUBTITLE,
        _switch: false,
        _icon: IMAGES.DEACTIVATED_CARDS
    }
]

const Row = (item, toggleSwitch, isEnabled) => {
    const { _id, _title, _subtitle, _switch, _icon } = item;
    let isEnabledValue = false
    if (_id == 2) {
        isEnabledValue = isEnabled
    }
    return (
        <View key={_id.toString()} style={styles.rowContainer}>
            <View style={CommonStyles.row}>
                <Image source={_icon} style={styles.icon} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{_title}</Text>
                    <Text style={styles.subtitle}>{_subtitle}</Text>
                </View>
            </View>
            {_switch && <CustomSwitch isEnabled={isEnabledValue} toggleSwitch={toggleSwitch} />}
        </View>
    )
}

const CustomDebitCardRow = ({ toggleSwitch, isEnabled }) => {
    return (
        <View style={CommonStyles.marginTop(10)}>
            {rows.map((item) => Row(item, toggleSwitch, isEnabled))}
        </View>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        marginTop: _scaleText(20).fontSize,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        height: _scaleText(30).fontSize,
        width: _scaleText(30).fontSize
    },
    titleContainer: {
        marginTop: _scaleText(3).fontSize,
        marginLeft: _scaleText(8).fontSize
    },
    title: {
        color: COLORS.PRIMARY_DARK
    },
    subtitle: {
        color: COLORS.GREY.A7,
        fontSize: _scaleText(12).fontSize,
        lineHeight: _scaleText(20).fontSize
    }
})
export default CustomDebitCardRow;