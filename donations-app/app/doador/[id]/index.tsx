import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import axios from 'axios';

export default function PerfilDoDoador() {

  const params = useLocalSearchParams();
  const { idDoDoador, nomeDoDoador, emailDoDoador, telefoneDoDoador, senhaDoDoador } = params;
  const router = useRouter();

  const doador = {
    id: idDoDoador,
    nome: nomeDoDoador,
    email: emailDoDoador,
    telefone: telefoneDoDoador,
    senha: senhaDoDoador
  };

  const [detalhesDaDoacao, setDetalhesDaDoacao] = useState("");
  const [enderecoDaColeta, setEnderecoDaColeta] = useState("");

  const createDoacao = async () => {
    if (detalhesDaDoacao && enderecoDaColeta) {
      const baseUrl = ''; // baseUrl for the API request
      const novaDoacao = {
        idDoDoador: doador.id,
        enderecoDaColeta: enderecoDaColeta,
        detalhesDaDoacao: detalhesDaDoacao,
        coletaFoiRealizada: "ainda_nao"
      };
      const response = await axios.post(`${baseUrl}/doacao/`, novaDoacao);
      if (response.status === 201) {
        router.push({ pathname: `doador/${doador.id}/success`, params: { nomeDoDoador: doador.nome, emailDoDoador: doador.email, telefoneDoDoador: doador.telefone } });
      }
    }
    setDetalhesDaDoacao("");
    setEnderecoDaColeta("");
    setErrors({});
  };

  return(
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, styles.heading]}>Bem vindo {doador.nome}!</Text>
      <View style={styles.perfilContainer}>
        <Text style={styles.text}>Email: {doador.email}</Text>
        <Text style={styles.text}>Telefone: {doador.telefone}</Text>
      </View>

      <View style={styles.container}>
        <Text style={[styles.text, { color: "black", fontSize: 22 }]}>Detalhes do que deseja doar</Text>
        <TextInput style={[styles.input, { color: "lightblue", fontWeight: "bold", letterSpacing: 0.5 }]} value={detalhesDaDoacao} onChangeText={setDetalhesDaDoacao}></TextInput>
        <Text style={[styles.text, { color: "black", fontSize: 21, marginTop: 30 }]}>Endereço para coletarmos sua doação</Text>
        <TextInput style={[styles.input, { color: "lightblue", fontWeight: "bold", letterSpacing: 0.5, marginBottom: 30 }]} value={enderecoDaColeta} onChangeText={setEnderecoDaColeta}></TextInput>
        <Button onPress={createDoacao} title="Criar doação" />
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 2
  },
  perfilContainer: {
    backgroundColor: "lightblue",
    paddingTop: 0,
    paddingBottom: 18,
    paddingLeft: 50,
    borderRadius: 50,
    marginRight: 42,
    marginBottom: 50,
    marginLeft: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
    color: "white",
    paddingTop: 10,
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
  input: {
    fontSize: 20,
    flexDirection: "row",
    width: 350,
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: "lightblue",
    paddingBottom: 4,
  },
  link: {
    fontSize: 23,
    letterSpacing: 1,
    color: "#0000EE",
    padding: 10,
    paddingTop: 2,
    marginTop: 10
  }
});