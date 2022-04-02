// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a circle.
 */
function calculate () {
  // input
  const basea = parseInt(document.getElementById('basea').value)
  const baseb = parseInt(document.getElementById('baseb').value)
  const height = parseInt(document.getElementById('height').value)

  // process
  
  const area = ( ( basea + baseb ) / 2 ) * height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
}
