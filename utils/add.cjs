//How to use CommonJS whith ES Modules

const express = require("express");
function add(a, b) {
  return a + b;
}

module.exports = add;
