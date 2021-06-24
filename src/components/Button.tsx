import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';

import { theme } from '../global/styles/theme';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
            activeOpacity={0.7}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.button,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 40,
        height: 52,
        width: 275

    },
    text: {
        fontSize: 16,
        color: theme.colors.buttonText
    }
});