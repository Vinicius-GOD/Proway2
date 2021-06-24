import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/viriliri.png';
import { theme } from '../global/styles/theme';

import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header() {
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageName() {
            const user = await AsyncStorage.getItem('@my-app:user');
            setUserName(user || '');
        }

        loadStorageName();

    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <Image source={userImg} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight()
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 45
    },
    greeting: {
        fontSize: 32,
        color: theme.colors.bluText,

    },
    userName: {
        fontSize: 32,

        color: theme.colors.bluText,
        lineHeight: 40
    }
});