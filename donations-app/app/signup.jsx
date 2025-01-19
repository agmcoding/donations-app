import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
      const errors = {};

      if (!email) {
        errors.email = "É necessário digitar o email";
      }
      if (!nome) {
        errors.nome = "É necessário digitar o nome";
      }
      if (!telefone) {
        errors.telefone = "É necessário digitar o telefone";
      }
      if (!senha) {
        errors.senha = "É necessário digitar a senha";
      }

      setErrors(errors);

      return Object.keys(errors).length === 0;
    };

    const criarDoador = async () => {
      if (validateForm()) {
        const novoDoador = { nome: nome, senha: senha, email: email, telefone: telefone };
        const baseUrl = ''; // baseUrl for the API request
        const response = await axios.post(`${baseUrl}/doador/criardoador/`, novoDoador);
        if (response.status === 201) {
          Alert.alert(`Sua conta foi criada! Agora é só fazer o login com o email e sua senha`);
        }
      }
      setEmail("");
      setSenha("");
      setErrors({});
    };

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.signupHeading}>Sign Up</Text>
      <Text style={[styles.text, { marginTop: 2 }]}>Por favor insira seu email:</Text>
      <TextInput style={styles.input} placeholder="exemplo@email.com" value={email} onChangeText={setEmail} />
      <Text style={styles.text}>Seu nome:</Text>
      <TextInput style={styles.input} placeholder="Nome Sobrenome" value={nome} onChangeText={setNome} />
      <Text style={styles.text}>Seu telefone:</Text>
      <TextInput style={styles.input} placeholder="91234-5678" value={telefone} onChangeText={setTelefone} />
      <Text style={[styles.text, { textAlign: "center", marginBottom: 4 }]}>Sua senha:</Text>
      <TextInput style={[styles.input, styles.senha]} secureTextEntry value={senha} onChangeText={setSenha} />
      <View style={{ maxWidth: 200, paddingVertical: 5, marginTop: 20, marginBottom: 5, marginLeft: 102}}>
        <Button onPress={criarDoador} title="Criar Conta" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left"
  },
  text: {
      fontSize: 25,
      fontWeight: "bold",
      color: "lightblue",
      paddingHorizontal: 20,
      marginTop: 20
  },
  signupContainer: {
      padding: 10,
      marginTop: 10,
  },
  signupHeading: {
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10
  },
  input: {
    fontSize: 20,
    flexDirection: "row",
    width: 350,
    height: 64,
    paddingVertical: 1,
    borderBottomWidth: 1,
    borderBottomColor: "lightblue",
    marginLeft: 18,
  },
  senha: {
    backgroundColor: "lightblue",
    textAlign: "center",
    borderRadius: 30,
    marginLeft: 30
  }
});
