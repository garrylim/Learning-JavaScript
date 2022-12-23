/*
 * File: TakeOrder1.js
 * -------------------
 * This program displays "Enter your order(s):" on the console.  
 */

function TakeOrder1() {
// Initialising variables.
var Oolong = 0;
var GreenTea = 0;
var Matcha = 0;
var Chocolate = 0;
var Special = 0;

var TotOolong = 0.00;
var TotGreenTea = 0.00;
var TotMatcha = 0.00;
var TotChocolate = 0.00;
var TotSpecial = 0.00;
var Total = 0.00;
var TotItem = 0.00;

// Inputting data from customer.
Oolong =   parseInt(prompt("[1] Oolong    (RM10.90)", 0));  
GreenTea = parseInt(prompt("[2] Green Tea (RM10.90)", 0));
Matcha =   parseInt(prompt("[3] Matcha    (RM12.90)", 0));
Chocolate= parseInt(prompt("[4] Chocolate (RM12.90)", 0));
Special =  parseInt(prompt("[5] Special   (RM15.90)", 0));

//Calculating Total items
TotItem = Oolong+GreenTea+Matcha+Chocolate+Special;

// Calculating the customer's order.
TotOolong = Oolong*10.90;
TotGreenTea = GreenTea*10.90;
TotMatcha = Matcha*12.90;
TotChocolate = Chocolate*12.90;
TotSpecial = Special*15.90;
Total = TotOolong+TotGreenTea+TotMatcha+TotChocolate+TotSpecial;

// Displaying the customer order.
console.clear();
console.log("Welcome to Bubba Bubble Tea Penang");
console.log("_______________________________________________________");
console.log("Date: "+Date()+ "\n \n");
console.log("[1] Oolong    (RM10.90)  x  "+Oolong+" = RM "+TotOolong);
console.log("[2] Green Tea (RM10.90)  x  "+GreenTea+" = RM "+TotGreenTea);
console.log("[3] Matcha    (RM12.90)  x  "+Matcha+" = RM "+TotMatcha);
console.log("[4] Chocolate (RM12.90)  x  "+Chocolate+" = RM "+TotChocolate);
console.log("[5] Special   (RM15.90)  x  "+Special+" = RM "+TotSpecial);
console.log("===========================================");
console.log("TOTAL ORDERED ITEM = " + TotItem);
console.log("                        TOTAL = RM "+Total);
console.log("===========================================");
console.log("Thank you and please come again!");
}
