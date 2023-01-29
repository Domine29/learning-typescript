"use strict";
exports.__esModule = true;
exports.coinChanger = void 0;
function coinChanger(cents) {
    if (cents <= 0)
        return "No Change or invalid input";
    var payout = {};
    var coins = {
        quarter: 25,
        dime: 10,
        nickel: 5,
        penny: 1
    };
    for (var coin in coins) {
        if (cents >= coins[coin]) {
            var multiplier = Math.floor(cents / coins[coin]);
            payout[coin] = multiplier;
            cents = cents % coins[coin];
            if (cents === 0)
                return payout;
        }
    }
}
exports.coinChanger = coinChanger;
