import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import axios from 'axios';

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = "É necessário digitar o email";
    }

    if (!senha) {
      errors.senha = "É necessário digitar a senha";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const searchDoador = { email: email, senha: senha };
      const baseUrl = ''; // baseUrl for the API request
      const response = await axios.post(`${baseUrl}/searchdoador/`, searchDoador);
      if (response.status === 200) {
        const { id, nome, senha, email, telefone } = response.data[0];
        const path = `doador/${id}/`;
        router.push({ pathname: path, params: {
         idDoDoador: id,
         nomeDoDoador: nome,
         emailDoDoador: email,
         telefoneDoDoador: telefone,
         senhaDoDoador: senha
        } });
      }
    }
    setEmail("");
    setSenha("");
    setErrors({});
  };

  return (
      <SafeAreaView style={styles.container}>
        <Text style={[styles.text, styles.heading]}>Bem vindo a tela inicial do </Text>
        <Text style={styles.bigHeading}>Aplicativo de Doações</Text>
        <View style={styles.loginContainer}>
          <Text style={[styles.text, styles.loginHeading]}>Login</Text>
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
          { errors.email && (<Text style={styles.errorText}>{errors.email}</Text>) }
          <TextInput style={styles.input} secureTextEntry placeholder="Senha" value={senha} onChangeText={setSenha} />
          { errors.senha && (<Text style={styles.errorText}>{errors.senha}</Text>) }
          <Button onPress={handleSubmit} title="Entrar" />
        </View>
        <Link style={styles.signupLink} href="/signup">Não criou login ainda? Criar conta</Link>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  text: {
    fontSize: 25,
    padding: 20,
    marginBottom: 10
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 4,
    color: "lightblue",
    marginTop: 50,
    paddingBottom: 5,
    marginBottom: 5
  },
  bigHeading: {
    fontSize: 35,
    backgroundColor: "lightblue",
    color: "white",
    padding: 10,
    paddingHorizontal: 18,
    borderRadius: 5
  },
  loginContainer: {
    padding: 10,
    marginTop: 10,
   },
  loginHeading: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "lightblue",
    letterSpacing: 1,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 1
  },
  input: {
    fontSize: 20,
    flexDirection: "row",
    width: 350,
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: "lightblue",
    paddingBottom: 4,
    marginBottom: 12
  },
  errorText: {
    color: "red",
    marginTop: 10,
    marginBottom: 10
  },
  signupLink: {
    fontSize: 18,
    letterSpacing: 1,
    color: "#0000EE",
    padding: 10,
    paddingTop: 2,
    marginTop: 10
  }
});
