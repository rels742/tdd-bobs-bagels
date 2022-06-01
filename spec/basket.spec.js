const Basket = require('../src/basket.js')

describe("Basket", () => {
    it("adds an item to the basket", () => {
        // Setup
        const basket = new Basket()
        const expected = [
            {
            id: "plain-bagel",
            sku: "BGLP",
            name: "Bagel",
            price: "0.39",
            variant: "Plain"
            }       
        ]

        // Execute
        const result = basket.addItemToBasket(expected[0])
        //or instead for clarity I could have written, const updatedBasket = basket.addItem()

        // Verify 
        expect(result).toEqual(expected)
    })

    it("cannot add an item that is undefined to the basket", () => {
        // Setup
        const basket = new Basket()
        const expected = []

        // Execute
        const result = basket.addItemToBasket(expected[0])
        //or instead for clarity I could have written, const updatedBasket = basket.addItem()

        // Verify 
        expect(result).toEqual(expected)
    })

    // it("removes an item from the basket", () => {
    //     // Setup
    //     const basket = new Basket()
    //     const expected = [
    //         {
    //         id: "plain-bagel",
    //         sku: "BGLP",
    //         name: "Bagel",
    //         price: "0.39",
    //         variant: "Plain"
    //         }       
    //     ]

    //     // Execute
    //     const result = basket.addItemToBasket(expected[0])
    //     const updatedResult = basket.removeItem()
    //     //or instead for clarity I could have written, const updatedBasket = basket.addItem()

    //     // Verify 
    //     expect(result).toEqual(expected)
    // })

})

