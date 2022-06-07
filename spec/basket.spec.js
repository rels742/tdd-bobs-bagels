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

    it("removes an item from the basket", () => {
        // Setup
        const basket = new Basket()
        const itemsToAdd = [
            {   
                id: "plain-bagel",
                sku: "BGLP",
                name: "Bagel",
                price: "0.39",
                variant: "Plain"
            },
            {
                id: "everything-bagel",
                sku: "BGLE",
                price: "0.49",
                name: "Bagel",
                variant: "Everything"
            }       
        ]

        const itemToRemove = {
                id: "plain-bagel",
                sku: "BGLP",
                name: "Bagel",
                price: "0.39",
                variant: "Plain"
        }

        const expected = [
            {
                id: "everything-bagel",
                sku: "BGLE",
                price: "0.49",
                name: "Bagel",
                variant: "Everything"  
            }
        ]
        
        // Execute
        basket.addMultipleItemsToBasket(itemsToAdd)
        const updatedBasket = basket.removeFromBasket(itemToRemove)
        // console.log('new basket' , updatedBasket)
        // const result = basket.removeItemFromBasket(removed) 
   

        // Verify 
        expect(updatedBasket).toEqual(expected) ///excpected as in the expected result, I could have names const expected to be expectedResult
    })

})


// return expected.pop