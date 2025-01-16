import { Box } from "iconsax-react";
import React from "react";

function Header() {
  return (
    <>
    <div className="flex justify-center items-center w-full h-40">
      <div className="flex items-center justify-evenly">
        <div className="w-40 flex justify-center">
          <Box size={100}/>
        </div>
          <div className="flex font-semibold px-5">
            <h3 className="text-3xl">Form Peminjaman Barang atau Pengembalian Barang</h3>
          </div>
      </div>
    </div>
    </>
  );
}

export default Header
