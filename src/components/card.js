import React from "react";
import { Link } from "react-router-dom";



function Card()
{
    return (
        <div className="pt-12 justify-center">
            
            <p className="text-black text-center w-auto h-6 rounded divide-black pt-4  font-bold font-serif">
                "APLIKASI PENJUALAN NINE MART"
            </p>
            <p className="m-auto text-center text-base pt-5 ">
                <Link to ="/stock"className="text-blue-800 text-xs font-serif underline "> STOK BARANG | TRANSAKSI</Link> <br></br>               
                <a className="text-blue-800 text-xs font-serif underline "> LIHAT STOK BARANG | LIHAT TRANSAKSI </a> <br></br>
               
            </p>
            <p className="m-auto text-base pt-6">
                <a className="font-bold text-xs "> @SMK Negeri 9 Semarang </a> <br></br>
                
           </p>
        </div>
    )
}

export default Card;