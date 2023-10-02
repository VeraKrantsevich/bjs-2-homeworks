"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  const d = Math.pow(b, 2) - 4 * a * c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  } else if (d === 0) {
    arr[0] = -b / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent =  percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthPayment = loanBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
  let totalPayment = (monthPayment * countMonths).toFixed(2);
  return Number(totalPayment);
}