// Created by: Everett
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function multiples 2 numbers using for loops.
 */
function calculate () {
  
  // get usernum
  let usernum = parseInt(document.getElementById('num').value);
  
  // display open string
  let display= ""
  
  // declare variable for counter and factorial 
  let counter = 0
  let factorial = 1
  
  //if statment for if number is a negative 
  if ( usernum <0 ) {
     display = "Please input a positive integer."
  }
      
  // else statment for do while loop
  else {
    
  // do while loop for calculating facotrial of usernum 
     do {
    
   factorial = factorial* (counter+1)
    
    counter = counter + 1
    
     } while (counter < usernum)
    
  //display variable for factorial 
    display = factorial 
  }
 
  // output facttorial of user number to user
  document.getElementById('display-factorial').innerHTML = display

}
 

 
