import { SafeAreaView, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CreatedDoadorSuccess() {

  const params = useLocalSearchParams();
  const { nomeDoDoador, emailDoDoador, telefoneDoDoador } = params;

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Obrigado {nomeDoDoador}!</Text>
      <Text style={styles.text}>Pedimos que confira seu email ({emailDoDoador})
      e seu telefone ({telefoneDoDoador}) para fazermos contato com você!
      </Text>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: 2
  },
  text: {
    fontSize: 30,
    backgroundColor: "lightblue",
    color: "white",
    padding: 26,
    borderRadius: 30
  },
  heading: {
    fontSize: 35,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 4,
    color: "lightblue",
    marginTop: 50,
    paddingBottom: 5,
    marginBottom: 30
  }
};