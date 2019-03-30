/*
*	MEMBUAT KALKULATOR SEDERHANA
*	----------------------------
*	
*	@Created By : Abdillah AG
*	Design Like Iphone Calculator
*	
*	@Note :
*	Semua script pada aplikasi ini, merujuk pada Chapter 2 (javaScript) seperti :
*	- function				=>	Tipe data function
*	- argument 				=>	parameter function untuk menerima data ketika diakses.
*	- querySelector			=>	Menyeleksi elemen html menggunakan attribute "id" atau "class"
*	- innerText				=>	Mengambil text dari sebuah elemen html
*	- classList.remove		=>	Menghapus "class" dari sebuah halaman html
*	- classList.add			=>	Menambahkan "class" dari sebuah halaman html
*	- if | else if | else	=>	Menangani kondisi.
*	
*	Saya tidak menggunakan metohd "parseInt", karena pada kalkulator ini 
*	mendukung bilangan decimal sehingga lebih efekif menggunakan "Number".
*
*	@Skenario :
*	- User melakukan klik untuk input bilangan pertama.
*	- Kemudian klik salah satu operator (+, - , x, /) dsb.
*	- Kemudian klik angka untuk input bilangan kedua.
*	- Selanjutkanya ketika user menekan tombol sama dengan (=), 
*	  maka kedua input bilangan tersebut akan dikenakan opreasi matematika.
*	
*/

/*
* @function : get 		=> menerima inputan bilangan dari user. 
* @parameter : number 	=> untuk menerima bilangan saat event onclick-
*						   pada tombol angka dieksekusi.
*/
function get(number) {
	document.querySelector('.input-1').classList.add('text-white');		//menambah class "text-white" agar text berwarna putih
	document.querySelector('.input-1').classList.remove('d-none');		//menghapus class "d-none" agar .input-1 slalu ditampilkan
	document.querySelector('.input-2').classList.add('d-none');			//menambahkan class "d-none" agar .input-2 di hide.

	var before = document.querySelector('.input-1').innerText;			//mengambail text awal dari .input-1
	
	/* 
	* jika isi var before adalah sama dengan 0 maka akan ditimpa 
	* dengan bilangan baru yang diinputkan. Jika lebih dari 0,
	* maka akan disisipakan setelah bilangan yang sudah ada.
	*/
	if (before === '0') {
		document.querySelector('.input-1').innerText = number;
	}
	else {
		document.querySelector('.input-1').innerText = before + number;
	}
}



/*
* @function : operator	=> Menentukan operator penjumalahan
* @parameter : this_ 	=> menambahkan class "select" pada operator yang diklik-
*						   untuk penanda opertor yang akan digunakan.
*/
function operation(this_) {

	this_.classList.add('select'); 		//menambahkan class "select" pada operator yang diklik
	

	/*
	* Pada aplikasi ini, terdapat 2 elemen H1 untuk menampilkan bilangan yang diklik.
	* Gunanya untuk menampung inptuan bilangan pertama dan kedua.
	* Namun pada dasarnya yang di tampilkan hanya salah satu saja yang menggunakan kelas .input-1
	* Sehingga seolah-olah inputan bilangan kedua dimulai dari awal.
	* Disini saya menggunkan skema menghapus dan menambahkan kelas untuk menukar posisi kelas
	* yang awalnya .input-1 menjadi .input-2 dan sebaliknya sehingga sehingga input bilangan pertama 
	* akan di hidden digantikan dengan inputan baru.
	*/
	document.querySelector('#input-1').classList.remove('input-1')		//menghapus kelas "input-1"	pada elemen dengan id ="input-1".
	document.querySelector('#input-1').classList.add('input-2')			//menghapus kelas "input-2" pada elemen dengan id ="input-1".
	
	document.querySelector('#input-2').classList.remove('input-2')		//menghapus kelas "input-2"	pada elemen dengan id ="input-2".
	document.querySelector('#input-2').classList.add('input-1')			//menghapus kelas "input-1"	pada elemen dengan id ="input-2".
}



/*
* @function : result	=> melakukan opreasi matematika
* @parameter : -
*/
function result() {
	first_number = Number(document.querySelector('#input-1').innerText);		//variabel untuk menampung bilangan pertama
	last_number = Number(document.querySelector('#input-2').innerText);			//variabel untuk menampung bilangan kedua
	operator = document.querySelector('.select').innerText;						//variabel untuk menampung oparator yang digunakan
	result = 0;																	//variabel untuk menentukan nilai awal dari hasil yaitu 0
	
	if (operator === '÷') {			//kondisi dimana operator pembagian digunakan
		result = first_number / last_number
	}
	else if(operator === '×') {		//kondisi dimana operator perkalian digunakan
		result = first_number * last_number
	}
	else if(operator === '+') {		//kondisi dimana operator penjumlahan digunakan
		result = first_number + last_number
	}
	else {							//kondisi terkahir dimana operator pengurangan digunakan
		result = first_number - last_number
	}
	

	/*
	* reset kembali kedua kelas yang ditukar sebelmunya
	* yakni kelas ".input-1" ke ".input-2" dan sebaliknya
	*/
	document.querySelector('#input-1').classList.remove('input-2')
	document.querySelector('#input-1').classList.add('input-1')
	document.querySelector('#input-1').classList.remove('d-none')
	document.querySelector('#input-2').classList.remove('input-1')
	document.querySelector('#input-2').classList.add('input-2')
	document.querySelector('#input-2').classList.add('d-none');

	//Menampilkan hasil dari operasi pada elemen dengan id "#input-1" yakni tag H1.
	document.querySelector('#input-1').innerText = result;
}


/*
* Automatic Real Time Clock
*/
function time() {
  	var today = new Date();
  	var hours = today.getHours();
  	var minutes = today.getMinutes();
  	var seconds = today.getSeconds();

  	minutes = check(minutes);
  	seconds = check(seconds);
  
  	document.querySelector('.time').innerHTML = hours + ":" + minutes + ":" + seconds;
  	var timer = setTimeout(time, 500);
}

function check(i) {
  	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  	return i;
}