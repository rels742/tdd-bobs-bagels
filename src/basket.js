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
}

module.exports = Basket