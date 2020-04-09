class Product {
  id: number;
  name: string;
  price: number;
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class Cart {
  private products: Product[] = [];
  add(product: Product) {
    this.products.push(product);
  }
  remove({ id }: Product) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  calcTotal(): number {
    return this.products.reduce((acc, cur) => acc + cur.price, 0);
  }
}

class User {
  id: number;
  name: string;
  cart: Cart;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.cart = new Cart();
  }

  addCart(product: Product): void {
    this.cart.add(product);
  }

  removeCart(product: Product): void {
    this.cart.remove(product);
  }

  bill(): void {
    console.log(this.cart.calcTotal());
  }
}

export class EcApp {
  serve(): void {
    /** Products */
    const product1 = new Product(1, "にんじん", 100);
    const product2 = new Product(2, "たまねぎ", 98);
    const product3 = new Product(3, "かぼちゃ", 120);

    /** Users */
    const user1 = new User(1, "John");
    const user2 = new User(2, "Paul");

    /** Shopping use case */
    user1.addCart(product1);
    user1.addCart(product2);
    user1.addCart(product3);
    user1.bill();

    user2.addCart(product2);
    user2.addCart(product3);
    user2.removeCart(product3);
    user2.bill();
  }
}
