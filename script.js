"use strict";

const btns = document.querySelectorAll("button");

//console.log(btns[0].classList.length); // buttonda nechta class borligini topadi
//console.log(btns[0].classList.item(0)); // class.name ni chiqaradi
//console.log(btns[0].classList.add("blue")); // classga name beradi uzgartiradi
//console.log(btns[0].classList.remove("a")); // class.namedagi nameni olib tashledi
//console.log(btns[0].classList.toggle("a")); // class.nameda elementni bor bulsa olib tashledi yuq bulsa qushadi

btns[0].addEventListener("mouseover", () => {
  // if (!btns[1].classList.contains("blue")) {
  //   btns[1].classList.add("blue");
  // } else {
  //   btns[1].classList.remove("blue");
  // }
  //bu orqali 1.btnni bosganimizda 2.btnga class beradi yoki bulsa olib tashlashini kurdik
  btns[1].classList.toggle("blue");
});
