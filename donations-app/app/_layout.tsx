import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return(
    <Stack screenOptions={styles}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
      <Stack.Screen name="doador/[id]/index" options={{ title: "Perfil" }} />
      <Stack.Screen name="doador/[id]/success" options={{ title: "Sucesso na nova doação" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "lightblue"
  },
  headerTintColor: "#FFF"
});
