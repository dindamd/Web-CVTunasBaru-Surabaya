# Website Profil dan Pembelian Produk CV Tunas Baru Surabaya

## Deskripsi Proyek
Proyek ini merupakan tugas akhir (UAS) mata kuliah **Pemrograman Web** untuk membuat website profil dan sistem pembelian produk untuk **CV Tunas Baru** di Surabaya. Website ini menampilkan profil perusahaan, katalog produk sistem keamanan (seperti CCTV, alarm, dan lainnya), serta fitur untuk pemesanan produk dan pengelolaan testimoni pelanggan.

## Tujuan Proyek
- Memperkenalkan CV Tunas Baru sebagai penyedia solusi keamanan terpercaya melalui platform digital.
- Menyediakan katalog produk sistem keamanan dengan fitur "Add to Cart".
- Memungkinkan pengguna untuk memberikan testimoni melalui formulir rating dan komentar.
- Menyediakan halaman login untuk autentikasi pengguna.
- Memastikan desain responsif dan pengalaman pengguna yang optimal.

## Fitur Utama
- **Halaman Beranda (`Index_UAS.html`)**: Menampilkan informasi perusahaan, visi, dan tombol "Buy Now" untuk mengarahkan ke halaman belanja.
- **Halaman Belanja (`shopping.html`)**: Katalog produk (CCTV, Alarm, DVR, dll.) dan layanan (pemasangan, perbaikan) dengan tombol "Add to Cart".
- **Halaman Keranjang (`cart.html`)**: Menampilkan ringkasan produk di keranjang belanja dengan opsi untuk checkout.
- **Halaman Testimoni (`testimony.html`)**: Formulir untuk mengirimkan nama, rating, dan komentar, serta daftar testimoni yang diambil dari file JSON.
- **Halaman Login (`login.html`)**: Formulir login dengan input email dan kata sandi.
- **Desain Responsif**: Menggunakan Bootstrap untuk tampilan yang kompatibel di berbagai perangkat.
- **Interaktivitas**: Animasi AOS, navigasi halus, dan pengelolaan testimoni dengan JavaScript.

## Teknologi yang Digunakan
- **HTML5**: Struktur halaman web.
- **CSS3**: Styling dengan Bootstrap 5 untuk desain responsif.
- **JavaScript**: Interaktivitas seperti navigasi halus, animasi AOS, dan pengelolaan testimoni.
- **PHP**: Pemrosesan formulir testimoni (`process.php`) untuk menyimpan data ke file JSON.
- **JSON**: Penyimpanan data testimoni (`testimonials.json`).
- **AOS Library**: Animasi pada saat scroll untuk efek visual.

## Cara Menjalankan Proyek
1. **Prasyarat**:
   - Web browser modern (Chrome, Firefox, dll.).
   - Server lokal (misalnya, XAMPP atau WAMP) untuk menjalankan `process.php`.
   - Koneksi internet untuk memuat CDN Bootstrap dan AOS.

2. **Langkah Instalasi**:
   ```bash
   # Clone repository
   git clone https://github.com/[username]/tunas-baru-web.git

   # Masuk ke direktori proyek
   cd tunas-baru-web

   # Siapkan server lokal untuk PHP
   # Salin proyek ke folder htdocs (XAMPP) atau www (WAMP)

   # Jalankan server lokal
   # Buka http://localhost/tunas-baru-web/Index_UAS.html di browser
   ```

3. **Menjalankan**:
   - Buka `Index_UAS.html` untuk halaman utama.
   - Pastikan server lokal berjalan untuk fitur testimoni (`process.php`).
   - File `testimonials.json` akan otomatis dibuat saat pengguna mengirimkan testimoni.

## Cara Penggunaan
1. Buka `Index_UAS.html` untuk melihat halaman beranda dan informasi perusahaan.
2. Navigasi ke `shopping.html` untuk melihat katalog produk dan layanan.
3. Tambahkan produk ke keranjang dengan tombol "Add to Cart" dan lihat ringkasan di `cart.html`.
4. Kirimkan testimoni melalui `testimony.html` (data disimpan di `testimonials.json`).
5. Gunakan `login.html` untuk fitur autentikasi (catatan: logika autentikasi belum diimplementasikan).
6. Hubungi CV Tunas Baru melalui informasi kontak di footer.

## Catatan Teknis
- **Testimoni**: Fungsi `fetchTestimonials` di `index.js` saat ini menggunakan data statis. Untuk data dinamis, sesuaikan dengan AJAX untuk mengambil `testimonials.json`.
- **Keranjang Belanja**: Fitur "Add to Cart" belum sepenuhnya diimplementasikan di sisi frontend. Perlu logika tambahan untuk menyimpan data keranjang.
- **Login**: Formulir login belum memiliki backend untuk autentikasi. Anda dapat menambahkan PHP atau framework lain untuk fitur ini.
- **Gambar**: Direktori `images/` disediakan untuk gambar produk, tetapi placeholder digunakan dalam kode.

## Kontak
**CV Tunas Baru**:
- **Alamat**: Jl. Medokan Asri Utara XII No.5a, Medokan Ayu, Kec. Rungkut, Surabaya, Jawa Timur 60295
- **Telepon**: +62-823-3332-6228

**Kontak Mahasiswa**:
- **Nama**: Adinda Mariasti Dewi
- **Email**: adinda.mariasti@gmail.com
- **Mata Kuliah**: Pemrograman Web
