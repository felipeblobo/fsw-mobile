import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import AppDataService from './services/AppData.js'
import { Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native'

export default function App() {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState(0)
    const [dataNascimento, setDataNascimento] = useState('')
    const [grupo, setGrupo] = useState(null)

    const handleAdd = (event) => {
        const pessoa = {
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            email: email,
            idade: idade,
            dataNascimento: dataNascimento,
            grupo: {
                codigo: grupo
            }
        }

        AppDataService.cadastrarPessoa(pessoa)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>VacineJá</Text>
            <TextInput
                onChangeText={setNome}
                value={nome}
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#fff"
            ></TextInput>
            <TextInput
                onChangeText={setCpf}
                value={cpf}
                style={styles.input}
                placeholder="CPF"
                placeholderTextColor="#fff"
            ></TextInput>
            <TextInput
                onChangeText={setTelefone}
                value={Number(telefone)}
                style={styles.input}
                placeholder="Telefone"
                placeholderTextColor="#fff"
            ></TextInput>
            <TextInput
                onChangeText={setEmail}
                value={email}
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#fff"
            ></TextInput>
            <TextInput
                onChangeText={setIdade}
                value={idade}
                style={styles.input}
                placeholder="Idade"
                placeholderTextColor="#fff"
            ></TextInput>
            <TextInput
                onChangeText={setDataNascimento}
                value={dataNascimento}
                style={styles.input}
                placeholder="Data de Nascimento"
                placeholderTextColor="#fff"
            ></TextInput>
            <TextInput
                onChangeText={setGrupo}
                value={grupo}
                style={styles.input}
                placeholder="Grupo"
                placeholderTextColor="#fff"
            ></TextInput>
            <Button onPress={handleAdd} title="Cadastrar"></Button>
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
        fontSize: 16,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#463B5D',
        color: '#ffffff',
        backgroundColor: '#463B5D'
    },

    title: {
        textAlign: 'center',
        fontSize: 32,
        marginVertical: 8
    }
})
