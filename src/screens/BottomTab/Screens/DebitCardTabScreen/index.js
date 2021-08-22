import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, UIManager, View, Dimensions, Alert } from 'react-native';
import { CustomHeader, ScreenHOC, DebitCardRow, DebitCardUI } from '../../../../components';
import { STRINGS, _scaleText, COLORS, CommonStyles, NAVIGATION } from '../../../../shared';
import Octicons from 'react-native-vector-icons/Octicons'
import styles from './styles'
import { getUserData, setWeeklyLimit } from '../../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const W = Dimensions.get('window').width

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const DebitCardTab = () => {
    const [showCardDetails, setShowCardDetails] = useState(false)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [userData, setUserData] = useState(null)
    const [isEnabled, setIsEnabled] = useState(false)
    const weeklyLimit = useSelector(state => state.user.weeklyLimit)
    const weeklyLimitAmount = useSelector(state => state.user.weeklyLimitAmount)
    const netConnected = useSelector(state => state.common.netConnected)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const payload = {
                netConnected,
                success: (data) => {
                    setUserData(data?.data)
                },
                fail: (message) => {
                    Alert.alert(message)
                }
            }
            dispatch(getUserData(payload))
        });
        return unsubscribe;

    }, [navigation]);

    const toggleSwitch = () => {
        if (!isEnabled) {
            navigation.navigate(NAVIGATION.WEEKLY_LIMIT)
        }
        else {
            dispatch(setWeeklyLimit({ weeklyLimit: false, weeklyLimitAmount: '0' }))
        }
        setIsEnabled(!isEnabled)
    }

    const getBarFilledValue = () => {
        const value = (userData?._account?._money_spent / parseInt(weeklyLimitAmount))
        return value * W
    }

    return (
        <ScreenHOC containerStyle={styles.container} title={STRINGS.DEBIT_CARD} >
            <View style={styles.pageContainer}>
                <CustomHeader title={STRINGS.DEBIT_CARD} />
                <Text style={styles.pageTitle}>{STRINGS.AVAILABLE_BALANCE}</Text>
                <View style={styles.balanceContainer}>
                    <View
                        style={styles.currencyContainer}>
                        <Text style={styles.currencyText}>{STRINGS.SD}</Text>
                    </View>
                    <Text style={styles.amountText}>{userData?._account?._balance.toLocaleString('en')}</Text>
                </View>
                <ScrollView contentContainerStyle={CommonStyles.paddingBottom(40)} showsVerticalScrollIndicator={false} bounces={false} style={styles.scrollView} >
                    <View style={styles.emptyView}>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={styles.showDetailContainer}>
                            <TouchableOpacity style={styles.showDetailContainerInner} onPress={() => setShowCardDetails(!showCardDetails)}>
                                <Octicons name={showCardDetails ? 'eye-closed' : 'eye'} size={15} color={COLORS.SECONDARY} />
                                <Text style={styles.showHideText}>{showCardDetails ? STRINGS.HIDE_CARD_NUMBER : STRINGS.SHOW_CARD_NUMBER}</Text>
                            </TouchableOpacity>
                        </View>
                        <DebitCardUI showCardDetails={showCardDetails} userData={userData} />
                        {weeklyLimit &&
                            <View style={{ marginTop: _scaleText(30).fontSize }}>
                                <View style={styles.spendingLimitContainer}><Text>{STRINGS.DEBIT_SPENDING_LIMIT}</Text>
                                    <Text>
                                        <Text style={{ color: COLORS.SECONDARY }}>{'$' + userData?._account?._money_spent}</Text>
                                        <Text style={{ color: COLORS.GREY.A7 }}>{'  |  $' + weeklyLimitAmount}</Text>
                                    </Text>
                                </View>
                                <View style={styles.progressContainer}>
                                    <View style={styles.progressBar(getBarFilledValue())}></View>
                                </View>
                            </View>}
                        <DebitCardRow toggleSwitch={toggleSwitch} isEnabled={weeklyLimit} />
                    </View>
                </ScrollView>
            </View>
        </ScreenHOC>
    );
}

export default DebitCardTab;