function calculateTip(tipPercentage) {
  let billAmount = parseFloat(document.getElementById('billAmount').value) || 0;
  console.log(tipPercentage)
  let numberOfPeople = parseFloat(document.getElementById('numberOfPeople').value) || 1; 

//calculate Tip per person
  let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
  console.log(tipAmount,'tipAmount')
  
  // calculate total per person
  let totalPerPerson = (billAmount / numberOfPeople) + tipAmount;

  // Display the calculated values
    document.getElementById('tipPerPerson').innerText = '$' + tipAmount.toFixed(2);
    document.getElementById('totalPerPerson').innerText = '$' + totalPerPerson.toFixed(2);
}
 
    //Reset button
    function resetCalculator() {
      // clear input fields
      document.getElementById('billAmount').value = "";
      document.getElementById('numberOfPeople').value = "";
      document.getElementById('customTip').value = ""; 
    
      // Clear result
      document.getElementById('tipPerPerson').innerText = "$0.00";
      document.getElementById('totalPerPerson').innerText = "$0.00";
    }




