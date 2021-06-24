import React, { useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View, Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useNavigation, useRoute } from '@react-navigation/core';
import { SvgFromUri } from 'react-native-svg';

import { theme } from '../global/styles/theme';



import { Button } from '../components/Button';


export function LoanConfirm() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    const navigation = useNavigation();

    function handInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }



    async function handleSave() {
        navigation.navigate('Confirmation', {
            title: 'Tudo certo',
            subtitle: 'Fique tranquilo seu empréstimo foi efetuado.',
            buttonTitle: 'Muito obrigado :D',
            icon: 'hug',
            nextScreen: 'MyContracts',
        });

    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>


                            <Text style={styles.title}>
                                Qual seu nome?(nome da carteira de identidade)
                            </Text>
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                { borderColor: theme.colors.title }
                            ]}
                            placeholder='Eduardo Regis Cunha'
                            onBlur={handInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.form}>


                            <Text style={styles.title}>
                                QUal sua data de nascimento
                            </Text>
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                { borderColor: theme.colors.title }
                            ]}
                            placeholder='21/07/2003'
                            onBlur={handInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.form}>


                            <Text style={styles.title}>
                                Estado Civil
                            </Text>
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                { borderColor: theme.colors.title }
                            ]}
                            placeholder='Solteiro'
                            onBlur={handInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.form}>


                            <Text style={styles.title}>
                                DDD + Numero
                            </Text>
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                { borderColor: theme.colors.title }
                            ]}
                            placeholder='55 47 99999-9999'
                            onBlur={handInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.form}>


                            <Text style={styles.title}>
                                CPF
                            </Text>
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                { borderColor: theme.colors.title }
                            ]}
                            placeholder='000-000-000.22'
                            onBlur={handInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.form}>


                            <Text style={styles.title}>
                                Escoloaridade
                            </Text>
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                { borderColor: theme.colors.title }
                            ]}
                            placeholder='Ensino fundamental completo'
                            onBlur={handInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.form}>


                            <Text style={styles.title}>
                                Renda mensal comprovada
                            </Text>
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                { borderColor: theme.colors.title }
                            ]}
                            placeholder='R$ 2.300,00'
                            onBlur={handInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.form}>


                            <Text style={styles.title}>
                                Qual o valor que você precisa
                            </Text>
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                { borderColor: theme.colors.title }
                            ]}
                            placeholder='R$ 1.000,00 a R$ 5.000,00'
                            onBlur={handInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.form}>


                            <Text style={styles.title}>
                                Em quantas parcelas você vai pagar
                            </Text>
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                { borderColor: theme.colors.title }
                            ]}
                            placeholder='12x a 36x'
                            onBlur={handInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />

                        <View style={styles.footer}>
                            <Button
                                title="Analisar Contrato"
                                onPress={handleSave}
                            />
                        </View>
                    </View>




                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',

        justifyContent: 'space-around'

    },
    content: {

        width: '100%'
    },
    form: {

    },

    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 2,
        borderColor: theme.colors.title,
        color: theme.colors.title,
        width: '80%',
        fontSize: 14,
        marginTop: 10,
        padding: 0,
        marginLeft: 40,


    },
    title: {
        fontSize: 14,
        lineHeight: 16,
        marginLeft: 40,
        color: theme.colors.title,
        marginTop: 20

    },
    footer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20
    }
});