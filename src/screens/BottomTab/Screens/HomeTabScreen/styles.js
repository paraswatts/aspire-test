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
});