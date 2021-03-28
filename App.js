import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Cadastro VacineJá</Text>
            <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#fff"></TextInput>
            <TextInput style={styles.input} placeholder="CPF" placeholderTextColor="#fff"></TextInput>
            <TextInput style={styles.input} placeholder="Telefone" placeholderTextColor="#fff"></TextInput>
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#fff"></TextInput>
            <TextInput style={styles.input} placeholder="Idade" placeholderTextColor="#fff"></TextInput>
            <TextInput style={styles.input} placeholder="Data de Nascimento" placeholderTextColor="#fff"></TextInput>
            <TextInput style={styles.input} placeholder="Grupo" placeholderTextColor="#fff"></TextInput>
            <Button title="Cadastrar"></Button>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4F7B7E',
        justifyContent: 'center'
    },

    input: {
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#463B5D',
        color: '#ffffff',
        backgroundColor:'#463B5D'

        
    },

    title: {}
})
