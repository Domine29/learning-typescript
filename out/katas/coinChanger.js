"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coinChanger = void 0;
function coinChanger(amount, cost) {
    var denominations = [100, 50, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
    var change = amount - cost;
    var payout = {};
    for (var i in denominations) {
        if (change >= denominations[i]) {
            var multiplier = (Math.floor(change / denominations[i]));
            console.log(multiplier);
            payout[denominations[i]] = multiplier;
            change = Math.round((change % denominations[i]) * 100) / 100;
            
            console.log(change);
            if (change == 0) {
                console.log(payout)
                return payout;
            }
        }
    }
    
    return payout;
}
exports.coinChanger = coinChanger;

coinChanger(5.21, 3.47)
