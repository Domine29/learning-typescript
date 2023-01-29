"use strict";
exports.__esModule = true;
exports.coinChanger = void 0;
function coinChanger(amount) {
    var payout = {};
    var denominations = {
        $100: 10000,
        $50: 5000,
        $20: 2000,
        $10: 1000,
        $5: 500,
        $1: 100,
        quarter: 25,
        dime: 10,
        nickel: 5,
        penny: 1
    };
    for (var d in denominations) {
        if (amount >= denominations[d]) {
            var multiplier = Math.floor(amount / denominations[d]);
            payout[d] = multiplier;
            amount = amount % denominations[d];
            if (amount == 0) {
                return payout;
            }
        }
    }
}
exports.coinChanger = coinChanger;
coinChanger(10000);
