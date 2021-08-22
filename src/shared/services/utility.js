import { scaleText } from 'react-native-text';
import { Alert, Dimensions, Linking, PermissionsAndroid, Platform, ToastAndroid } from 'react-native';
import { countries, GREETINGS, ICONS, POLLUTION_LEVELS, STRINGS } from '../constants';
let dim = Dimensions.get('window')
let height = dim.height > dim.width ? dim.height : dim.width;

export const _scaleText = (fontSize) => {
    return scaleText({ fontSize });
}

// export const _showCustomToast = ({ type = 'danger', message = '', description = '', ...rest }) => {
//     showMessage({
//         icon: 'auto',
//         message,
//         type,
//         description,
//         ...rest,
//         position: 'top'
//     })
// }

export const _showNativeAlert = ({ title = '', subtitle = '', buttons = [] }) => {
    Alert.alert(
        title,
        subtitle,
        [...buttons],
    )
}
