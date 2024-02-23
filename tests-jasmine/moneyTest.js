import { formatCurrency } from "../scripts/utils/money.js";

describe('test suite: formatCurrency',()=>{
    it('convert cents into dollars',()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    it('working with 0',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });
    it('related to rounding up',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });

    
});
