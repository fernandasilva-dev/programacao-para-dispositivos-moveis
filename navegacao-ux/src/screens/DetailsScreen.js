import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export default function DetailsScreen({ route }) {
  const { id } = route.params;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={styles.text}>Carregando detalhes...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>
          Erro ao carregar os dados do item {id}
        </Text>
        <Button
          title="Tentar novamente"
          onPress={() => {
            setLoading(true);
            setError(false);

            setTimeout(() => {
              setLoading(false);
            }, 1500);
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.center}>
      <Text style={styles.text}>Detalhes do item</Text>
      <Text>ID recebido: {id}</Text>
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
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center'
  }
});