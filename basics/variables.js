const airwaysName = "Emaar";
let passengerName = "Lucky";
var ticketID = "12345ASD";
seatNo = "8";

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([airwaysName, passengerName, ticketID, seatNo]);

// airwaysName = 134555; not allowed const declared variable can't be changed later 
passengerName = "Ankur";
ticketID = "123334ER";
seatNo = "9";
console.table([airwaysName, passengerName, ticketID, seatNo])
