function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let formAno = document.querySelector("input#txtano");
  let res = document.querySelector("div#res");
  if (formAno.value.lenght == 0 || formAno.value > ano) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    let fSex = document.getElementsByName("radsex");
    let idade = ano - Number(formAno.value);
    let gênero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fSex[0].checked) {
      gênero = "homem";
      if (idade >= 0 && idade <= 2) {
        //Bebê
        gênero = "bebê";
        img.setAttribute("src", "styles/fotobebe_h.png");
      } else if (idade < 12) {
        //Criança
        gênero = "criança";
        img.setAttribute("src", "styles/fotocrianca_h.png");
      } else if (idade < 18) {
        //Jovem
        img.setAttribute(
          "src",
          "styles/fotohomem_jovem.png"
        );
      } else if (idade < 60) {
        //Adulto
        img.setAttribute("src", "styles/fotohomem.png");
      } else {
        //Idoso
        img.setAttribute(
          "src",
          "styles/fotohomem_idoso.png"
        );
      }
    } else if (fSex[1].checked) {
      gênero = "mulher";
      if (idade >= 0 && idade <= 2) {
        //Bebê
        gênero = "bebê";
        img.setAttribute("src", "styles/fotobebe_m.png");
      } else if (idade < 12) {
        //Criança
        gênero = "criança";
        img.setAttribute("src", "styles/fotocrianca_m.png");
      } else if (idade < 18) {
        //Jovem
        img.setAttribute(
          "src",
          "styles/fotomulher_jovem.png"
        );
      } else if (idade < 60) {
        //Adulto
        img.setAttribute("src", "styles/fotomulher.png");
      } else {
        //Idoso
        img.setAttribute(
          "src",
          "styles/fotomulher_idosa.png"
        );
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
