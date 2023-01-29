export function exactChange(amount: number, cost: number): {[key:number]: number} {
  const denominations: number[] = [100,50,20,10,5,1,0.25,0.10,0.05,0.01]
  let change: number = amount - cost
  const payout: {[key: number]: number} = {}

  for(let i in denominations){
    if(change >= denominations[i]){
      const multiplier: number = (Math.floor(change / denominations[i]))
      payout[denominations[i]] = multiplier
      change = Math.round((change % denominations[i]) * 100) / 100;

      if(change == 0){
        return payout
      }
    }
  }
  return payout
}