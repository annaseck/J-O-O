//Class d'objet pour le produit
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

//Class d'objet pour l'élément du panier
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    //Methode pour calculer le prix total de l'élément
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

//Class d'objet pour le panier d'achat
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    //Ajouter un élément
    addItem(product, quantity) {
        const item = new ShoppingCartItem(product, quantity);
        this.items.push(item);
    }

    //Supprimer un élément
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    //Obtenir le total des éléments
    getTotalItems() {
        return this.items.length;
    }

    //Obtenir le prix total
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    //Afficher les éléments du panier
    displayItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name}: ${item.quantity} x ${item.product.price}XOF = ${item.getTotalPrice()}XOF`);
        });
    }
}

// Tests
const product1 = new Product(1, 'Adidas Bad Bunny', 25000);
const product2 = new Product(2, 'Jordan Dunk Low', 30000);
const cart = new ShoppingCart();

cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.displayItems(); // Affiche les éléments du panier
console.log(`Total: ${cart.getTotalPrice()}XOF`); // Affiche le prix total

cart.removeItem(1); // Supprime le 1er produit
cart.displayItems(); // Affiche les éléments restants
console.log(`Total: ${cart.getTotalPrice()}XOF`); // Affiche le nouveau prix total
