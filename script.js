// Using Js code about button of btn div
var btn = document.querySelector(".btn button");
var inpt = document.querySelector(".btn input");
btn.addEventListener("click", function () {
      if (inpt.value !== "") {
            btn.innerHTML = "ACCEPTED"
            btn.style.backgroundColor = "green";
            setTimeout(() => {
                  btn.innerHTML = "JOIN";
                  btn.style.backgroundColor = "#FFA357";
                  inpt.value = "";
            }, 3000);
      }
      else {
            inpt.value = "Fill this section.";
            btn.innerHTML = "Error..";
            btn.style.backgroundColor = "red";
            setTimeout(() => {
                  btn.innerHTML = "JOIN";
                  btn.style.backgroundColor = "#FFA357";
                  inpt.value = ""
            }, 3000)
      }
})


var sb = document.querySelector(".shope-by");
var sb1 = document.querySelector(".shope-by1");
let flag1 = true;
sb.addEventListener("mouseenter", function () {
      if (flag1) {
            sb1.style.opacity = 1;
            flag1 = false;
      } else {
            sb1.style.opacity = 0;
            flag1 = true;
      }
})

// for left
var clb = document.querySelector(".control-left-block");
var menue = document.querySelector(".icon-sect1");
var menue1 = document.querySelector(".sect1 i")
var remove = document.querySelector(".remove i");
remove.style.color = "red"
cont = 0;
menue.addEventListener("click", function () {
      if (cont == 0 || window.innerWidth <= 600) {
            clb.style.marginLeft = 0;
            clb.style.trnasition = 3
            cont = 1;
      }
      else {
            clb.style.marginLeft = -100 + "vw";
            cont = 0;
      }
})
var cnt1 = 0;
menue1.addEventListener("click", function () {
      if (cnt1 == 0 || window.innerWidth <= 600) {
            clb.style.marginLeft = 0;
            clb.style.trnasition = 3
            cnt1 = 1;
      }
      else {
            clb.style.marginLeft = -100 + "vw";
            cnt1 = 0;
      }
})
var a = 0
remove.addEventListener("click", function () {
      if (a == 0) {
            clb.style.marginLeft = -100 + "vw";
            a = 0;
      }
})
