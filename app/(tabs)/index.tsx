import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>GENÇER BANK</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.balanceLabel}>Toplam Bakiyeniz</Text>
        <Text style={styles.balance}>₺125.500,00</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4' },
  header: { padding: 20, backgroundColor: '#1a1a1a', alignItems: 'center' },
  title: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  card: { margin: 20, padding: 30, backgroundColor: 'white', borderRadius: 15, elevation: 5 },
  balanceLabel: { color: '#666', fontSize: 16 },
  balance: { fontSize: 32, fontWeight: 'bold', marginTop: 10 }
});
