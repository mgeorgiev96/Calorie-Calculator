"use strict";

var gender = document.querySelector(".gender");
var weight = document.querySelector(".weight");
var activity = document.querySelector(".activity");
var reset_Button = document.querySelector(".reset_Button");
var calc_Button = document.querySelector(".calc_Button");
var age = document.querySelector(".age");
var feet = document.querySelector(".feet");
var inch = document.querySelector(".inch");
var quantity = document.querySelector(".quantity");
var display = document.querySelector(".display");
var result = document.querySelector(".result");
var g = "male";
var k_lb = "lb";
var active = 1.2;

var calculate = function calculate() {
  var calc;
  var height = +feet.value * 12 + +inch.value;
  var kg = +quantity.value * 2.2;

  if (isNaN(+age.value) || isNaN(+quantity.value) || isNaN(+feet.value) || isNaN(+inch.value)) {
    alert("Enter valid numbers in the fields");
  } else {
    if (g === "male") {
      if (k_lb === "lb") {
        calc = (66 + 6.3 * +quantity.value + 12.9 * height - +age.value * 6.8) * active;
      } else {
        calc = (66 + 6.3 * kg + 12.9 * height - +age.value * 6.8) * active;
      }
    } else if (g === "female") {
      if (k_lb === "lb") {
        calc = (655 + 4.3 * +quantity.value + 4.7 * height - +age.value * 4.7) * active;
      } else {
        calc = (655 + 4.3 * kg + 4.7 * height - +age.value * 4.7) * active;
      }
    }

    result.innerHTML = "Daily Calories: ".concat(calc.toFixed(2));
    result.classList.add("active");
    setTimeout(function () {
      result.classList.remove("active");
    }, 500);
  }
};

var reset = function reset() {
  result.innerHTML = "";
  feet.value = "";
  inch.value = "";
  age.value = "";
  quantity.value = "";
};

var changeGender = function changeGender(e) {
  var target = e.target;

  if (target.value === "female") {
    g = "female";
  } else if (target.value === "male") {
    g = "male";
  }
};

var changeWeight = function changeWeight(e) {
  var target = e.target;

  if (target.value === "kg") {
    k_lb = "kg";
  } else if (target.value === "lb") {
    k_lb = "lb";
  }
};

var changeActivity = function changeActivity(e) {
  var target = e.target;
  active = +target.value;
};

activity.addEventListener("click", changeActivity);
weight.addEventListener("click", changeWeight);
gender.addEventListener("click", changeGender);
calc_Button.addEventListener("click", calculate);
reset_Button.addEventListener("click", reset);