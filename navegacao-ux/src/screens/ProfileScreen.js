import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  const user = {
    name: 'Maria Fernanda',
    email: 'maria.fernanda@email.com',
    course: 'ADS',
    status: 'Ativo'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{user.name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Curso:</Text>
        <Text style={styles.value}>{user.course}</Text>

        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{user.status}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 8
  },
  label: {
    fontWeight: 'bold',
    marginTop: 8
  },
  value: {
    marginBottom: 8
  }
});