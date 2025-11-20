function calculateTax(amount){
    let taxValue = amount * 0.1;
    return taxValue;
}
function convertToUpperCase(text){
    return text.toUpperCase()
}
function findMaximum(num1,num2){
    return num1 > num2? num1:num2;
}
function isPalindrome(word){
    const reversed = word.split('').reverse().join('');
    return word ===reversed;
}
function calculateDiscountedPrice(originalPrice,discountedPercentage){
    const discountAmount = (discountedPercentage/100)*originalPrice;
    return originalPrice - discountAmount;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };