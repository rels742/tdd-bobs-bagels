class Basket {
   constructor() {
       this.items = [] //Domain model properties helps me write the constructor
       this.max = 5 
   }

   isFull() {
       if(this.items.length >= this.max) {
           return true 
       } else {
        return false
       } 
   }

   addItemToBasket(item) {
       if(item === undefined) {
        return this.items
       }

       if(!this.isFull()) {
        this.items.push(item)
        // console.log("Added item ", item.id ) shows items added to basket
       } else {
        //    console.log("Not adding item, basket full ", item.id) shows the item that will not be added to the basket
       }

       return this.items
   }

   addMultipleItemsToBasket(items) {
       for(let i = 0; i < items.length; i++) {
           this.addItemToBasket(items[i])
       }

       return this.items
   }

   removeFromBasket(item) {
       //check if there are any items in basket, then remove the last one from the array 
       //console.log('basket contents before', this.items)

       const newBasket = []
       for(let i = 0; i < this.items.length; i++) {
           if(item.id !== this.items[i].id) {
               newBasket.push(this.items[i])
           }
       }
       this.items = newBasket
       //console.log('new basket', this.items) console.log placed here to see what the updated basket would be and nothing can go after return this.items
       return this.items
       
   } 
}

class Checkout {
    constructor() {
        this.basket = []
        this.max = 5 
    }

  isMax() {
      if(this.basket.length >= this.max) {
          return true 
      }
      return false
  }

  addToBasket(item) {
      if (!this.isMax()) {
        if (item) {
          console.log('Added Item ', item, this.basket.length)
          this.basket.push(item)
        }
      }
      return this.basket
    }
  
    addMultipleToBasket(items) {
      for (let i = 0; i < items.length; i++) {
        this.addToBasket(items[i])
      }
      return this.basket
    }
}

module.exports = Basket

