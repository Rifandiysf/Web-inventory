import React, { useState } from 'react';
import { Box } from "iconsax-react";

function Listitem() {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <div className="flex justify-center items-center w-full h-36 bg-white shadow-md">
        <div className="flex items-center justify-evenly space-x-8">
          <div className="w-32 flex justify-center">
            <Box size={80} />
          </div>
          <div className="flex font-semibold">
            <h3 className="text-2xl text-gray-700">Form Peminjaman Barang atau Pengembalian Barang</h3>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-grow justify-center bg-gray-100 my-6 px-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-4xl p-6">
          {/* Selection Barang */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Pilih Barang</label>
            <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Pilih Barang</option>
              <option value="barang1">Barang 1</option>
              <option value="barang2">Barang 2</option>
              <option value="barang3">Barang 3</option>
            </select>
          </div>

          {/* Tanggal Peminjaman */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Tanggal Peminjaman</label>
            <input
              type="date"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Jenis Barang */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Jenis Barang</label>
            <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Pilih Jenis Barang</option>
              <option value="jenis1">Jenis 1</option>
              <option value="jenis2">Jenis 2</option>
              <option value="jenis3">Jenis 3</option>
            </select>
          </div>

          {/* Jangka Waktu Peminjaman */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Jangka Waktu Peminjaman (Hari)</label>
            <input
              type="number"
              placeholder="Masukkan jumlah hari"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Foto Bukti Barang */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Bukti Foto Barang</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {photo && (
              <div className="mt-2">
                <img src={photo} alt="Preview" className="w-24 h-24 object-cover rounded-lg" />
              </div>
            )}
          </div>

          {/* Keterangan */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Keterangan</label>
            <textarea
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="3"
              placeholder="Masukkan keterangan tambahan..."
            ></textarea>
          </div>

          {/* Tombol Cetak Struk */}
          <div className="mt-4 flex justify-center">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Cetak Struk
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="h-16 flex justify-center bg-slate-400 text-white">
        <div className="flex items-center">Form Peminjaman Barang</div>
      </div> 
    </div>
  );
}

export default Listitem;
