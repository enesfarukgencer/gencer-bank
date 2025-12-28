const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Şimdilik veritabanı yerine bir değişken kullanıyoruz
// Gerçek projede bu veri MongoDB veya PostgreSQL'den gelir
let kullanıcıVerisi = {
    isim: "Enes Faruk Gençer",
    bakiye: 125500.00
};

// Bakiyeyi getir
app.get('/api/bakiye', (req, res) => {
    res.json(kullanıcıVerisi);
});

// Para çek/gönder işlemi
app.post('/api/islem', (req, res) => {
    const { miktar } = req.body;
    if (kullanıcıVerisi.bakiye >= miktar) {
        kullanıcıVerisi.bakiye -= miktar;
        res.json({ mesaj: "İşlem başarılı", yeniBakiye: kullanıcıVerisi.bakiye });
    } else {
        res.status(400).json({ hata: "Yetersiz bakiye" });
    }
});

app.listen(5000, "0.0.0.0", () => console.log("Banka Backend 5000 portunda çalışıyor"));
