const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk membaca JSON dari request body
app.use(express.json());

// Route dasar
app.get('/', (req, res) => {
  res.send('Halo dari Express!');
});

// Contoh route API
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, nama: 'Budi' },
    { id: 2, nama: 'Sari' },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});