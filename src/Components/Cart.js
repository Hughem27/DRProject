class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Add item to the cart
    addItem(item) {
        this.items.push(item);
    }

    // Remove item from the cart
    removeItem(itemToRemove) {
        this.items = this.items.filter(item => item.id !== itemToRemove.id);
    }

    // Calculate total cost of the items in the cart
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    // Display cart items
    displayCartItems() {
        this.items.forEach(item => {
            console.log(`Item: ${item.name}, Price: ${item.price}`);
        });
    }
}

// Example usage
const cart = new ShoppingCart();
cart.addItem({ id: 1, name: 'Apple', price: 0.99 });
cart.addItem({ id: 2, name: 'Bread', price: 2.50 });
cart.displayCartItems();
console.log(`Total: $${cart.calculateTotal()}`);
cart.removeItem({ id: 1 });
cart.displayCartItems();
console.log(`Total: $${cart.calculateTotal()}`);


function Cart() {
    return (
      <div>
        
        
    
      </div>
    )
  }
  
  export default Cart;
  