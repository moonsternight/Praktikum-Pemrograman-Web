/* Menetapkan konstanta untuk bobot nilai masing-masing komponen (Tugas, UTS, dan UAS) */
const BOBOT_TUGAS = 0.3;
const BOBOT_UTS = 0.3;
const BOBOT_UAS = 0.4;

/* Mendeklarasikan fungsi untuk menghitung nilai akhir mahasiswa */
function hitungNilai() {
  /* Mengambil nilai dari input pengguna (Tugas, UTS, dan UAS) dan mengubahnya menjadi tipe angka desimal */
  const nilaiTugas = parseFloat(document.getElementById("nilaiTugas").value);
  const nilaiUTS = parseFloat(document.getElementById("nilaiUTS").value);
  const nilaiUAS = parseFloat(document.getElementById("nilaiUAS").value);

  if (
    isNaN(nilaiTugas) ||
    nilaiTugas < 0 ||
    nilaiTugas > 100 ||
    isNaN(nilaiUTS) ||
    nilaiUTS < 0 ||
    nilaiUTS > 100 ||
    isNaN(nilaiUAS) ||
    nilaiUAS < 0 ||
    nilaiUAS > 100
  ) {
    /* Memastikan bahwa nilai yang dimasukkan valid (antara 0 dan 100). Jika tidak, tampilkan peringatan */
    alert("Masukkan nilai antara 0 dan 100 untuk semua bidang.");
    return;
  }

  /* Menghitung nilai akhir dengan mengalikan setiap nilai dengan bobotnya masing-masing */
  let nilaiAkhir =
    nilaiTugas * BOBOT_TUGAS + nilaiUTS * BOBOT_UTS + nilaiUAS * BOBOT_UAS;

  /* Membatasi nilai akhir menjadi dua desimal */
  nilaiAkhir = nilaiAkhir.toFixed(2);

  /* Mendeklarasikan variabel untuk menyimpan nilai huruf berdasarkan rata-rata nilai akhir */
  let nilaiHuruf;
  /* Menentukan nilai huruf berdasarkan nilai akhir menggunakan kondisi if-else */
  if (nilaiAkhir >= 90) {
    nilaiHuruf = "A";
  } else if (nilaiAkhir >= 80) {
    nilaiHuruf = "B";
  } else if (nilaiAkhir >= 70) {
    nilaiHuruf = "C";
  } else if (nilaiAkhir >= 60) {
    nilaiHuruf = "D";
  } else {
    nilaiHuruf = "E";
  }

  /* Menentukan status kelulusan; mahasiswa lulus jika nilai huruf bukan D atau E */
  const lulus = !(nilaiHuruf === "D" || nilaiHuruf === "E");

  /* Mengambil elemen dengan id 'result' untuk menampilkan hasil perhitungan */
  const resultElement = document.getElementById("result");

  /* Menampilkan hasil perhitungan ke dalam elemen 'result' dengan format HTML yang diisi nilai tugas, nilai UTS, nilai UAS, rata-rata, nilai huruf, dan status kelulusan */
  resultElement.innerHTML = `
    <p>Nilai Tugas (30%): ${(nilaiTugas * BOBOT_TUGAS).toFixed(2)}</p>
    <p>Nilai UTS (30%): ${(nilaiUTS * BOBOT_UTS).toFixed(2)}</p>
    <p>Nilai UAS (40%): ${(nilaiUAS * BOBOT_UAS).toFixed(2)}</p>
    <p class="average">Rata-rata Tertimbang: ${nilaiAkhir}</p>
    <p class="grade">Nilai Huruf: ${nilaiHuruf}</p>
    <p class="${lulus ? "pass" : "fail"}">Status: ${
    lulus ? "Lulus" : "Gagal"
  }</p>
  `;
}
