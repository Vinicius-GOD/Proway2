import React, { useEffect, useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import mao from '../../assets/mao.png';
import banco from '../../assets/banco.png'

import { useNavigation } from '@react-navigation/native';


import { theme } from '../global/styles/theme';


import { Header } from '../components/Header';


import api from '../services/api';
import { Colors } from 'react-native/Libraries/NewAppScreen';




export function LoanSelector() {


    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('LoanConfirm');
    }



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
                <Text style={styles.title}>
                    Gostaria de realizar um empréstimo
                </Text>

            </View>

            <View style={styles.contracts}>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleStart}

                >
                    <Image
                        style={styles.image}
                        source={mao}
                    />
                    <Text style={styles.buttonText}>
                        Empréstimo Pessoal
                    </Text>
                    <Text style={styles.buttonSubtitle}>
                        Escolha o valor que você precisa, receba rápido, sem burocracia.
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleStart}

                >
                    <Image
                        style={styles.image}
                        source={banco}
                    />
                    <Text style={styles.buttonText}>
                        Empréstimo Com Garantia
                    </Text>
                    <Text style={styles.buttonSubtitle}>
                        Use seu imóvel ou veículo como garantia, consiga as melhores taxas
                    </Text>

                </TouchableOpacity>
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
    title: {
        fontSize: 17,
        textAlign: 'center',
        color: theme.colors.title,
        lineHeight: 20,
        marginTop: 15
    },
    subTitle: {
        fontSize: 17,
        lineHeight: 20,
        color: theme.colors.bluText
    },

    contracts: {
        marginTop: 30,
        paddingHorizontal: 25,
        justifyContent: 'center'
    },
    button: {
        backgroundColor: theme.colors.bunttonBackground,
        borderRadius: 8,
        marginBottom: 40,
        height: 80,
        width: 360

    },
    buttonText: {
        fontSize: 16,
        color: theme.colors.bluTitle,
        fontWeight: 'bold',
        marginLeft: 69,

    },
    buttonSubtitle: {
        fontSize: 14,
        color: theme.colors.bluText,
        marginLeft: 69,

    },
    image: {
        position: 'absolute',
        width: 64,
        height: 64,
        left: 0,
        top: 0,
    },

});