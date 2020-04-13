import React from 'react'
import { View, StatusBar, ActivityIndicator, AsyncStorage, StyleSheet } from 'react-native'

export default class AuthLoadingScreen extends React.Component {

    constructor() {
        super();
        this._bootstrap();
    }

    _bootstrap = async () => {

        const userName = await AsyncStorage.getItem('userName');
        this.props.navigation.navigate(userName ? 'App' : 'Auth');
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});