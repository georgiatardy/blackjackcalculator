/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


// function handvalue(hand) {

  function handvalue(hand) {
  let sum = 0;

  for (let i = 0; i < hand.length; i++) {

    if (hand[i] === "A") {
      sum += 1;

    } else if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
      sum += 10;

    } else {
      sum += parseInt(hand[i]);
    }
  }

  if (hand.includes("A") && sum <= 11) {
    sum += 10;
  }
  return sum;
}


console.log(handvalue(["A"]));
console.log(handvalue(["A", "A"]));
console.log(handvalue(["10", "A"]));
console.log(handvalue(["11", "A"]));
console.log(handvalue(["A", "11"]));
console.log(handvalue(["A", "10"]));








  /* -----  Hints ------

  1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
  K, Q, J ==> Worth 10
  A       ==> Worth 1 or 11

  */
