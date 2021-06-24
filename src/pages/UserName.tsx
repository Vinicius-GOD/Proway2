import content from '*.png';
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

import AsyncStorage from '@react-native-async-storage/async-storage'

import { Button } from '../components/Button';

import { theme } from '../global/styles/theme';

import { useNavigation } from '@react-navigation/native';

export function UserName() {
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



    async function handleSubmit() {
        if (!name)
            return Alert.alert('Me diz como chamar você 😥');
        try {
            await AsyncStorage.setItem('@my-app:user', name);
            navigation.navigate('Confirmation', {
                title: 'Prontinho',
                subtitle: 'Agora você terá acesso ao melhor contrato de empréstimo da sua vida!',
                buttonTitle: 'Confirmar',
                icon: 'smile',
                nextScreen: 'LoanSelector',
            });

        } catch {
            Alert.alert('Não foi possiuvel salvar o seu nome. 😥');
        }
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
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    {isFilled ? '😊' : '😃'}
                                </Text>
                                <Text style={styles.title}>
                                    Como podemos {'\n'}
                                    chamar você
                                </Text>
                            </View>
                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) &&
                                    { borderColor: theme.colors.title }
                                ]}
                                placeholder='Digite um nome'
                                onBlur={handInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />

                            <View style={styles.footer}>
                                <Button
                                    title='Confirmar'
                                    onPress={handleSubmit}
                                />
                            </View>
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
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 54
    },
    header: {
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 2,
        borderColor: theme.colors.title,
        color: theme.colors.title,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'

    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: theme.colors.title,
        marginTop: 20

    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    }
});