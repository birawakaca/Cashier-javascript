function HargaTotal() {
	var Dataku = document.pemesanan;
	var total1;
	var total2;
	var total3;
	var total4;
	var total5;
	var jumlah1 = parseInt(Dataku.jumlah1.value);
	var jumlah2 = parseInt(Dataku.jumlah2.value);
	var jumlah3 = parseInt(Dataku.jumlah3.value);
	var jumlah4 = parseInt(Dataku.jumlah4.value);
	var jumlah5 = parseInt(Dataku.jumlah5.value);
	
	if(Dataku.jumlah1.value == "") jumlah1=0;
	if(Dataku.jumlah2.value == "") jumlah2=0;
	if(Dataku.jumlah3.value == "") jumlah3=0;
	if(Dataku.jumlah4.value == "") jumlah4=0;
	if(Dataku.jumlah5.value == "") jumlah5=0;

	total1 = parseInt(Dataku.harga1.value)*jumlah1;
	total2 = parseInt(Dataku.harga2.value)*jumlah2;
	total3 = parseInt(Dataku.harga3.value)*jumlah3;
	total4 = parseInt(Dataku.harga4.value)*jumlah4;
	total5 = parseInt(Dataku.harga5.value)*jumlah5;

	Dataku.total.value = total1 + total2 + total3 + total4 + total5;
}

function Diskon() {
	var Dataku = document.pemesanan;
	var dis=0.10;
	if(Dataku.total.value < 100000) {
		Dataku.potongan.value = 0;
	}
	else {
		Dataku.potongan.value = Dataku.total.value * dis;
	}
}

function TotalBayar() {
	var Dataku = document.pemesanan;
	Dataku.bayar.value = parseInt(Dataku.total.value) - parseInt(Dataku.potongan.value);
}

function proses() {
	HargaTotal();
	Diskon();
	TotalBayar();
}

function hapus() {
	var element = document.pemesanan;
	element.jumlah1.value = "";
	element.jumlah2.value = "";
	element.jumlah3.value = "";
	element.jumlah4.value = "";
	element.jumlah5.value = "";
	element.total.value = "";
	element.potongan.value = "";
	element.bayar.value = "";
}
