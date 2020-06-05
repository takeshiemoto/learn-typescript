import { PrimitiveValueObject, ValueObject } from './value-object';

class UserId extends PrimitiveValueObject<number> {
  static create(value: number): UserId {
    return new UserId(value);
  }
}

class UserName extends PrimitiveValueObject<string> {
  static create(value: string): UserName {
    return new UserName(value);
  }
}

/**
 * 引数とプロパティの型を分離する
 */
interface UserProps {
  id: UserId;
  name: UserName;
}

interface UserArgs {
  id: number;
  name: string;
}

export class User extends ValueObject<UserProps> {
  static create(args: UserArgs): User {
    /** バリデーションはここに書く */
    return new User({
      id: UserId.create(args.id),
      name: UserName.create(args.name),
    });
  }

  get name(): string {
    return this._value.name.value;
  }
}
