// SCRIPT BUAT BAR PENCARIAN
document.getElementById('formPencarian').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah reload halaman
    const query = document.getElementById('barPencarian').value;
    
    // Lakukan pencarian konten berdasarkan query
    alert('Mencari konten: ' + query);

    // Bisa tambahkan fungsi untuk melakukan pencarian sesuai logika yang diinginkan
});

// SCROLL KARTU
// Mendapatkan elemen kontainer
const container = document.querySelector('.kontenfilm');

// Fungsi untuk menggeser ke kiri
function slideLeft() {
    container.scrollLeft -= 1000; // Menggeser ke kiri sebesar 300px
}

// Fungsi untuk menggeser ke kanan
function slideRight() {
    container.scrollLeft += 1000; // Menggeser ke kanan sebesar 300px
}

