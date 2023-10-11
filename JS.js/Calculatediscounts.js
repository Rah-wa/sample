const calculateDiscountPrice = function(originalPrice, discountPercentage) {
    const discountAmount = (discountPercentage / 100) * originalPrice;
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
};
const calculateDiscountWithCallback = function(originalPrice, discountPercentage, callback) {
    const discountAmount = (discountPercentage / 100) * originalPrice;
    const discountedPrice = originalPrice - discountAmount;
    callback(discountedPrice);
};
const printDiscountedPrice = function(discountedPrice) {
    console.log("Discounted Price:", discountedPrice);
};
const originalPrice1 = 400;
const discountPercentage1 = 40;
const originalPrice2 = 150;
const discountPercentage2 = 20;
const discountedPrice1 = calculateDiscountPrice(originalPrice1, discountPercentage1);
console.log("Discounted Price 1:", discountedPrice1);
const discountedPrice2 = calculateDiscountPrice(originalPrice2, discountPercentage2);
console.log("Discounted Price 2:", discountedPrice2);
calculateDiscountWithCallback(originalPrice1, discountPercentage1, printDiscountedPrice);
calculateDiscountWithCallback(originalPrice2, discountPercentage2, printDiscountedPrice);
