import React, { useState } from 'react'; // useState'i ekledik
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  // Başlangıç bakiyesini tanımlıyoruz
  const [bakiye, setBakiye] = useState(125500.00);

  // Para gönderme fonksiyonu
  const paraGonder = () => {
    if (bakiye >= 500) {
      setBakiye(bakiye - 500);
    } else {
      alert("Yetersiz bakiye!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>GENÇER BANK</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Toplam Bakiyeniz</Text>
        {/* Değişken olan bakiyeyi buraya bağladık */}
        <Text style={styles.balanceText}>₺{bakiye.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={paraGonder}>
        <Text style={styles.buttonText}>Hızlı Transfer (500 TL Gönder)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  header: { backgroundColor: '#1a1a1a', padding: 20, paddingTop: 50 },
  headerText: { color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
  card: { backgroundColor: 'white', margin: 20, padding: 30, borderRadius: 15, elevation: 5 },
  cardLabel: { color: '#666', fontSize: 14 },
  balanceText: { fontSize: 32, fontWeight: 'bold', marginTop: 10, color: '#2c3e50' },
  button: { backgroundColor: '#004a99', margin: 20, padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' }
});
