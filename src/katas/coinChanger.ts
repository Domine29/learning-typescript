export function coinChanger(amount: number) {
  let payout: { [key: string]: number } = {};
  
  const denominations: { [key: string]: number } = {
    $100 : 10000,
    $50: 5000,
    $20: 2000,
    $10: 1000,
    $5: 500,
    $1: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  };

  for (let d in denominations) {
    if (amount >= denominations[d]) {
      let multiplier: number = Math.floor(amount / denominations[d]);
      payout[d] = multiplier;
      amount = amount % denominations[d];

      if (amount == 0) {
        return payout;
      }
    }
  }
}

coinChanger(10000)
