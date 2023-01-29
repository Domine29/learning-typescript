"use strict";
exports.__esModule = true;
var coinChanger_1 = require("../src/katas/coinChanger");
describe('coinChanger tests', function () {
    it('return two quarters  given 50 cents', function () {
        expect(coinChanger_1.coinChanger(50)).toEqual({ 'quarter': 2 });
    });
    it('return 1 quarter, 1 dime, and 3 pennys given 38 cents', function () {
        expect(coinChanger_1.coinChanger(38)).toEqual({ 'quarter': 1, "dime": 1, "penny": 3 });
    });
    it('return 1 $100 given 10000 cents', function () {
        expect(coinChanger_1.coinChanger(10000)).toEqual({ '$100': 1 });
    });
    it('return 1 $100, 1 $50, 1 $20, 1 $10, 1 $5, 4 $1 given 18900 in cents', function () {
        expect(coinChanger_1.coinChanger(18900)).toEqual({ '$100': 1, "$50": 1, '$20': 1, "$10": 1, '$5': 1, "$1": 4 });
    });
});
