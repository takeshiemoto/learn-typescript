import { Currency, Shoe } from './companion-object';

// 型として
const amountDue: Currency = {
  unit: 'JPY',
  value: 1200,
};

// 値として
const otherAmountDue = Currency.from(330, 'EUR');

Shoe.create('boot');
