/**
 * コンパニオンオブジェクトパターン
 * 型と値は別々の名前空間に存在する
 */

type Unit = 'EUR' | 'GBP' | 'JPY' | 'USD';

export type Currency = {
  unit: Unit;
  value: number;
};

export const Currency = {
  from(value: number, unit: Unit): Currency {
    return {
      unit: unit,
      value,
    };
  },
};
