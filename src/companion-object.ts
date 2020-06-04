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

class BalletFlat implements Shoe {
  purpose = 'dancing';
}

class Boot implements Shoe {
  purpose = 'woodcutting';
}

class Sneaker implements Shoe {
  purpose = 'walking';
}

export type Shoe = {
  purpose: string;
};

/**
 * Shoe Factory
 */
export const Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat':
        return new BalletFlat();
      case 'boot':
        return new Boot();
      case 'sneaker':
        return new Sneaker();
    }
  },
};
