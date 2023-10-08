let now = new Date();
let hour = 19;
let txth = document.querySelector("div#txthoras");
let txtb = document.querySelector("body");
let txtimg = document.querySelector("div#img");
let txtheader = document.querySelector("header");
let txtfooter = document.querySelector("footer");

if (hour < 12) {
  let txth = document.querySelector("div#txthoras");
  txth.innerHTML = `Agora são ${hour} horas.`;
  txth.innerHTML += ` Bom dia!`;
  txtimg.innerHTML = `<img
  src="https://images.pexels.com/photos/18437935/pexels-photo-18437935/free-photo-of-nevoa-neblina-nevoeiro-panorama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt=""
  srcset="" />`;
  txtb.style.background = "#F9F3CC";
  txtheader.style.color = "black";
  txtfooter.style.color = "black";
} else if (hour < 18) {
  let txth = document.querySelector("div#txthoras");
  txth.innerHTML = `Agora são ${hour} horas.`;
  txth.innerHTML += ` Boa tarde!`;
  txtimg.innerHTML = `<img
  src="https://images.pexels.com/photos/69224/pexels-photo-69224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt=""
  srcset="" />`;
  txtb.style.background = "#0079FF";
} else {
  let txth = document.querySelector("div#txthoras");
  txth.innerHTML = `Agora são ${hour} horas.`;
  txth.innerHTML += ` Boa noite!`;
  txtimg.innerHTML = `<img
  src="https://img.freepik.com/fotos-premium/linda-noite-no-oceano-com-lua-cheia_104785-866.jpg"
  alt=""
  srcset="" />`;
  txtb.style.background = "#232D3F";
}
