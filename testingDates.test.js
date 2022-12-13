import { dateEqual } from './helpers';

function setDateTomorrow(date) {
    date.setDate(date.getDate() + 1);
    return date;
}

function setDateYesterday(date) {
    date.setDate(date.getDate() - 1);
    return date;
}

describe('dateFunctionTests', () => {
    const testDateInput = new Date();
    it('returns tomorrow', () => {
        const tomorrow = setDateTomorrow(testDateInput);
        const expected = new Date().setDate(new Date().getDate() + 1);
        assert(dateEqual(tomorrow, expected));
    })
    it('returns yesterday', () => {
        const yesterday = setDateYesterday(testDateInput);
        const expected = new Date().setDate(new Date().getDate() - 1);
        assert(dateEqual(yesterday, expected));
    })
})