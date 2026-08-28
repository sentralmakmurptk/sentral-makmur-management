/**
 * =========================================================
 * SENTRAL MAKMUR MANAGEMENT
 * MODUL PENJUALAN
 * =========================================================
 *
 * Versi: 1.0.0
 *
 * Fungsi:
 * - Menyediakan struktur data penjualan
 * - KPI omzet
 * - KPI quantity
 * - Produk terlaris
 * - Brand terlaris
 *
 * Data nantinya berasal dari Accurate.
 *
 * =========================================================
 */


/* =========================================================
   DATA PENJUALAN
========================================================= */

const PENJUALAN = {

  periode: {
    tipe: "bulanan",
    mulai: null,
    akhir: null
  },


  ringkasan: {

    omzet: 0,

    quantity: 0,

    produkTerlaris: "-",

    brandTerlaris: "-"

  },


  transaksi: []

};


/* =========================================================
   RESET DATA
========================================================= */

function resetDataPenjualan() {

  PENJUALAN.periode = {

    tipe: "bulanan",

    mulai: null,

    akhir: null

  };


  PENJUALAN.ringkasan = {

    omzet: 0,

    quantity: 0,

    produkTerlaris: "-",

    brandTerlaris: "-"

  };


  PENJUALAN.transaksi = [];

}


/* =========================================================
   FORMAT RUPIAH
========================================================= */

function formatRupiah(value) {

  const angka =
    Number(value || 0);


  return new Intl.NumberFormat(
    "id-ID",
    {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }
  ).format(angka);

}


/* =========================================================
   HITUNG RINGKASAN
========================================================= */

function hitungRingkasanPenjualan(
  transaksi
) {

  if (
    !Array.isArray(transaksi) ||
    transaksi.length === 0
  ) {

    resetDataPenjualan();

    return PENJUALAN.ringkasan;

  }


  let omzet = 0;

  let quantity = 0;


  const produkMap = {};

  const brandMap = {};


  transaksi.forEach(
    function(item) {

      const qty =
        Number(item.quantity || 0);

      const total =
        Number(item.total || 0);

      const produk =
        item.produk || "-";

      const brand =
        item.brand || "-";


      quantity += qty;

      omzet += total;


      /* ================================
         PRODUK
      ================================= */

      if (!produkMap[produk]) {

        produkMap[produk] = 0;

      }

      produkMap[produk] += qty;


      /* ================================
         BRAND
      ================================= */

      if (!brandMap[brand]) {

        brandMap[brand] = 0;

      }

      brandMap[brand] += qty;

    }
  );


  const produkTerlaris =
    Object.entries(produkMap)
      .sort(
        function(a, b) {
          return b[1] - a[1];
        }
      )[0];


  const brandTerlaris =
    Object.entries(brandMap)
      .sort(
        function(a, b) {
          return b[1] - a[1];
        }
      )[0];


  PENJUALAN.ringkasan = {

    omzet: omzet,

    quantity: quantity,

    produkTerlaris:
      produkTerlaris
        ? produkTerlaris[0]
        : "-",

    brandTerlaris:
      brandTerlaris
        ? brandTerlaris[0]
        : "-"

  };


  return PENJUALAN.ringkasan;

}
