"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('isPositive()', () => {
    it('should return true when n > 0', () => {
        expect((0, _1.isPositive)(1)).toBe(true);
        expect((0, _1.isPositive)(2)).toBe(true);
        expect((0, _1.isPositive)(3)).toBe(true);
    });
    it('should return true when n = 0', () => {
        expect((0, _1.isPositive)(0)).toBe(false);
    });
    it('should return true when n < 0', () => {
        expect((0, _1.isPositive)(-1)).toBe(false);
        expect((0, _1.isPositive)(-2)).toBe(false);
        expect((0, _1.isPositive)(-3)).toBe(false);
        expect((0, _1.isPositive)(-4)).toBe(false);
    });
});
