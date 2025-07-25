document.addEventListener('DOMContentLoaded', () => {
    // Fungsionalitas untuk kartu 3D di halaman utama (index.html)
    // yang memperluas/mengaktifkan kartu saat diklik.
    const seeMoreButtons = document.querySelectorAll('.see-more');

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Mencegah perilaku default tautan (misalnya, melompat ke bagian atas halaman)

            const targetCardId = button.dataset.targetCard; // Mendapatkan ID kartu target dari atribut data-target-card
            const targetCard = document.getElementById(targetCardId); // Mendapatkan elemen kartu berdasarkan ID

            if (targetCard) {
                // Toggle kelas 'is-active' pada kartu yang diklik
                targetCard.classList.toggle('is-active');

                // Opsional: Tutup kartu lain jika ada yang aktif untuk memastikan hanya satu yang diperluas
                // Ini mencegah beberapa kartu tetap dalam keadaan "aktif" secara bersamaan
                document.querySelectorAll('.card.is-active').forEach(card => {
                    if (card.id !== targetCardId) { // Jika kartu bukan kartu yang baru saja diklik
                        card.classList.remove('is-active'); // Hapus kelas 'is-active'
                    }
                });
            }
        });
    });

    // Anda bisa menambahkan JavaScript lain di sini jika ada fungsionalitas spesifik
    // untuk halaman skills, about, atau contact yang membutuhkan interaksi.
    // Contoh umum meliputi:
    // - Animasi scroll
    // - Validasi form (untuk halaman contact)
    // - Efek paralaks
    // - Menu responsif (jika navbar Anda berubah menjadi hamburger menu di mobile)
});