import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, _scaleText, TEXT_STYLES } from '../../../../shared';
const H = Dimensions.get('window').height
const W = Dimensions.get('window').width
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.PRIMARY
    },
    pageContainer: {
        flex: 1, width: '100%',
        borderWidth: 0
    },
    pageTitle: {
        color: COLORS.WHITE,
        marginTop: _scaleText(30).fontSize,
        paddingHorizontal: _scaleText(20).fontSize
    },
    balanceContainer: {
        flexDirection: 'row',
        marginTop: _scaleText(10).fontSize,
        alignItems: 'center',
        paddingHorizontal: _scaleText(20).fontSize
    },
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
    amountText: {
        includeFontPadding: false,
        fontWeight: 'bold',
        fontSize: _scaleText(20).fontSize,
        color: COLORS.WHITE,
        marginLeft: _scaleText(10).fontSize
    },
    scrollView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    emptyView: {
        height: _scaleText(240).fontSize
    },
    bottomView: {
        paddingHorizontal: _scaleText(20).fontSize,
        flex: 1,
        backgroundColor: COLORS.WHITE,
        borderTopRightRadius: _scaleText(25).fontSize,
        borderTopLeftRadius: _scaleText(25).fontSize,
        paddingBottom: _scaleText(50).fontSize
    },
    showDetailContainer: {
        width: _scaleText(150).fontSize,
        height: _scaleText(40).fontSize,
        backgroundColor: COLORS.WHITE,
        position: 'absolute',
        right: _scaleText(20).fontSize,
        top: -_scaleText(90).fontSize,
        borderTopLeftRadius: _scaleText(5).fontSize,
        borderTopRightRadius: _scaleText(5).fontSize,

    },
    showDetailContainerInner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: _scaleText(30).fontSize
    },
    showHideText: {
        color: COLORS.SECONDARY,
        marginLeft: _scaleText(5).fontSize,
        fontWeight: '500',
        fontSize: _scaleText(12).fontSize
    },
    spendingLimitContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    progressContainer: {
        overflow: 'hidden',
        flex: 1,
        height: _scaleText(15).fontSize,
        backgroundColor: COLORS.LIGHT_GREEN,
        marginTop: _scaleText(10).fontSize,
        borderRadius: _scaleText(10).fontSize
    },
    progressBar: value => ({
        height: _scaleText(15).fontSize,
        backgroundColor: COLORS.SECONDARY,
        width: value,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: _scaleText(10).fontSize,
        borderTopWidth: _scaleText(15).fontSize,
        borderRightColor: 'transparent',
        borderTopColor: COLORS.SECONDARY,
        overflow: 'hidden'
    })
});