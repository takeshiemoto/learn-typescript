/**
 * 基本形
 */
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<boolean>; // false

type ToArray<T> = T[];
type C = ToArray<number>;
type D = ToArray<number | string>;

type ToArray2<T> = T extends unknown ? T[] : T[];
type E = ToArray2<number>;
type F = ToArray2<number | string>;

type Without<T, U> = T extends U ? never : T;
type G = Without<boolean | number | string, boolean>;

/**
 * inferキーワード
 * 条件に一部としてジェネリック型を宣言できる
 */
type ElementType<T> = T extends unknown[] ? T[number] : T;
type H = ElementType<number[]>;

type ElementType2<T> = T extends (infer U)[] ? U : T;
type I = ElementType<number[]>;
