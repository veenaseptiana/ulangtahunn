// Fungsi untuk memutar/menghentikan musik
function playMusic() {
    const music = document.getElementById('background-music');
    const button = document.querySelector('.play-btn');

    if (music.paused) {
        music.play();
        button.textContent = "Hentikan Musik";
    } else {
        music.pause();
        button.textContent = "Putar Musik";
    }
}

// Fungsi untuk menampilkan ucapan doa
function showDoa() {
    const content = document.getElementById('dynamic-content');
    content.innerHTML = `
        <h3>Ucapan Doa:</h3>
        <p>Sayangg Selamat Ulang Tahun yaaa, Semoga sayang sehat selalu, Dilimpahkan Rezekinya dan sukses, diberi umur panjang, Aamiin. Diumur ayang yang ke 21 Tahun ini aku harap semua urusan ayang dilancarkan ya, dan semoga juga ayang bisa Sayanggg terus sama aku hehe, Aku Bahagia banget udah kenal ayang selama ini
        Makasih ya sayang udah baik ke aku. Semoga kita selalu sama-sama, aku tunggu ayang disini. semoga kita cepat ketemuuu ya❤️, Untuk kadonya nanti sayang tunggu aja yaa dirumah. semoga sayang sukaa sama kadonyaa. Lope U Ayanggggg</p>
    `;
}

// Fungsi untuk menampilkan ucapan terima kasih
function showThankYou() {
    const content = document.getElementById('dynamic-content');
    const phone = "628123456789"; // Ganti dengan nomor WhatsApp Anda
    content.innerHTML = `
        <h3>Ucapan Terima Kasih:</h3>
        <p>Masukkan pesanmu di bawah ini:</p>
        <textarea id="thankyou-message" placeholder="Tulis pesanmu di sini..." rows="4" style="width: 100%;"></textarea>
        <button class="menu-btn" onclick="sendToWhatsApp('${phone}')">Kirim ke WhatsApp</button>
    `;
}

// Fungsi untuk mengirim pesan ke WhatsApp
function sendToWhatsApp(phone) {
    const message = document.getElementById('thankyou-message').value;
    if (message.trim() === "") {
        alert("Pesan tidak boleh kosong!");
        return;
    }

    const url = `https://wa.me/${6282350833396}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
