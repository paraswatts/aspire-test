import React from 'react';
import { Text, UIManager, View } from 'react-native';
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const CreditCardTab = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Credit Tab</Text>
        </View>
    );
}

export default CreditCardTab;