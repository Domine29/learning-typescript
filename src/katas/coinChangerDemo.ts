export function coinChanger(cents: number) {

  if( cents <= 0 ) return "No Change or invalid input"

  const payout: {[key: string]: number} = {}

  const coins: {[key: string]: number} = {
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  }

  for (let coin in coins){ 
    if(cents >= coins[coin]){ 
      let multiplier: number = Math.floor(cents / coins[coin])

      payout[coin] = multiplier
      cents = cents % coins[coin]

      if(cents === 0) return payout

    }
  }
}