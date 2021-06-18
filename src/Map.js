// Belajar Map Fillter Reduce

import React from 'react'

const makanans = [
    {
        nama: "Soto",
        harga: 10000
    },
    {
        nama: "Baso",
        harga: 20000
    },
    {
        nama: "Burger",
        harga: 30000
    },
    {
        nama: "Sate",
        harga: 40000
    },
]

// Reduce
const total_bayar = makanans.reduce((total_harga, makanan)=> {
    return total_harga + makanan.harga;
}, 0);

const Map = () => {
    return (
        <div>
            {/* Map */}
            <h2>Map sederhana</h2>  
            <ul>
                {makanans.map((makanan,index) =>(
                    <li>{index+1} {makanan.nama} - {makanan.harga}</li>
                ))}
            </ul>

            {/* Fillter */}
            <h2>Map Filter harga yang lebih dari 20000</h2>
                <ul>
                {makanans
                    .filter((makanan)=> makanan.harga > 20000)
                    .map((makanan, index) => (
                        <li>
                            {index + 1}. {makanan.nama} - Harga {makanan.harga}
                        </li>
                    ))}
                </ul>
            {/* panggil reduce */}
                <h3>Total Harga: {total_bayar}</h3>
        </div>
    )
}

export default Map
