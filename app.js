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

app.post("/produk", (req, res) =>{
    // Validasi nama
    if(typeof req.body.nama !== "string" || req.body.nama.trim() === ""){
        return res.status(400).json({
           pesan: "Nama produk perlu berupa string!" 
        });
    }

    // Validasi harga
    if(typeof req.body.harga !== "number" || req.body.harga < 0 || !Number.isFinite(req.body.harga)){
        return res.status(400).json({
            pesan : "Harga produk tidak boleh negatif!"
        });
    }
    
    // Membuat produk baru
    const produkBaru = {
        id : produk.length +1,
        nama : req.body.nama,
        harga : req.body.harga
    };

    // Input produk baru
    produk.push(produkBaru);
    return res.status(201).json({
        pesan: "Data berhasil ditambahkan.",
        data : produkBaru
    });
    
});

app.listen(PORT, () =>{
    console.log(`Program berjalan pada http://localhost:${PORT}`);
});