class Basket {
   constructor() {
       this.items = [] //Domain model properties helps me write the constructor
   }

   addItemToBasket(item) {
       if(item === undefined)
       return this.items
       //come up with suedo 
       this.items.push(item) 
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

module.exports = Basket