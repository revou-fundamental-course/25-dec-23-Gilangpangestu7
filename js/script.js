function calculateArea() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
        alert('Masukkan angka yang valid untuk panjang alas dan tinggi.');
        return;
    }

    var area = 0.5 * base * height;
    document.getElementById('result').innerText = 'Hasil Luas: ' + area.toFixed(2);
}

// Fungsi untuk menghitung keliling segitiga
function calculatePerimeter() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert('Masukkan angka yang valid untuk panjang sisi-sisi segitiga.');
        return;
    }

    var perimeter = sideA + sideB + sideC;
    document.getElementById('result').innerText = 'Hasil Keliling: ' + perimeter.toFixed(2);
}

// Fungsi untuk mereset formulir
function resetForm() {
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';
    document.getElementById('result').innerText = 'Hasil:';
}