const Basket = require('../src/basket.js')

describe("Basket", () => {
    it("adds an item to the basket", () => {
        // Setup
        const basket = new Basket()
        const expected = [
            {
            id: 1,
            sku: "BGLP",
            name: "Bagel",
            price: "0.39",
            variant: "Plain"
            }       
        ]

        // Execute
        const result = basket.addItemToBasket(expected[0])

        // Verify 
        expected(result).toEqual(expected)
    })
})

