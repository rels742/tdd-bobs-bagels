User story part 1
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

<!-- Process to follow -->

NOUNS -
VERBS/ACTIONS - 

JS Object BagelItem 
-PROPERTIES 
-sku
-name
-etc 

Class Basket 
- PROPERTIES (what data I need to store)
- items (name of property): array of Bagel Items (DATA TYPE)

METHODS (actions/functions)
- addItems(item: BagelItem JS Objects) - returns updated list(array) of items


User story part 1. 2
As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

NOUNS - change order
VERBS/ACTIONS - remove item from basket

JS Object BagelItem
- PROPERTIES (what data I need to store)
- itemID: string, eg: 'plain-bagel'
- sku: string 
- name: string
- price: number
- etc

Class Basket 
- PROPERTIES (what data I need to store)
- items (name of property): array of Bagel Items (DATA TYPE)

METHODS (actions/functions)
- addItem(item: BagelItem JS Object) - returns updated list(array of items)

 - removeItem(itemId: string) -> returns updated array of items if removed; returns 'not found' if item not found




Pseudo Code
//-removeItem - a for loop that acceses the length of the array this.items, using it's index in the array it will access the item (which is stored as an object) the user wants to delete and will remove it.








<!-- verb - 
nouns - 


classes (or methods)
properties 
functions
methods 

Seudo code 
// -->