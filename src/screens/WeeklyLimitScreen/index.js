import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, UIManager, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton, ScreenHOC, CustomInput } from '../../components';
import { setWeeklyLimit } from '../../redux/actions';
import { IMAGES, STRINGS, _scaleText } from '../../shared';
import styles from './styles';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const WeeklyLimitScreen = () => {
    const [amount, setAmount] = useState('0')
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const saveWeeklyLimit = () => {
        dispatch(setWeeklyLimit({ weeklyLimit: true, weeklyLimitAmount: amount }))
        navigation.goBack()
    }
    return (
        <ScreenHOC containerStyle={styles.container} showHeader showBackIcon onBackPress={() => navigation.goBack()}>
            <View style={styles.pageContainer}>
                <Text style={styles.limitText}>{STRINGS.SPENDING_LIMIT}</Text>
                <View style={styles.bottomContainer}>
                    <View style={styles.messageContainer}>
                        <Image resizeMode="contain" source={IMAGES.METER} style={{ width: _scaleText(20).fontSize, height: _scaleText(20).fontSize }} />
                        <Text style={styles.weeklyLimitText}>{STRINGS.SET_WEEKLY_LIMIT}</Text>
                    </View>
                    <CustomInput placeholder={'0'} value={amount} onChange={(value) => setAmount(value)} />
                    <Text style={styles.weeklyMeansText}>{STRINGS.WEEKLY_MEANS}</Text>
                    <View style={styles.buttonsContainer}>
                        <CustomButton
                            onPress={() => setAmount('5000')}
                            buttonStyle={styles.currencyButton}
                            title={STRINGS.SG_5}
                            titleStyle={styles.currencyText} />
                        <CustomButton
                            onPress={() => setAmount('10000')}
                            buttonStyle={styles.currencyButton}
                            title={STRINGS.SG_10}
                            titleStyle={styles.currencyText} />
                        <CustomButton
                            onPress={() => setAmount('20000')}
                            buttonStyle={styles.currencyButton}
                            title={STRINGS.SG_20}
                            titleStyle={styles.currencyText} /></View>
                    <View style={styles.saveContainer}>
                        <CustomButton
                            onPress={saveWeeklyLimit}
                            buttonStyle={styles.saveButton}
                            title={STRINGS.SAVE}
                            titleStyle={styles.saveText} />
                    </View>
                </View>
            </View>
        </ScreenHOC>
    );
}

export default WeeklyLimitScreen;