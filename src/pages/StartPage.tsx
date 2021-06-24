import React from "react";

import { Text, View, StyleSheet, Image, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { styles } from "../styles/styles";



import Background from '../../assets/Background.png'

export function StartPage() {

    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserName');
    }

    return (


        <View style={styles.container}>

            <Text style={styles.title}>
                Bem vindo ao{`\n`}
                Emprestimo para{`\n`}
                todxs
            </Text>

            <Image
                source={Background}
                style={styles.image}

            />

            <Text style={styles.subTitle}>
                Vamos facilitar sua vida {`\n`}
                financeira com o{`\n`}
                empréstimo ideal
            </Text>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleStart}

            >
                <Text style={styles.buttonText}>
                    Continuar
                </Text>

            </TouchableOpacity>
        </View>

    )
}



