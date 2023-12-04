class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      const existingItem = this.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        item.quantity = 1;
        this.items.push(item);
      }
    }
  
    removeItem(itemId) {
      const existingItem = this.items.find(i => i.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        this.items = this.items.filter(item => item.id !== itemId);
      }
    }
  
    calculateTotal() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  
    getItems() {
      return this.items;
    }
  }
  
  export default Cart;
  