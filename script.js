const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
let numberOfPeopleDiv = document.getElementById("numberOfPeople");
let numberOfPeople = Number(numberOfPeopleDiv.innerText);
let perPersonTotalDiv = document.getElementById("perPersonTotal");

const calculateBill = () => {
  // get bill from user input & convert it into a number
  // get the tip from user & convert it into a percentage (divide by 100)
  // get the total tip amount
  // calculate the total (tip amount + bill)
  // calculate the per person total (total divided by number of people)
  // update the perPersonTotal on DOM & show it to user

  const bill = Number(billInput.value);
  const tip = Number(tipInput.value);
  const totalTip = (tip / 100) * bill;
  const total = bill + totalTip;

  console.log(bill);
  console.log(tip);
  console.log(`tip value ${totalTip}`);
  console.log(`your total ${total}`);

  let billPerPerson1 = total / numberOfPeople;
  let billPerPerson = billPerPerson1.toFixed(2);
  perPersonTotalDiv.innerText = `$${billPerPerson}`;
};

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
  numberOfPeople++;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // decrement the amount of people
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
  if (numberOfPeople > 1) {
    numberOfPeople--;
    numberOfPeopleDiv.innerText = numberOfPeople;
  } else if (numberOfPeople <= 1) {
    numberOfPeopleDiv.innerText = numberOfPeople;
    return numberOfPeople;
  }
  calculateBill();
};
