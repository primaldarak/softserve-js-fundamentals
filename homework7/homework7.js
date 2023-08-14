"use strict";
document.addEventListener("DOMContentLoaded", () => {
  //## Task 1
  //   let openTab = window.open("https://www.w3schools.com", "w3schools", "width=300,height=300");
  //   const resize = setTimeout(() => {
  //     openTab.resizeTo(500, 500);
  //   }, 2000);
  //   const moveTo = setTimeout(() => {
  //     openTab.moveTo(200, 200);
  //   }, 4000);
  //   const close = setTimeout(() => {
  //     openTab.close();
  //   }, 6000);
  //------------------------------------------------------
  //## Task 2
  // const btn = document.querySelector("div.task-2 div button");
  // btn.addEventListener("click", function changeCSS() {
  //   const pText = document.querySelector("div.task-2 p#text");
  //   pText.hasAttribute("style")
  //     ? pText.toggleAttribute("style")
  //     : pText.setAttribute("style", "color: orange; font-size: 20px; font-family: Comic Sans MS");
  // });
  //--------------------------------------------------------
  //## Task 3
  // const page = document.querySelector("div.task-3");
  // const blue = document.querySelector(".blue");
  // blue.addEventListener("click", () => {
  //   page.setAttribute("style", "background-color: blue;");
  // });
  // const pink = document.querySelector(".pink");
  // pink.addEventListener("dblclick", () => {
  //   page.setAttribute("style", "background-color: pink;");
  // });
  // const brown = document.querySelector(".brown");
  // brown.addEventListener("mousedown", () => {
  //   page.setAttribute("style", "background-color: brown;");
  // });
  // brown.addEventListener("mouseup", () => {
  //   page.setAttribute("style", "background-color: white;");
  // });
  // const yellow = document.querySelector(".yellow");
  // yellow.addEventListener("mouseover", () => {
  //   page.setAttribute("style", "background-color: yellow;");
  // });
  // yellow.addEventListener("mouseout", () => {
  //   page.setAttribute("style", "background-color: white;");
  // });
  //---------------------------------------------------------------
  //## Task 4
  // const div4 = document.querySelector("div.task-4");
  // const createSelect = document.createElement("select");
  // let createOption;
  // createSelect.className = "select-from";
  // div4.prepend(createSelect);
  // for (let i = 1; i <= 5; i++) {
  //   createOption = document.createElement("option");
  //   createOption.setAttribute("data-value", `${i + 1}`);
  //   createOption.innerHTML = i;
  //   createSelect.append(createOption);
  // }
  // const deleteBtn = document.createElement("button");
  // deleteBtn.classList.add("delete");
  // deleteBtn.innerHTML = "Delete Option";
  // deleteBtn.addEventListener("click", () => {
  //   let selectedValue = createSelect.options[createSelect.selectedIndex].value;
  //   createSelect.remove(document.querySelector(`[data-value='${selectedValue}']`));
  // });
  // div4.appendChild(deleteBtn);
  //---------------------------------------------------------------
  //## Task 5
  // const page = document.querySelector("div.task-5");
  // const live = document.querySelector(".live");
  // const action = document.createElement("p");
  // action.innerHTML = "Mouse is not on me!";
  // page.appendChild(action);
  // live.addEventListener("click", () => {
  //   action.innerHTML = "I was pressed!";
  // });
  // live.addEventListener("mouseover", () => {
  //   action.innerHTML = "Mouse on me!";
  // });
  // live.addEventListener("mouseout", () => {
  //   action.innerHTML = "Mouse is not on me!";
  // });
  //--------------------------------------------------------------
  //## Task 6
  // const screenWidth = document.querySelector("p.width");
  // const screenHeigth = document.querySelector("p.heigth");
  // screenWidth.innerHTML = `${window.innerWidth}`;
  // screenHeigth.innerHTML = `${window.innerHeight}`;
  // window.addEventListener("resize", () => {
  //   screenWidth.innerHTML = `${window.innerWidth}`;
  //   screenHeigth.innerHTML = `${window.innerHeight}`;
  // });
  //--------------------------------------------------------------
  //## Task 7
  // const countryTag = document.querySelector("select#country");
  // const cityTag = document.querySelector("select#cities");
  // const germanyCities = ["Berlin", "Hamburg", "Munich", " Cologne", "Frankfurt am Main"];
  // const usaCities = ["New York", "California", "Illinois", "Texas", "Arizona"];
  // const ukraineCities = ["Kyiv", "Rivne", "Lviv", "Kharkiv", "Dnipro"];
  // function getSelectValue() {
  //   return countryTag.options[countryTag.selectedIndex].value;
  // }
  // function insertCities() {
  //   const currentcity = getSelectValue();
  //   switch (true) {
  //     case currentcity === "ger":
  //       cityTag.innerHTML = "";
  //       germanyCities.forEach((e) => {
  //         const cityOption = document.createElement("option");
  //         cityOption.innerHTML = `${e}`;
  //         cityTag.appendChild(cityOption);
  //       });
  //       break;
  //     case currentcity === "usa":
  //       cityTag.innerHTML = "";
  //       usaCities.forEach((e) => {
  //         const cityOption = document.createElement("option");
  //         cityOption.innerHTML = `${e}`;
  //         cityTag.appendChild(cityOption);
  //       });
  //       break;
  //     case currentcity === "ukr":
  //       cityTag.innerHTML = "";
  //       ukraineCities.forEach((e) => {
  //         const cityOption = document.createElement("option");
  //         cityOption.innerHTML = `${e}`;
  //         cityTag.appendChild(cityOption);
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // }
  // insertCities();
  // countryTag.addEventListener("change", insertCities);
  //--------------------------------------------------------------
});
