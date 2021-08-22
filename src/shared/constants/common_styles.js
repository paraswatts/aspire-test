import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, _scaleText, TEXT_STYLES } from '../';
const H = Dimensions.get('window').height
const W = Dimensions.get('window').width
export const CommonStyles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    marginLeft: (value = 0) => ({
        marginLeft: _scaleText(value).fontSize
    }),
    marginTop: (value = 0) => ({
        marginTop: _scaleText(value).fontSize
    }),
    marginRight: (value = 0) => ({
        marginRight: _scaleText(value).fontSize
    }),
    marginBottom: (value = 0) => ({
        marginBottom: _scaleText(value).fontSize
    }),
    fontSize: (value = 14) => ({
        fontSize: _scaleText(value).fontSize
    }),
    absolute: {
        position: 'absolute'
    },
    paddingRight: (value = 0) => ({
        paddingRight: _scaleText(value).fontSize
    }),
    paddingLeft: (value = 0) => ({
        paddingLeft: _scaleText(value).fontSize
    }),
    paddingHorizontal: (value = 0) => ({
        paddingHorizontal: _scaleText(value).fontSize
    }),
    flexOne: {
        flex: 1
    },
    paddingBottom: (value = 0) => ({
        paddingBottom: _scaleText(value).fontSize
    }),
    paddingTop: (value = 0) => ({
        paddingTop: _scaleText(value).fontSize
    }),
});