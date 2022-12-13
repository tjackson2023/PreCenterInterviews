//assume dateEqual uses Date.prototype.getTime() to compare dates
import { dateEqual } from './helpers';

function setDatePlus1(date) {
    date.setDate(date.getDate() + 1);
    return date;
}

function setDateMinus1(date) {
    date.setDate(date.getDate() - 1);
    return date;
}

describe('dateFunctionTests', () => {
    const testDateInput = new Date();
    it('setDatePlus1 returns the next date (tomorrow)', () => {
        const tomorrow = setDatePlus1(testDateInput);
        const expected = new Date().setDate(new Date().getDate() + 1);
        const datesAreEqual = dateEqual(tomorrow, expected);
        assert(datesAreEqual);
    })
    it('setDateMinus1 returns the previous date (yesterday)', () => {
        const yesterday = setDateMinus1(testDateInput);
        const expected = new Date().setDate(new Date().getDate() - 1);
        const datesAreEqual = dateEqual(yesterday, expected);
        assert(datesAreEqual);
    })
})
