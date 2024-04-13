const originalPrice = 1000
const discountPercentage = 15

function calculateDiscountedPrice(price, discountPercentage) {
    return (price * (100 - discountPercentage)) / 100
}

console.log(calculateDiscountedPrice(1200, 10))

function calculateDiscountedPrice2(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount
    return priceWithDiscount
}

const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)
const finalPrice2 = calculateDiscountedPrice2(originalPrice, discountPercentage)

console.log('Original Price: $' + originalPrice)
console.log('Discount: ' + discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)
console.log('Price with discount: $' + finalPrice2)