"use strict";

// Sample content for design preview. Replace with genuine customer reviews.
window.ALTRILIA_TESTIMONIALS = {
  sample: true,
  reviews: [
    ["Alya", 5, "Pilihan warnanya cantik. Warna netralnya mudah dipadukan dengan pakaian sehari-hari."],
    ["Nadia", 5, "Admin menjawab pertanyaan dengan ramah dan membantu saya memilih warna."],
    ["Dinda", 5, "Detail rendanya manis sekali. Terlihat anggun tanpa terasa berlebihan."],
    ["Sari", 5, "Suka dengan tampilan koleksinya yang sederhana tetapi tetap berkesan."],
    ["Rani", 5, "Proses bertanya dan memesan lewat WhatsApp terasa praktis."],
    ["Putri", 5, "Warna dusty pink menjadi favorit saya. Lembut dan mudah dipadukan."],
    ["Intan", 5, "Penjelasan produknya membantu saya menentukan pilihan."],
    ["Maya", 5, "Koleksi warna cokelatnya menarik. Cocok dengan gaya yang saya suka."],
    ["Dewi", 4, "Koleksinya cantik. Akan lebih membantu jika ada lebih banyak foto detail."],
    ["Zahra", 5, "Rendanya memberi sentuhan yang berbeda pada penampilan."],
    ["Nabila", 5, "Pelayanannya sabar saat saya bertanya tentang beberapa pilihan warna."],
    ["Fitri", 5, "Suka sekali dengan kombinasi warna dan detail pinggirannya."],
    ["Amelia", 5, "Tampilan hijabnya anggun untuk dipadukan dengan busana acara keluarga."],
    ["Laila", 5, "Admin membantu menjelaskan pilihan produk dengan jelas."],
    ["Tiara", 5, "Warna navy terlihat cantik dan mudah dipadukan dengan atasan terang."],
    ["Anisa", 5, "Kesan pertama yang menyenangkan. Koleksinya terlihat dipilih dengan baik."],
    ["Sarah", 5, "Beautiful colours and lovely lace details. Such an elegant look."],
    ["Wulan", 5, "Senang bisa bertanya langsung sebelum menentukan warna."],
    ["Rika", 4, "Suka dengan modelnya. Semoga pilihan warnanya makin banyak ke depannya."],
    ["Farah", 5, "Warna taupe-nya menarik perhatian saya sejak pertama melihat koleksi."],
    ["Salma", 5, "Detail kecil pada hijabnya membuat tampilan terasa lebih istimewa."],
    ["Indah", 5, "Cara admin menjelaskan produk terasa ramah dan tidak terburu-buru."],
    ["Vina", 5, "Koleksi warna lembutnya sesuai dengan selera saya."],
    ["Nisa", 5, "Modelnya mudah dibayangkan untuk berbagai padu padan pakaian."],
    ["Aulia", 5, "Senang dengan layanan yang membantu dari awal bertanya."],
    ["Dian", 5, "Warna hitam dengan detail renda terlihat klasik dan anggun."],
    ["Ratna", 5, "Informasi yang diberikan membantu saya memilih dengan lebih yakin."],
    ["Hana", 5, "Pilihan warna ivory terlihat lembut dan cantik."],
    ["Citra", 4, "Pelayanannya baik. Saya ingin melihat lebih banyak inspirasi pemakaian."],
    ["Bella", 5, "Suka dengan detail renda yang menjadi ciri khas koleksinya."],
    ["Yuni", 5, "Pilihan warnanya membuat saya ingin mencoba padu padan baru."],
    ["Laras", 5, "Respons admin jelas dan membantu menjawab pertanyaan saya."],
    ["Raisa", 5, "Tampilannya feminin dan tetap sederhana. Sesuai dengan gaya saya."],
    ["Shinta", 5, "Warna plum-nya cantik untuk memberi aksen pada pakaian netral."],
    ["Mei", 5, "Lovely collection. The neutral shades are my favourite."],
    ["Safira", 5, "Suka dengan cara koleksinya ditampilkan. Detailnya mudah dilihat."],
    ["Nurul", 5, "Bertanya soal pilihan warna terasa nyaman karena adminnya sabar."],
    ["Tasya", 5, "Koleksinya memberi banyak pilihan untuk suasana yang berbeda."],
    ["Eka", 4, "Detailnya cantik. Foto tambahan di pencahayaan alami akan sangat membantu."],
    ["Kirana", 5, "Warna beige-nya cocok dengan banyak pakaian yang saya miliki."],
    ["Fina", 5, "Pelayanan yang ramah membuat pengalaman memilih produk menyenangkan."],
    ["Annisa", 5, "Perpaduan warna dan rendanya terlihat serasi."],
    ["Puspita", 5, "Suka dengan tampilan yang rapi dan detail yang tidak berlebihan."],
    ["Rina", 5, "Admin membantu saya membandingkan beberapa warna sebelum memilih."],
    ["Nayla", 5, "Koleksinya memiliki nuansa lembut yang saya cari."],
    ["Aisyah", 5, "Detail rendanya menjadi bagian yang paling saya suka."],
    ["Novi", 5, "Pilihan yang menarik untuk melengkapi gaya sehari-hari."],
    ["Desi", 4, "Pengalaman bertanyanya baik. Semoga nanti tersedia lebih banyak contoh padu padan."],
    ["Alina", 5, "Warna cantik, tampilan anggun, dan komunikasi dengan admin menyenangkan."]
  ].map(([name, rating, text], index, rows) => {
    // Evenly spaced sample dates: 1 January–25 September 2026.
    const start = Date.UTC(2026, 0, 1);
    const end = Date.UTC(2026, 8, 25);
    const date = new Date(
      start + ((end - start) * index) / (rows.length - 1)
    ).toISOString().slice(0, 10);

    return {
      id: index + 1,
      name,
      rating,
      date,
      text
    };
  })
};
