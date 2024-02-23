import { formatCurrency } from "../scripts/utils/money.js";

console.log('test suite : tests for format currency')


console.log('test for cents to dollar conversion');
if(formatCurrency(2095) ==='20.95'){
    
    console.log('passed');
}else{
    console.log('failed')
}
console.log('working with zero')
if(formatCurrency(0)==='0.00'){
    console.log('passed')
}else{
    console.log('failed')
}
console.log('test related to rounding up to the nearest cents')
if(formatCurrency(2000.5)==='20.01'){
    console.log('passed')
}else{
    console.log('failed');
}