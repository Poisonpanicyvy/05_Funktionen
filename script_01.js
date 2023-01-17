"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// test();


// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test(){}



// Funktion 2 
// Parametrisierung + Datenübergabe von innen


ausgabeNamen();
// console.log(firstName); // Fehler: scope

function ausgabeNamen() {
    let firstName = "Poisonpanicyvy";
    console.log("Hallo " + firstName + "!");
}
