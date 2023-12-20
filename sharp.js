const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDirectory = path.resolve(__dirname, 'src/public/images/hero');
const destinationDirectory = path.resolve(__dirname, 'public/images');

// Pastikan bahwa targetDirectory adalah direktori yang valid
if (!fs.existsSync(targetDirectory) || !fs.statSync(targetDirectory).isDirectory()) {
  console.error('Invalid target directory.');
  process.exit(1);
}

// Buat direktori tujuan jika belum ada
if (!fs.existsSync(destinationDirectory)) {
  fs.mkdirSync(destinationDirectory);
}

// Baca file di dalam targetDirectory
fs.readdirSync(targetDirectory).forEach((image) => {
  const imagePath = path.resolve(targetDirectory, image);

  // Pastikan bahwa item yang dibaca adalah file, bukan direktori
  if (fs.statSync(imagePath).isFile()) {
    // Gunakan path.basename untuk mendapatkan nama file tanpa ekstensi
    const fileNameWithoutExtension = path.basename(image, path.extname(image));

    // Proses gambar dengan ukuran yang diinginkan
    sharp(imagePath)
      .resize(800)
      .toFile(path.resolve(destinationDirectory, `${fileNameWithoutExtension}-large.jpg`));

    sharp(imagePath)
      .resize(480)
      .toFile(path.resolve(destinationDirectory, `${fileNameWithoutExtension}-small.jpg`));
  }
});
