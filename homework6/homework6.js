"use strict";
document.addEventListener("DOMContentLoaded", () => {
  //## Task 1
  //   const list = document.querySelector("ul#list");
  //   alert(
  //     list.firstElementChild.innerHTML +
  //       ", " +
  //       list.lastElementChild.innerHTML +
  //       ", " +
  //       list.firstElementChild.nextElementSibling.innerHTML +
  //       ", " +
  //       list.lastElementChild.previousElementSibling.innerHTML +
  //       ", " +
  //       list.lastElementChild.previousElementSibling.previousElementSibling.innerHTML
  //   );
  //------------------------------------------------------------
  //## Task 2
  // const h1 = document.querySelector(".task-2 h1");
  // h1.setAttribute("style", "background-color: lime");
  // const myDiv = document.querySelector("#myDiv");
  // myDiv.firstElementChild.setAttribute("style", "font-weight: bold");
  // myDiv.firstElementChild.nextElementSibling.setAttribute("style", "color: red");
  // myDiv.lastElementChild.previousElementSibling.setAttribute("style", "text-decoration: underline");
  // myDiv.lastElementChild.setAttribute("style", "font-style: italic");
  // const myList = document.querySelector("#myList");
  // myList.setAttribute("style", "list-style: none; display: flex;");
  // const span = document.querySelector(".task-2 span");
  // span.setAttribute("style", "display: none");
  //----------------------------------------------
  //## Task 3
  // let main = document.createElement("main");
  // main.setAttribute("class", "mainClass check item");
  // document.body.prepend(main);
  // let div = document.createElement("div");
  // div.setAttribute("id", "myDiv");
  // main.appendChild(div);
  // let p = document.createElement("p");
  // p.innerHTML = "First paragraph";
  // div.appendChild(p);
  //---------------------------------------------------
  //## Task 4
  // const allInput = document.querySelectorAll(".arr");
  // const out = document.querySelector(".out");
  // const inputButton = document.querySelector(".btn");
  // inputButton.addEventListener("click", () => {
  //   out.innerHTML = "";
  //   allInput.forEach((e) => {
  //     out.innerHTML += `${e.value}  `;
  //   });
  // });
  //-----------------------------------------------------
  //## Task 5
  // const circles = document.querySelectorAll(".circle");
  // circles.forEach((e) => {
  //   e.className += ` ${e.getAttribute("data-anim")}`;
  // });
  //-----------------------------------------------------
  //## Task 6 (implemented price change depending on size)
  // const colors = document.querySelectorAll("div.colors .color");
  // const price = document.querySelector("div.price h1#outprice");
  // const gradients = document.querySelectorAll("div.gradients div.gradient");
  // const shoes = document.querySelectorAll("div.shoeBackground img.shoe");
  // const sizes = document.querySelectorAll("div.size-container div.size");
  // let startPrice = 170;
  // let newPrice;
  // colors.forEach((e) => {
  //   e.addEventListener("click", () => {
  //     // Change color
  //     colors.forEach((e) => e.classList.remove("active"));
  //     e.classList.toggle("active");
  //     // Change background color
  //     gradients.forEach((elem) => {
  //       elem.classList.remove("first");
  //       elem.classList.remove("second");
  //       if (elem.getAttribute("color") == e.getAttribute("color")) {
  //         elem.classList.toggle("first");
  //         elem.classList.toggle("second");
  //       }
  //     });
  //     // Change shoe color
  //     shoes.forEach((element) => {
  //       element.classList.remove("show");
  //       if (element.getAttribute("color") == e.getAttribute("color")) {
  //         element.classList.toggle("show");
  //       }
  //     });
  //     //Change size
  //     sizes.forEach((size) => {
  //       size.classList.remove("active");
  //       if (size.getAttribute("data-price") == "") {
  //         size.classList.add("active");
  //       }
  //     });
  //     // Change price
  //     startPrice = +e.getAttribute("data-price");
  //     price.innerHTML = `${e.getAttribute("data-price")}`;
  //   });
  // });
  // sizes.forEach((e) => {
  //   e.addEventListener("click", () => {
  //     // Change size color
  //     sizes.forEach((e) => e.classList.remove("active"));
  //     e.classList.toggle("active");
  //     newPrice = startPrice + +e.getAttribute("data-price");
  //     price.innerHTML = `${newPrice}`;
  //   });
  // });
});
