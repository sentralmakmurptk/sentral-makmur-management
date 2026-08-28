/**
 * =========================================================
 * SENTRAL MAKMUR MANAGEMENT
 * CONFIGURATION
 * =========================================================
 *
 * File ini menyimpan konfigurasi utama aplikasi.
 *
 * JANGAN menyimpan password asli di file frontend.
 * Konfigurasi sensitif nantinya akan dipindahkan
 * ke backend / Apps Script.
 * =========================================================
 */

const CONFIG = {

  /* =========================================
     IDENTITAS APLIKASI
  ========================================== */

  APP_NAME: "SENTRAL MAKMUR SEJAHTERA",

  APP_TITLE: "Sentral Makmur Management",

  APP_VERSION: "1.0.0",


  /* =========================================
     BACKEND
  ========================================== */

  // Nanti diisi URL Web App Google Apps Script
  // yang menjadi backend management.

  API_URL: "https://script.google.com/macros/s/AKfycbz3dKH-1fh3c_cnnZm6xcJFW6zGNnWTnZA403FFc3FDorL9xz_VHim7RL8DTMqxxG5urA/exec",


  /* =========================================
     MODE APLIKASI
  ========================================== */

  // development = tahap pembangunan
  // production  = sistem sudah digunakan

  MODE: "development",


  /* =========================================
     LOGIN
  ========================================== */

  LOGIN: {

    ENABLED: true,

    SESSION_KEY: "SM_MANAGEMENT_SESSION",

    SESSION_DURATION: 8 * 60 * 60 * 1000

  },


  /* =========================================
     MODUL MANAGEMENT
  ========================================== */

  MODULES: {

    PENJUALAN: true,

    STOK: true,

    KEUNTUNGAN: true,

    PELANGGAN: true,

    PIUTANG: true,

    OPERASIONAL: true,

    SISTEM_INTERNAL: true,

    STRATEGI_PENJUALAN: true

  },


  /* =========================================
     DATA PENJUALAN
  ========================================== */

  SALES: {

    SOURCE: "ACCURATE",

    DEFAULT_PERIOD: "bulanan",

    CURRENCY: "IDR"

  },


  /* =========================================
     RESPONSIVE
  ========================================== */

  RESPONSIVE: {

    MOBILE_BREAKPOINT: 600,

    TABLET_BREAKPOINT: 1000

  },


  /* =========================================
     DEBUG
  ========================================== */

  DEBUG: true

};
