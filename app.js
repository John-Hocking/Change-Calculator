function calculateChange(){
  const price = document.getElementById('price');
  const paymentAmount = document.getElementById('payment');
  const difference = (paymentAmount.value - price.value).toFixed(2)
  const output = document.getElementById('output');
  const changeDisplay = document.getElementById('change')
  changeDisplay.innerHTML = '';

  if(paymentAmount - price < 0){
    output.innerText = 'Insufficent funds'
  } else {
    output.innerText = `$${difference}`;
  }

  let changeArr = [];
  let change = difference;
  let mapArr = [
    ["ONE HUNDRED", 100], 
    ["TWENTY", 20], 
    ["TEN", 10], 
    ["FIVE", 5], 
    ["ONE", 1], 
    ["QUARTER", .25], 
    ["DIME", .1],
    ["NICKEL", .05],
    ["PENNY", .01]
]

  for(let i = 0; i < mapArr.length; i++){
    while(change >= mapArr[i][1]){
      change = Math.round(change * 100) / 100; 
      if(!changeArr[i]){
        changeArr[i] = [mapArr[i][0], mapArr[i][1], 1];
      } else{
        changeArr[i][2] += 1;
      }
      change -= mapArr[i][1];
    }
  }
  
  for(let i = 0; i < changeArr.length; i++){
    let list = changeArr[i]
    if(changeArr[i] != undefined){
      list = document.createElement('li')
      list.appendChild(document.createTextNode(`${changeArr[i][2]}: ${changeArr[i][0]}`))
      document.getElementById('change').appendChild(list);
    }
  }

  price.value = '';
  paymentAmount.value = '';
}

document.getElementById('calculate').addEventListener('click', calculateChange)
