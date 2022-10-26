let showNavBars = false;
const navBar = document.getElementById("navBar");
const menu = document.getElementById("menu");
const barP = document.querySelector(".barP");
const barH = document.querySelector(".barH");
const barPro = document.querySelector(".barPro");
const barL = document.querySelector(".barL");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");
const navBars = document.querySelector(".navBars");

navBar.onclick = function () {
  if (showNavBars == false) {
    showNavBars = true;
    menu.style.display = "flex";
    menu.style.visibility = "visible";
    navBars.style.transition = "all 0.5s ease-in-out";
    navBars.style.width = "250px";
    navBars.style.height = "250px";
  } else {
    showNavBars = false;
    menu.style.visibility = "hidden";
    navBars.style.transition = "all 0.5s ease-in-out";
    navBars.style.width = "0";
    navBars.style.height = "0";
  }
};

bar1.addEventListener("mouseover", function () {
  barP.style.display = "flex";
  barP.style.color = "white";
});

bar1.addEventListener("mouseout", function () {
  barP.style.display = "none";
});

bar2.addEventListener("mouseover", function () {
  barH.style.display = "flex";
  barH.style.color = "white";
});

bar2.addEventListener("mouseout", function () {
  barH.style.display = "none";
});

bar3.addEventListener("mouseover", function () {
  barPro.style.display = "flex";
  barPro.style.color = "white";
});

bar3.addEventListener("mouseout", function () {
  barPro.style.display = "none";
});

bar4.addEventListener("mouseover", function () {
  barL.style.display = "flex";
  barL.style.color = "white";
});

bar4.addEventListener("mouseout", function () {
  barL.style.display = "none";
});
