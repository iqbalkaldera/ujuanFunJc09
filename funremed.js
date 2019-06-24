// Penjumlahan dari angka pertama dan angka terakhir yang diinput
// ada berapa angka genap dan ada berapa angka ganil
// Jumlah semua angka yang diinput
// Quantity dari angka 3
// Rata-rata dari semua angka yang diinput

var angka = []
var ganjil = []
var genap = []


do{
    var input = prompt('masukan Angka')
    if(Number.isInteger( parseInt(input))){
        if(input % 2 ==0){
            genap.push(parseInt(input))
        }else{
            ganjil.push(parseInt(input))
        }
    }
}while(Number.isInteger( parseInt(input)))

function PrintData(arr){
    var hasil = ''
    for(var i = 0 ; i < arr.length ; i++){
        hasil += arr[i] 
    }
    return hasil
}

var totalangka = [...ganjil , ...genap]
    penjumlahan = angka[0] + angka[angka.lenght-1]

var totalGenap = 0
for (i = 0; i<genap.lenght; i++){
    totalGenap += parseInt(genap[i])
}

var totalGanjil = 0
for (i = 0; i<ganjil.length; i++){
    totalGanjil += parseInt(ganjil[i])
}

var hasil = totalGanjil + totalGenap

var arrAngka = genap.concat(ganjil)
var quantity = 0

for (var i=0 ; i<arrAngka.length; i++){
    if(parseInt(arrAngka[i]) == 3){
        parseInt(quantity = quantity + 1)
    }
}

var rataRataAngka = hasil / arrAngka


document.getElementById('hasil').innerHTML = 'Hasil penjumlahan angka pertama dan angka terakhir = ' + penjumlahan
                                           + '<br>Angka ganjil ada = ' + ganjil.length
                                           + '<br>Angka genap ada = ' + genap.length
                                           + '<br>Quantity dari angka 3 = ' + quantity
                                           + '<br>Rata - rata dari total angka = ' + rataRataAngka