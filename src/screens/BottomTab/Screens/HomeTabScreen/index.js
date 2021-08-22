import React from 'react';
import { Text, UIManager, View } from 'react-native';
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const HomaTab = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, width: '100%' }}>
            <Text>Home Tab</Text>
        </View>
    );
}

export default HomaTab;