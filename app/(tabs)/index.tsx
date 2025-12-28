import React, { useState, useEffect } from 'react'; // useEffect'i ekledik
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import axios from 'axios'; // Axios eklendi
export default function App() {
  // Başlangıç bakiyesini tanımlıyoruz
  const [bakiye, setBakiye] = useState(0);
  const [yukleniyor, setYukleniyor] = useState(true);

  // Bilgisayarının Yerel IP Adresi (Örn: 192.168.1.x)
  const API_URL = " http://10.202.34.181:5000/api"; 

  // Uygulama açıldığında bakiyeyi sunucudan çek
  useEffect(() => {
    verileriGetir();
  }, []);

  const verileriGetir = async () => {
    try {
      const response = await axios.get(`${API_URL}/bakiye`);
      setBakiye(response.data.bakiye);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    } finally {
      setYukleniyor(false);
    }
  };

  const paraGonder = async () => {
    try {
      const response = await axios.post(`${API_URL}/islem`, { miktar: 500 });
      setBakiye(response.data.yeniBakiye);
      alert("500 TL başarıyla gönderildi!");
    } catch (error) {
      alert(error.response?.data?.hata || "Sunucuya bağlanılamadı");
    }
  };

  if (yukleniyor) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}><ActivityIndicator size="large" color="#004a99" /></View>
    );
  }
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
