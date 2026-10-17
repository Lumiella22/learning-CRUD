// Server build
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Deklarasi
const produk = [
    {id: 1, nama: "Keyboard", harga: 75000},
    {id: 2, nama: "Mouse", harga: 50000},
    {id: 3, nama: "Monitor", harga: 150000}
];

// Main Program
app.get("/produk", (req, res) =>{
    res.status(200).json(produk);
});

app.listen(PORT, () =>{
    console.log(`Program berjalan pada http://localhost:${PORT}`);
});