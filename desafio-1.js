class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        if (this.products.some((p) => p.code === product.code)) {
            console.error("El código del producto ya existe.");
            return;
        }

        product.id = this.productIdCounter++;
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado.");
            return null;
        }
    }
}

// Ejemplo de uso:
const manager = new ProductManager();
manager.addProduct({
    title: "Producto 1",
    description: "Descripción del Producto 1",
    price: 19.99,
    thumbnail: "imagen1.jpg",
    code: "P1",
    stock: 10,
});

manager.addProduct({
    title: "Producto 2",
    description: "Descripción del Producto 2",
    price: 29.99,
    thumbnail: "imagen2.jpg",
    code: "P2",
    stock: 5,
});

console.log(manager.getProducts());
console.log(manager.getProductById(1)); // Mostrará el producto con id 1
console.log(manager.getProductById(3)); // Mostrará un error "Producto no encontrado"
