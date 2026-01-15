import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setData(null);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={styles.text}>Carregando dados...</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>Nenhum dado encontrado</Text>
        <Button
          title="Ir para Details"
          onPress={() => navigation.navigate('Details', { id: 1 })}
        />
      </View>
    );
  }

  return (
    <View style={styles.center}>
      <Text style={styles.text}>Dados carregados com sucesso</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  text: {
    marginBottom: 12,
    fontSize: 16
  }
});