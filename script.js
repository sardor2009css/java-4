let name = prompt("Ismingizni kiriting");

let tekshiruv = prompt("Ismingizda tekshirmoqchi bo‘lgan harfni kiriting");

if (name.toLowerCase().includes(tekshiruv.toLowerCase())) {
  alert("Ha, sizning ismingizda bu harf bor.");
} else {
  alert("Yo‘q, bu harf sizning ismingizda mavjud emas.");
}
