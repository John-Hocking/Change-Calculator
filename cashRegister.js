function checkCashRegister(price, cash, cid) {
  cid = cid.reverse();
  let change = Math.round((cash - price) * 100) / 100;
  let changeArr = [];
  let totalCID = 0; 
  let mapArr = [["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], 
    ["FIVE", 5], ["ONE", 1], ["QUARTER", .25], ["DIME", .1],["NICKEL", .05],
    ["PENNY", .01]];

   //Taking cash in drawer mapping it to mapArr 
  for(let i = 0; i < cid.length; i++){
    if(mapArr[i][0] === cid[i][0]){
      mapArr[i].push(cid[i][1]);
    }
  }

  //Get total cash in drawer
  for(let i= 0; i < cid.length; i++){
    totalCID += Math.round((mapArr[i][2] * 100)) / 100;
  }

  for(let i = 0; i < mapArr.length; i++){
    while(change >= mapArr[i][1] && mapArr[i][2] != 0){
      change = Math.round(change * 100) / 100; 
      if(!changeArr[i]){
        changeArr[i] = [mapArr[i][0], mapArr[i][1]];
      } else{
        changeArr[i][1] += mapArr[i][1];
      }
      mapArr[i][2] -= mapArr[i][1];
      change -= mapArr[i][1];
    }
  }
  console.log(change) // Test
  console.log(totalCID) // Test


  if(change != 0){
    return {status: "INSUFFICIENT_FUNDS", change : []};
  } else if(totalCID === change){
    return {status: "CLOSED", changeArr};
  }
  return {status: "OPEN", change: changeArr};

}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));