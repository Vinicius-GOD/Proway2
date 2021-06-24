import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Alert } from 'react-native';

import { Header } from '../components/Header';

import { theme } from '../global/styles/theme';


export function MyContracts() {



    return (

        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Header />


                    <Text style={styles.subTitle}>
                        Sua conição atual, está : resplandecente
                    </Text>

                </View>
            </View>



            <View>
                <Text style={styles.Title}>
                    Seus contratos
                </Text>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgrund
    },
    content: {
        width: '100%',
        height: 200,
        backgroundColor: theme.colors.bunttonBackground
    },
    header: {
        paddingLeft: 30,
        paddingRight: 30
    },


    Title: {
        fontSize: 24,
        color: theme.colors.button,
        marginVertical: 20,
        marginLeft: 30,
    },
    subTitle: {
        fontSize: 17,
        lineHeight: 20,
        color: theme.colors.bluText
    },

});