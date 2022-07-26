import React from "react";
import { Link } from "react-router-dom";

function Stock() {
  return (
    <div className="pt-12">
      <form className="px-8 pt-6 pb-8 mb-4 ">
        <p className="font-serif font-bold  m-2">FORM STOK BARANG</p>
        <table class="tabel  text-left" id="tabel">
          <tr className="satu">
            <td>Kode Barang</td>
            <td className="border border-black w-5 text-center">:</td>
            <td>
              <input type="text" required></input>
            </td>
          </tr>

          <tr className="dua">
            <td>Nama Barang</td>
            <td className="border border-black w-5 text-center">:</td>
            <td>
              <input type="text" required></input>
            </td>
          </tr>
          <tr className="tiga">
            <td>Harga Jual</td>
            <td className="border border-black w-5 text-center">:</td>
            <td>
              <input type="text" required></input>
            </td>
          </tr>
          <tr className="empat">
            <td>Harga Beli</td>
            <td className="border border-black w-5 text-center">:</td>
            <td>
              <input type="text" required></input>
            </td>
          </tr>
          <tr className="lima">
            <td>Satuan</td>
            <td className="border border-black w-5 text-center">:</td>
            <td>
              <input type="text" required></input>
            </td>
          </tr>
          <tr className="enam">
            <td>Katogeri</td>
            <td className="border border-black w-5 text-center">:</td>
            <td>
              <input type="text" required></input>
            </td>
          </tr>
        </table>
        <p>
          <input type="submit" value="Daftar" className="w-20  mt-2 rounded"></input>
        </p>
        <p className="m-auto text-center text-base pt-5 ">
          <Link to="/view" className="text-blue-800 text-xs font-serif underline ">
            {" "}
            Lihat View
          </Link>
        </p>
        <p className="m-auto text-center text-base pt-5 ">
          <Link to="/card" className="text-blue-800 text-xs font-serif underline ">
            {" "}
            STOK BARANG | TRANSAKSI
          </Link>
        </p>
        
      </form>
    </div>
  );
}

export default Stock;
