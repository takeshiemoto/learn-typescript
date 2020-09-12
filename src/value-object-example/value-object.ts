import { shallowEqual } from 'shallow-equal-object';

export abstract class AbstractValueObject<T> {
  protected readonly _value: T;

  protected constructor(value: T) {
    /** Immutable */
    this._value = Object.freeze(value);
  }

  equals(valueObject?: AbstractValueObject<T>): boolean {
    if (valueObject === null) {
      return false;
    }
    return shallowEqual(this._value, valueObject);
  }
}

export abstract class ValueObject<
  T extends ValueObjectProps
> extends AbstractValueObject<T> {}

export abstract class PrimitiveValueObject<T> extends AbstractValueObject<T> {
  get value(): T {
    return this._value;
  }
}

export type ValueObjectProps = {
  [index: string]: never;
};
