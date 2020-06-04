/**
 * コンパニオンオブジェクトパターン
 * 型と値は別々の名前空間に存在する
 */
declare type Unit = 'EUR' | 'GBP' | 'JPY' | 'USD';
export declare type Currency = {
  unit: Unit;
  value: number;
};
export declare const Currency: {
  from(value: number, unit: Unit): Currency;
};
export declare type Shoe = {
  purpose: string;
};
/**
 * Shoe Factory
 */
export declare const Shoe: {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe;
};
export {};
