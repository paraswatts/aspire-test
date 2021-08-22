import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, _scaleText, TEXT_STYLES } from '../../shared';
const H = Dimensions.get('window').height
const W = Dimensions.get('window').width
export default StyleSheet.create({
    pageContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.PRIMARY
    },
    limitText: {
        fontSize: _scaleText(22).fontSize,
        color: COLORS.WHITE,
        fontWeight: 'bold',
        paddingHorizontal: _scaleText(20).fontSize
    },
    bottomContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.WHITE,
        padding: _scaleText(20).fontSize,
        marginTop: _scaleText(35).fontSize,
        borderTopRightRadius: _scaleText(25).fontSize,
        borderTopLeftRadius: _scaleText(25).fontSize,
        padding: _scaleText(20).fontSize
    },
    messageContainer: {
        flexDirection: 'row',
        marginTop: _scaleText(10).fontSize,
        alignItems: 'center'
    },
    weeklyMeansText: {
        color: COLORS.GREY.A7,
        marginTop: _scaleText(15).fontSize
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: _scaleText(30).fontSize,
    },
    currencyButton: {
        flex: 0.31,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: _scaleText(5).fontSize,
        height: _scaleText(40).fontSize,
        backgroundColor: COLORS.LIGHT_GREEN
    },
    currencyText: {
        fontWeight: '500',
        color: COLORS.SECONDARY
    },
    saveContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: _scaleText(20).fontSize,
        left: 0,
        right: 0
    },
    saveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: _scaleText(30).fontSize,
        width: '80%',
        height: _scaleText(60).fontSize,
        backgroundColor: COLORS.SECONDARY
    },
    saveText: {
        fontWeight: '500',
        fontSize: _scaleText(18).fontSize,
        color: COLORS.WHITE
    },
    weeklyLimitText: {
        marginLeft: _scaleText(10).fontSize,
        fontSize: _scaleText(13).fontSize
    }
});