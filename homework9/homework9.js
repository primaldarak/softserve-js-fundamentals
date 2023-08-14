"use strict";
document.addEventListener("DOMContentLoaded", () => {
  //## Task 1
  //   $(function () {
  //     const head = $("h2.head");
  //     head.each((i, e) => {
  //       e.setAttribute("style", "color:green");
  //     });
  //     head.find(".inner").attr("style", "font-size: 35px");
  //   });
  //-------------------------------------------------------------
  //## Task 2
  //   $(function () {
  //     const regex = /https:\/\//;
  //     const a = $("a");
  //     a.each((i, e) => {
  //       if (regex.test(e.getAttribute("href"))) {
  //         e.setAttribute("target", "_blank");
  //       }
  //     });
  //   });
  //-------------------------------------------------------------
  //## Task 3
  // $(function () {
  //   $("h3").each(function () {
  //     $(this).next().insertBefore($(this));
  //   });
  // });
  //-------------------------------------------------------------
  //## Task 4
  // $(function () {
  //   const checkbox = $("input.checkbox");
  //   let count = 0;
  //   checkbox.each(function () {
  //     $(this).on("change", function () {
  //       $(this).is(":checked") === true ? count++ : count--;
  //       $("input.checkbox:not(:checked)").attr("disabled", count === 3);
  //     });
  //   });
  // });
});
