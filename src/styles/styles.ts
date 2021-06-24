import React from 'react';
import { Dimensions, StyleSheet } from "react-native";

import { theme } from '../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20

    },

    title: {
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 25,
        marginTop: 90,
        color: theme.colors.title,

    },

    subTitle: {
        textAlign: 'center',
        fontSize: 17,
        lineHeight: 25,
        marginTop: 20,
        marginBottom: 28,
        color: theme.colors.subtitle
    },

    button: {
        backgroundColor: theme.colors.button,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 40,
        height: 52,
        width: 275
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: theme.colors.buttonText
    },

    image: {
        width: '100%'
    },
})