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
  products: Product[] = [];
  add(product: Product) {
    this.products.push(product);
  }
  remove({ id }: Product) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}

class User {
  id: number;
  name: string;
  cart: Cart;
  money = 1000;
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

  payMoney(totalAmount: number): number {
    this.money = this.money - totalAmount;
    return totalAmount;
  }
}

class Cashier {
  calcAmount(cart: Cart): number {
    return cart.products.reduce((acc, cur) => acc + cur.price, 0);
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

    /** Cashier*/
    const cashier = new Cashier();

    /** Shopping use case */
    user1.addCart(product1);
    user1.addCart(product2);
    user1.addCart(product3);
    user1.removeCart(product1);
    user1.payMoney(cashier.calcAmount(user1.cart));
  }
}
