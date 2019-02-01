import { NativeError } from '../nstypes';
import { nanoTime } from 'N/util';


// collections
 
export function array<T=number>(n: number, sample?: T): T[] {
  const a: (T | number)[] = []
  for (let i = 0; i < n; i++) {
    a.push(typeof sample === 'undefined' ? i : sample)
  }
  return a as T[]
}
export function repeat(n: number, s: string): string {
  return array(n, s).join('')
}
export function indent(i: number=1, tabSize=2): string {
  return repeat(i*tabSize, ' ')
}
export function find<T>(a: T[], predicate: (o: T, index?: number, arr?: T[]) => boolean): T | undefined {
  for (let i = 0; i < a.length; i++) {
    const v = a[i];
    if (predicate(v, i, a)) {
      return v
    }
  }
}
export function objectKeys<Field extends EmptyObject = EmptyObject>(o: Field):StringKeyOf<Field>[] {
  return Object.keys(o) as StringKeyOf<Field>[]
}


// types

/** returns the type of the value with key K in the Mapped type T. Example: `type _string = ValueOf<A, 'a'>` . */
export type ValueOf<T extends any, K extends string|number> = T[K];
export type ValueOfStringKey<T extends { [k: string]: any }, K extends string> = T[K];
export type ValueOfNumberKey<T extends { [k: number]: any }, K extends number> = T[K];
export type StringKeyOf<T extends any> = Extract<keyof T, string>;
export type NumberKeyOf<T extends any> = Extract<keyof T, number>;
// export type Value<T extends any> = Extract<keyof T, string>;

// export type Extended <T extends any, K extends any = any> = T extends K ? T : never
// export type NamedMemberNamesOf <T extends any, K extends Extended<T> = Extended<T>> = StringKeyOf<K>
// export type NamedMemberValuesOf <T extends any, K extends Extended<T> = Extended<T>> = ValueOfStringKey<K, NamedMemberNamesOf<K>>


// type UnionToArray0<T> = []
// type UnionToArray1<T> = [T]
// type UnionToArray2<T, T1 = Extract<T, T2>, T2 =Extract<T, T1>> = T1 extends T2 ? (T2 extends T1 ? never : [T, T]) : [T, T]
// type UnionToArray3<T, T3 = Extract<T, T2>, T2 = Extract<T, UnionToArray2<T>>> = T3 extends T2 ? (T2 extends T3 ? never : T2) : [T, T, T]
// type UnionToArray3<T, T0 = Extract<T, T1|T2|T3>, T1 = Extract<T, T0|T2|T3>, T2 =Extract<T, T0|T1|T3>, T3 =Extract<T, T0|T1|T2>, > = T3 extends T2|T1|T0 ? (T2|T1|T0 extends T3 ? (T2 extends T0|T1|T3 ? (T0|T1|T3 extends T2 ? (T1 extends T0|T2|T3 ? (T0|T2|T3 extends T1 ? never : [T]) :[T]) : [T,T]) :[T,T]) : [T,T,T]):[T,T,T]
// // (T3 extends T1 ? (T1 extends T3 ? (T0 extends T3 ? (T3 extends T0 ? never : []): []) :[T]):[T]):[T,T]) :[T,T]
// //Extract<T, T2&T3>, T2 =Extract<T, T1&T3>,  T3 =Extract<T, T1&T2>> = T1 extends T2 ? (T2 extends T1 ? never : [T, T]) : [T, T]

// type UnionToArray3<T, t0 = UnionToArray0<T>, t1 = UnionToArray1<T>, t2 = Extract<T, t3>, t3 = Extract<T, t2>> = t3 extends t2 ? (t2 extends t3 ? never: [T,T,T]): [T,T,T]


type UnionToArray3<T, t1 = Extract<T, t3|t2>, t2 = Extract<T, t3|t1>, t3 = Extract<T, t2|t1>> = t3 extends t2 ? (t2 extends t3 ? (t1 extends t3 ? (t3 extends t1 ? never: [T,T,T]): [T,T,T]) : [T,T,T]) : [T,T,T]



type UnionToArray<T, t0 = UnionToArray0<T>,t1 = UnionToArray1<T>,t2 = UnionToArray2<T>, t3 = UnionToArray3<T>> = t3 extends never ? (t2 extends never ? (t1 extends never ? (t0 extends never ? never : t0) : t1 ) : t2) : t3 //t0 extends never ? (t1 extends never ? never : t1) : t0
// type UnionToArray<T, t0 = UnionToArray0<T>,t1 = UnionToArray1<T>,t2 = UnionToArray2<T>, t3 = UnionToArray3<T>> = t0 extends never ? (t1 extends never ? (t2 extends never ? (t3 extends never ? never : t3) : t2 ) : t1) : t0

let gg : UnionToArray2<1|2|3>





export type TODO = any
export function checkThrow<T>(r?: T, msg = 'Throwing on undefined value'): T {
  if (!r) { throw new Error(msg) }
  return r
}
export type MapStringKeySameTypeValues<T extends any = any> = { [key: string]: T }
export type EmptyObject = {}
export interface TypedMap<PropTypes extends EmptyObject> {
  get<T extends StringKeyOf<PropTypes>>(name: T): ValueOfStringKey<PropTypes, T>
  set<T extends StringKeyOf<PropTypes>>(name: T, value: ValueOfStringKey<PropTypes, T>): void
}
export interface TypedMapAndUndefinedGetter<PropTypes extends EmptyObject> {
  get<T extends StringKeyOf<PropTypes>>(name: T): ValueOfStringKey<PropTypes, T>|undefined
  set<T extends StringKeyOf<PropTypes>>(name: T, value: ValueOfStringKey<PropTypes, T>): void
}
export class TypedMapImpl<PropTypes extends EmptyObject> implements TypedMap<PropTypes> {
  public constructor(private props: PropTypes) { }
  get<T extends StringKeyOf<PropTypes>>(name: T): ValueOfStringKey<PropTypes, T> {
    return this.props[name]
  }
  set<T extends StringKeyOf<PropTypes>>(name: T, value: ValueOfStringKey<PropTypes, T>): void {
    this.props[name] = value
  }
}



export function printNativeError(error: NativeError) {
  return `${error && error.type}, ${error && error.name}
Cause: ${error && error.message}
Stack Trace: 
${(error.stack && Array.isArray(error.stack)) ? error.stack.map(s => repeat(2, ' ') + s).join('\n') : error.stack}`
}



export function printMs(ms: number, config: { minutes?: boolean, seconds?: boolean, ms?: boolean } = { minutes: false, seconds: true, ms: true }) {
  config = { ...{ minutes: false, seconds: true, ms: true }, ...config }
  const seconds = config.seconds && Math.floor(ms / 1000)
  const minutes = config.minutes && seconds && Math.floor(seconds / 60)
  const milliseconds = config.ms && Math.floor(ms % 1000 || ms)
  return `${minutes ? `${minutes} minutes ` : ''}${seconds ? `${seconds} seconds ` : ''}${milliseconds ? `${milliseconds} milliseconds ` : ''}`
}
export function now(unit: 'milliseconds' | 'nanoseconds' = 'milliseconds') {
  return unit === 'milliseconds' ? nanosecondsToMilliseconds(nanoTime()) : nanoTime()
}
export function nanosecondsToMilliseconds(n: number) {
  return n / 1e+6
}