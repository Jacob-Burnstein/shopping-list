
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model ItemList
 * 
 */
export type ItemList = $Result.DefaultSelection<Prisma.$ItemListPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs>;

  /**
   * `prisma.itemList`: Exposes CRUD operations for the **ItemList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemLists
    * const itemLists = await prisma.itemList.findMany()
    * ```
    */
  get itemList(): Prisma.ItemListDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Store: 'Store',
    ItemList: 'ItemList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'store' | 'itemList'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>,
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      ItemList: {
        payload: Prisma.$ItemListPayload<ExtArgs>
        fields: Prisma.ItemListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>
          }
          findFirst: {
            args: Prisma.ItemListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>
          }
          findMany: {
            args: Prisma.ItemListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>[]
          }
          create: {
            args: Prisma.ItemListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>
          }
          createMany: {
            args: Prisma.ItemListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItemListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>
          }
          update: {
            args: Prisma.ItemListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>
          }
          deleteMany: {
            args: Prisma.ItemListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItemListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItemListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemListPayload>
          }
          aggregate: {
            args: Prisma.ItemListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItemList>
          }
          groupBy: {
            args: Prisma.ItemListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemListCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemListCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Stores: number
    ItemLists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Stores?: boolean | UserCountOutputTypeCountStoresArgs
    ItemLists?: boolean | UserCountOutputTypeCountItemListsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListWhereInput
  }



  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    ItemLists: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ItemLists?: boolean | StoreCountOutputTypeCountItemListsArgs
  }

  // Custom InputTypes

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountItemListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    UserId: number | null
  }

  export type UserSumAggregateOutputType = {
    UserId: number | null
  }

  export type UserMinAggregateOutputType = {
    UserId: number | null
    UserName: string | null
    Password: string | null
  }

  export type UserMaxAggregateOutputType = {
    UserId: number | null
    UserName: string | null
    Password: string | null
  }

  export type UserCountAggregateOutputType = {
    UserId: number
    UserName: number
    Password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    UserId?: true
  }

  export type UserSumAggregateInputType = {
    UserId?: true
  }

  export type UserMinAggregateInputType = {
    UserId?: true
    UserName?: true
    Password?: true
  }

  export type UserMaxAggregateInputType = {
    UserId?: true
    UserName?: true
    Password?: true
  }

  export type UserCountAggregateInputType = {
    UserId?: true
    UserName?: true
    Password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    UserId: number
    UserName: string
    Password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserId?: boolean
    UserName?: boolean
    Password?: boolean
    Stores?: boolean | User$StoresArgs<ExtArgs>
    ItemLists?: boolean | User$ItemListsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    UserId?: boolean
    UserName?: boolean
    Password?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Stores?: boolean | User$StoresArgs<ExtArgs>
    ItemLists?: boolean | User$ItemListsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Stores: Prisma.$StorePayload<ExtArgs>[]
      ItemLists: Prisma.$ItemListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UserId: number
      UserName: string
      Password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `UserId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { UserId: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Stores<T extends User$StoresArgs<ExtArgs> = {}>(args?: Subset<T, User$StoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findMany'> | Null>;

    ItemLists<T extends User$ItemListsArgs<ExtArgs> = {}>(args?: Subset<T, User$ItemListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly UserId: FieldRef<"User", 'Int'>
    readonly UserName: FieldRef<"User", 'String'>
    readonly Password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Stores
   */
  export type User$StoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * User.ItemLists
   */
  export type User$ItemListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemListInclude<ExtArgs> | null
    where?: ItemListWhereInput
    orderBy?: ItemListOrderByWithRelationInput | ItemListOrderByWithRelationInput[]
    cursor?: ItemListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemListScalarFieldEnum | ItemListScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    StoreId: number | null
    UserId: number | null
  }

  export type StoreSumAggregateOutputType = {
    StoreId: number | null
    UserId: number | null
  }

  export type StoreMinAggregateOutputType = {
    StoreId: number | null
    UserId: number | null
  }

  export type StoreMaxAggregateOutputType = {
    StoreId: number | null
    UserId: number | null
  }

  export type StoreCountAggregateOutputType = {
    StoreId: number
    UserId: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    StoreId?: true
    UserId?: true
  }

  export type StoreSumAggregateInputType = {
    StoreId?: true
    UserId?: true
  }

  export type StoreMinAggregateInputType = {
    StoreId?: true
    UserId?: true
  }

  export type StoreMaxAggregateInputType = {
    StoreId?: true
    UserId?: true
  }

  export type StoreCountAggregateInputType = {
    StoreId?: true
    UserId?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    StoreId: number
    UserId: number
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    StoreId?: boolean
    UserId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    ItemLists?: boolean | Store$ItemListsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    StoreId?: boolean
    UserId?: boolean
  }

  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    ItemLists?: boolean | Store$ItemListsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      ItemLists: Prisma.$ItemListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      StoreId: number
      UserId: number
    }, ExtArgs["result"]["store"]>
    composites: {}
  }


  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StoreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Store that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StoreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `StoreId`
     * const storeWithStoreIdOnly = await prisma.store.findMany({ select: { StoreId: true } })
     * 
    **/
    findMany<T extends StoreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
    **/
    create<T extends StoreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StoreCreateArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stores.
     *     @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     *     @example
     *     // Create many Stores
     *     const store = await prisma.store.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StoreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
    **/
    delete<T extends StoreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StoreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StoreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StoreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
    **/
    upsert<T extends StoreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ItemLists<T extends Store$ItemListsArgs<ExtArgs> = {}>(args?: Subset<T, Store$ItemListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Store model
   */ 
  interface StoreFieldRefs {
    readonly StoreId: FieldRef<"Store", 'Int'>
    readonly UserId: FieldRef<"Store", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }


  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
  }


  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }


  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
  }


  /**
   * Store.ItemLists
   */
  export type Store$ItemListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemListInclude<ExtArgs> | null
    where?: ItemListWhereInput
    orderBy?: ItemListOrderByWithRelationInput | ItemListOrderByWithRelationInput[]
    cursor?: ItemListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemListScalarFieldEnum | ItemListScalarFieldEnum[]
  }


  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
  }



  /**
   * Model ItemList
   */

  export type AggregateItemList = {
    _count: ItemListCountAggregateOutputType | null
    _avg: ItemListAvgAggregateOutputType | null
    _sum: ItemListSumAggregateOutputType | null
    _min: ItemListMinAggregateOutputType | null
    _max: ItemListMaxAggregateOutputType | null
  }

  export type ItemListAvgAggregateOutputType = {
    Id: number | null
    UserId: number | null
    StoreId: number | null
  }

  export type ItemListSumAggregateOutputType = {
    Id: number | null
    UserId: number | null
    StoreId: number | null
  }

  export type ItemListMinAggregateOutputType = {
    Id: number | null
    ItemName: string | null
    UserId: number | null
    StoreId: number | null
  }

  export type ItemListMaxAggregateOutputType = {
    Id: number | null
    ItemName: string | null
    UserId: number | null
    StoreId: number | null
  }

  export type ItemListCountAggregateOutputType = {
    Id: number
    ItemName: number
    UserId: number
    StoreId: number
    _all: number
  }


  export type ItemListAvgAggregateInputType = {
    Id?: true
    UserId?: true
    StoreId?: true
  }

  export type ItemListSumAggregateInputType = {
    Id?: true
    UserId?: true
    StoreId?: true
  }

  export type ItemListMinAggregateInputType = {
    Id?: true
    ItemName?: true
    UserId?: true
    StoreId?: true
  }

  export type ItemListMaxAggregateInputType = {
    Id?: true
    ItemName?: true
    UserId?: true
    StoreId?: true
  }

  export type ItemListCountAggregateInputType = {
    Id?: true
    ItemName?: true
    UserId?: true
    StoreId?: true
    _all?: true
  }

  export type ItemListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemList to aggregate.
     */
    where?: ItemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemLists to fetch.
     */
    orderBy?: ItemListOrderByWithRelationInput | ItemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemLists
    **/
    _count?: true | ItemListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemListMaxAggregateInputType
  }

  export type GetItemListAggregateType<T extends ItemListAggregateArgs> = {
        [P in keyof T & keyof AggregateItemList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemList[P]>
      : GetScalarType<T[P], AggregateItemList[P]>
  }




  export type ItemListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemListWhereInput
    orderBy?: ItemListOrderByWithAggregationInput | ItemListOrderByWithAggregationInput[]
    by: ItemListScalarFieldEnum[] | ItemListScalarFieldEnum
    having?: ItemListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemListCountAggregateInputType | true
    _avg?: ItemListAvgAggregateInputType
    _sum?: ItemListSumAggregateInputType
    _min?: ItemListMinAggregateInputType
    _max?: ItemListMaxAggregateInputType
  }

  export type ItemListGroupByOutputType = {
    Id: number
    ItemName: string
    UserId: number
    StoreId: number
    _count: ItemListCountAggregateOutputType | null
    _avg: ItemListAvgAggregateOutputType | null
    _sum: ItemListSumAggregateOutputType | null
    _min: ItemListMinAggregateOutputType | null
    _max: ItemListMaxAggregateOutputType | null
  }

  type GetItemListGroupByPayload<T extends ItemListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemListGroupByOutputType[P]>
            : GetScalarType<T[P], ItemListGroupByOutputType[P]>
        }
      >
    >


  export type ItemListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    ItemName?: boolean
    UserId?: boolean
    StoreId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemList"]>

  export type ItemListSelectScalar = {
    Id?: boolean
    ItemName?: boolean
    UserId?: boolean
    StoreId?: boolean
  }

  export type ItemListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Store?: boolean | StoreDefaultArgs<ExtArgs>
  }


  export type $ItemListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemList"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      ItemName: string
      UserId: number
      StoreId: number
    }, ExtArgs["result"]["itemList"]>
    composites: {}
  }


  type ItemListGetPayload<S extends boolean | null | undefined | ItemListDefaultArgs> = $Result.GetResult<Prisma.$ItemListPayload, S>

  type ItemListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemListFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemListCountAggregateInputType | true
    }

  export interface ItemListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemList'], meta: { name: 'ItemList' } }
    /**
     * Find zero or one ItemList that matches the filter.
     * @param {ItemListFindUniqueArgs} args - Arguments to find a ItemList
     * @example
     * // Get one ItemList
     * const itemList = await prisma.itemList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItemListFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ItemList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemListFindUniqueOrThrowArgs} args - Arguments to find a ItemList
     * @example
     * // Get one ItemList
     * const itemList = await prisma.itemList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ItemList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListFindFirstArgs} args - Arguments to find a ItemList
     * @example
     * // Get one ItemList
     * const itemList = await prisma.itemList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemListFindFirstArgs<ExtArgs>>
    ): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ItemList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListFindFirstOrThrowArgs} args - Arguments to find a ItemList
     * @example
     * // Get one ItemList
     * const itemList = await prisma.itemList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ItemLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemLists
     * const itemLists = await prisma.itemList.findMany()
     * 
     * // Get first 10 ItemLists
     * const itemLists = await prisma.itemList.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const itemListWithIdOnly = await prisma.itemList.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends ItemListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ItemList.
     * @param {ItemListCreateArgs} args - Arguments to create a ItemList.
     * @example
     * // Create one ItemList
     * const ItemList = await prisma.itemList.create({
     *   data: {
     *     // ... data to create a ItemList
     *   }
     * })
     * 
    **/
    create<T extends ItemListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemListCreateArgs<ExtArgs>>
    ): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ItemLists.
     *     @param {ItemListCreateManyArgs} args - Arguments to create many ItemLists.
     *     @example
     *     // Create many ItemLists
     *     const itemList = await prisma.itemList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemList.
     * @param {ItemListDeleteArgs} args - Arguments to delete one ItemList.
     * @example
     * // Delete one ItemList
     * const ItemList = await prisma.itemList.delete({
     *   where: {
     *     // ... filter to delete one ItemList
     *   }
     * })
     * 
    **/
    delete<T extends ItemListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItemListDeleteArgs<ExtArgs>>
    ): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ItemList.
     * @param {ItemListUpdateArgs} args - Arguments to update one ItemList.
     * @example
     * // Update one ItemList
     * const itemList = await prisma.itemList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemListUpdateArgs<ExtArgs>>
    ): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ItemLists.
     * @param {ItemListDeleteManyArgs} args - Arguments to filter ItemLists to delete.
     * @example
     * // Delete a few ItemLists
     * const { count } = await prisma.itemList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemLists
     * const itemList = await prisma.itemList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItemListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemList.
     * @param {ItemListUpsertArgs} args - Arguments to update or create a ItemList.
     * @example
     * // Update or create a ItemList
     * const itemList = await prisma.itemList.upsert({
     *   create: {
     *     // ... data to create a ItemList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemList we want to update
     *   }
     * })
    **/
    upsert<T extends ItemListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItemListUpsertArgs<ExtArgs>>
    ): Prisma__ItemListClient<$Result.GetResult<Prisma.$ItemListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ItemLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListCountArgs} args - Arguments to filter ItemLists to count.
     * @example
     * // Count the number of ItemLists
     * const count = await prisma.itemList.count({
     *   where: {
     *     // ... the filter for the ItemLists we want to count
     *   }
     * })
    **/
    count<T extends ItemListCountArgs>(
      args?: Subset<T, ItemListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemListAggregateArgs>(args: Subset<T, ItemListAggregateArgs>): Prisma.PrismaPromise<GetItemListAggregateType<T>>

    /**
     * Group by ItemList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemListGroupByArgs['orderBy'] }
        : { orderBy?: ItemListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemList model
   */
  readonly fields: ItemListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ItemList model
   */ 
  interface ItemListFieldRefs {
    readonly Id: FieldRef<"ItemList", 'Int'>
    readonly ItemName: FieldRef<"ItemList", 'String'>
    readonly UserId: FieldRef<"ItemList", 'Int'>
    readonly StoreId: FieldRef<"ItemList", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ItemList findUnique
   */
  export type ItemListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * Filter, which ItemList to fetch.
     */
    where: ItemListWhereUniqueInput
  }


  /**
   * ItemList findUniqueOrThrow
   */
  export type ItemListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * Filter, which ItemList to fetch.
     */
    where: ItemListWhereUniqueInput
  }


  /**
   * ItemList findFirst
   */
  export type ItemListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * Filter, which ItemList to fetch.
     */
    where?: ItemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemLists to fetch.
     */
    orderBy?: ItemListOrderByWithRelationInput | ItemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemLists.
     */
    cursor?: ItemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemLists.
     */
    distinct?: ItemListScalarFieldEnum | ItemListScalarFieldEnum[]
  }


  /**
   * ItemList findFirstOrThrow
   */
  export type ItemListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * Filter, which ItemList to fetch.
     */
    where?: ItemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemLists to fetch.
     */
    orderBy?: ItemListOrderByWithRelationInput | ItemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemLists.
     */
    cursor?: ItemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemLists.
     */
    distinct?: ItemListScalarFieldEnum | ItemListScalarFieldEnum[]
  }


  /**
   * ItemList findMany
   */
  export type ItemListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * Filter, which ItemLists to fetch.
     */
    where?: ItemListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemLists to fetch.
     */
    orderBy?: ItemListOrderByWithRelationInput | ItemListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemLists.
     */
    cursor?: ItemListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemLists.
     */
    skip?: number
    distinct?: ItemListScalarFieldEnum | ItemListScalarFieldEnum[]
  }


  /**
   * ItemList create
   */
  export type ItemListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemList.
     */
    data: XOR<ItemListCreateInput, ItemListUncheckedCreateInput>
  }


  /**
   * ItemList createMany
   */
  export type ItemListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemLists.
     */
    data: ItemListCreateManyInput | ItemListCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ItemList update
   */
  export type ItemListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemList.
     */
    data: XOR<ItemListUpdateInput, ItemListUncheckedUpdateInput>
    /**
     * Choose, which ItemList to update.
     */
    where: ItemListWhereUniqueInput
  }


  /**
   * ItemList updateMany
   */
  export type ItemListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemLists.
     */
    data: XOR<ItemListUpdateManyMutationInput, ItemListUncheckedUpdateManyInput>
    /**
     * Filter which ItemLists to update
     */
    where?: ItemListWhereInput
  }


  /**
   * ItemList upsert
   */
  export type ItemListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemList to update in case it exists.
     */
    where: ItemListWhereUniqueInput
    /**
     * In case the ItemList found by the `where` argument doesn't exist, create a new ItemList with this data.
     */
    create: XOR<ItemListCreateInput, ItemListUncheckedCreateInput>
    /**
     * In case the ItemList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemListUpdateInput, ItemListUncheckedUpdateInput>
  }


  /**
   * ItemList delete
   */
  export type ItemListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemListInclude<ExtArgs> | null
    /**
     * Filter which ItemList to delete.
     */
    where: ItemListWhereUniqueInput
  }


  /**
   * ItemList deleteMany
   */
  export type ItemListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemLists to delete
     */
    where?: ItemListWhereInput
  }


  /**
   * ItemList without action
   */
  export type ItemListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemList
     */
    select?: ItemListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemListInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    UserId: 'UserId',
    UserName: 'UserName',
    Password: 'Password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    StoreId: 'StoreId',
    UserId: 'UserId'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const ItemListScalarFieldEnum: {
    Id: 'Id',
    ItemName: 'ItemName',
    UserId: 'UserId',
    StoreId: 'StoreId'
  };

  export type ItemListScalarFieldEnum = (typeof ItemListScalarFieldEnum)[keyof typeof ItemListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    UserId?: IntFilter<"User"> | number
    UserName?: StringFilter<"User"> | string
    Password?: StringFilter<"User"> | string
    Stores?: StoreListRelationFilter
    ItemLists?: ItemListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    UserId?: SortOrder
    UserName?: SortOrder
    Password?: SortOrder
    Stores?: StoreOrderByRelationAggregateInput
    ItemLists?: ItemListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    UserId?: number
    UserName?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Password?: StringFilter<"User"> | string
    Stores?: StoreListRelationFilter
    ItemLists?: ItemListListRelationFilter
  }, "UserId" | "UserName">

  export type UserOrderByWithAggregationInput = {
    UserId?: SortOrder
    UserName?: SortOrder
    Password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    UserId?: IntWithAggregatesFilter<"User"> | number
    UserName?: StringWithAggregatesFilter<"User"> | string
    Password?: StringWithAggregatesFilter<"User"> | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    StoreId?: IntFilter<"Store"> | number
    UserId?: IntFilter<"Store"> | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    ItemLists?: ItemListListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    StoreId?: SortOrder
    UserId?: SortOrder
    User?: UserOrderByWithRelationInput
    ItemLists?: ItemListOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    StoreId?: number
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    UserId?: IntFilter<"Store"> | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    ItemLists?: ItemListListRelationFilter
  }, "StoreId">

  export type StoreOrderByWithAggregationInput = {
    StoreId?: SortOrder
    UserId?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    StoreId?: IntWithAggregatesFilter<"Store"> | number
    UserId?: IntWithAggregatesFilter<"Store"> | number
  }

  export type ItemListWhereInput = {
    AND?: ItemListWhereInput | ItemListWhereInput[]
    OR?: ItemListWhereInput[]
    NOT?: ItemListWhereInput | ItemListWhereInput[]
    Id?: IntFilter<"ItemList"> | number
    ItemName?: StringFilter<"ItemList"> | string
    UserId?: IntFilter<"ItemList"> | number
    StoreId?: IntFilter<"ItemList"> | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Store?: XOR<StoreRelationFilter, StoreWhereInput>
  }

  export type ItemListOrderByWithRelationInput = {
    Id?: SortOrder
    ItemName?: SortOrder
    UserId?: SortOrder
    StoreId?: SortOrder
    User?: UserOrderByWithRelationInput
    Store?: StoreOrderByWithRelationInput
  }

  export type ItemListWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: ItemListWhereInput | ItemListWhereInput[]
    OR?: ItemListWhereInput[]
    NOT?: ItemListWhereInput | ItemListWhereInput[]
    ItemName?: StringFilter<"ItemList"> | string
    UserId?: IntFilter<"ItemList"> | number
    StoreId?: IntFilter<"ItemList"> | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    Store?: XOR<StoreRelationFilter, StoreWhereInput>
  }, "Id">

  export type ItemListOrderByWithAggregationInput = {
    Id?: SortOrder
    ItemName?: SortOrder
    UserId?: SortOrder
    StoreId?: SortOrder
    _count?: ItemListCountOrderByAggregateInput
    _avg?: ItemListAvgOrderByAggregateInput
    _max?: ItemListMaxOrderByAggregateInput
    _min?: ItemListMinOrderByAggregateInput
    _sum?: ItemListSumOrderByAggregateInput
  }

  export type ItemListScalarWhereWithAggregatesInput = {
    AND?: ItemListScalarWhereWithAggregatesInput | ItemListScalarWhereWithAggregatesInput[]
    OR?: ItemListScalarWhereWithAggregatesInput[]
    NOT?: ItemListScalarWhereWithAggregatesInput | ItemListScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"ItemList"> | number
    ItemName?: StringWithAggregatesFilter<"ItemList"> | string
    UserId?: IntWithAggregatesFilter<"ItemList"> | number
    StoreId?: IntWithAggregatesFilter<"ItemList"> | number
  }

  export type UserCreateInput = {
    UserName: string
    Password: string
    Stores?: StoreCreateNestedManyWithoutUserInput
    ItemLists?: ItemListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    UserId?: number
    UserName: string
    Password: string
    Stores?: StoreUncheckedCreateNestedManyWithoutUserInput
    ItemLists?: ItemListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Stores?: StoreUpdateManyWithoutUserNestedInput
    ItemLists?: ItemListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    UserId?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Stores?: StoreUncheckedUpdateManyWithoutUserNestedInput
    ItemLists?: ItemListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    UserId?: number
    UserName: string
    Password: string
  }

  export type UserUpdateManyMutationInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    UserId?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type StoreCreateInput = {
    StoreId?: number
    User: UserCreateNestedOneWithoutStoresInput
    ItemLists?: ItemListCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    StoreId?: number
    UserId: number
    ItemLists?: ItemListUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    User?: UserUpdateOneRequiredWithoutStoresNestedInput
    ItemLists?: ItemListUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    StoreId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
    ItemLists?: ItemListUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    StoreId?: number
    UserId: number
  }

  export type StoreUpdateManyMutationInput = {

  }

  export type StoreUncheckedUpdateManyInput = {
    StoreId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemListCreateInput = {
    ItemName: string
    User: UserCreateNestedOneWithoutItemListsInput
    Store: StoreCreateNestedOneWithoutItemListsInput
  }

  export type ItemListUncheckedCreateInput = {
    Id?: number
    ItemName: string
    UserId: number
    StoreId: number
  }

  export type ItemListUpdateInput = {
    ItemName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutItemListsNestedInput
    Store?: StoreUpdateOneRequiredWithoutItemListsNestedInput
  }

  export type ItemListUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ItemName?: StringFieldUpdateOperationsInput | string
    UserId?: IntFieldUpdateOperationsInput | number
    StoreId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemListCreateManyInput = {
    Id?: number
    ItemName: string
    UserId: number
    StoreId: number
  }

  export type ItemListUpdateManyMutationInput = {
    ItemName?: StringFieldUpdateOperationsInput | string
  }

  export type ItemListUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ItemName?: StringFieldUpdateOperationsInput | string
    UserId?: IntFieldUpdateOperationsInput | number
    StoreId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StoreListRelationFilter = {
    every?: StoreWhereInput
    some?: StoreWhereInput
    none?: StoreWhereInput
  }

  export type ItemListListRelationFilter = {
    every?: ItemListWhereInput
    some?: ItemListWhereInput
    none?: ItemListWhereInput
  }

  export type StoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    UserId?: SortOrder
    UserName?: SortOrder
    Password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    UserId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    UserId?: SortOrder
    UserName?: SortOrder
    Password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    UserId?: SortOrder
    UserName?: SortOrder
    Password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    UserId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StoreCountOrderByAggregateInput = {
    StoreId?: SortOrder
    UserId?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    StoreId?: SortOrder
    UserId?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    StoreId?: SortOrder
    UserId?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    StoreId?: SortOrder
    UserId?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    StoreId?: SortOrder
    UserId?: SortOrder
  }

  export type StoreRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type ItemListCountOrderByAggregateInput = {
    Id?: SortOrder
    ItemName?: SortOrder
    UserId?: SortOrder
    StoreId?: SortOrder
  }

  export type ItemListAvgOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    StoreId?: SortOrder
  }

  export type ItemListMaxOrderByAggregateInput = {
    Id?: SortOrder
    ItemName?: SortOrder
    UserId?: SortOrder
    StoreId?: SortOrder
  }

  export type ItemListMinOrderByAggregateInput = {
    Id?: SortOrder
    ItemName?: SortOrder
    UserId?: SortOrder
    StoreId?: SortOrder
  }

  export type ItemListSumOrderByAggregateInput = {
    Id?: SortOrder
    UserId?: SortOrder
    StoreId?: SortOrder
  }

  export type StoreCreateNestedManyWithoutUserInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type ItemListCreateNestedManyWithoutUserInput = {
    create?: XOR<ItemListCreateWithoutUserInput, ItemListUncheckedCreateWithoutUserInput> | ItemListCreateWithoutUserInput[] | ItemListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutUserInput | ItemListCreateOrConnectWithoutUserInput[]
    createMany?: ItemListCreateManyUserInputEnvelope
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type ItemListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ItemListCreateWithoutUserInput, ItemListUncheckedCreateWithoutUserInput> | ItemListCreateWithoutUserInput[] | ItemListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutUserInput | ItemListCreateOrConnectWithoutUserInput[]
    createMany?: ItemListCreateManyUserInputEnvelope
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type StoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutUserInput | StoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutUserInput | StoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutUserInput | StoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type ItemListUpdateManyWithoutUserNestedInput = {
    create?: XOR<ItemListCreateWithoutUserInput, ItemListUncheckedCreateWithoutUserInput> | ItemListCreateWithoutUserInput[] | ItemListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutUserInput | ItemListCreateOrConnectWithoutUserInput[]
    upsert?: ItemListUpsertWithWhereUniqueWithoutUserInput | ItemListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ItemListCreateManyUserInputEnvelope
    set?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    disconnect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    delete?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    update?: ItemListUpdateWithWhereUniqueWithoutUserInput | ItemListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ItemListUpdateManyWithWhereWithoutUserInput | ItemListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutUserInput | StoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutUserInput | StoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutUserInput | StoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type ItemListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ItemListCreateWithoutUserInput, ItemListUncheckedCreateWithoutUserInput> | ItemListCreateWithoutUserInput[] | ItemListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutUserInput | ItemListCreateOrConnectWithoutUserInput[]
    upsert?: ItemListUpsertWithWhereUniqueWithoutUserInput | ItemListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ItemListCreateManyUserInputEnvelope
    set?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    disconnect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    delete?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    update?: ItemListUpdateWithWhereUniqueWithoutUserInput | ItemListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ItemListUpdateManyWithWhereWithoutUserInput | ItemListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStoresInput = {
    create?: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoresInput
    connect?: UserWhereUniqueInput
  }

  export type ItemListCreateNestedManyWithoutStoreInput = {
    create?: XOR<ItemListCreateWithoutStoreInput, ItemListUncheckedCreateWithoutStoreInput> | ItemListCreateWithoutStoreInput[] | ItemListUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutStoreInput | ItemListCreateOrConnectWithoutStoreInput[]
    createMany?: ItemListCreateManyStoreInputEnvelope
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
  }

  export type ItemListUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<ItemListCreateWithoutStoreInput, ItemListUncheckedCreateWithoutStoreInput> | ItemListCreateWithoutStoreInput[] | ItemListUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutStoreInput | ItemListCreateOrConnectWithoutStoreInput[]
    createMany?: ItemListCreateManyStoreInputEnvelope
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStoresNestedInput = {
    create?: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoresInput
    upsert?: UserUpsertWithoutStoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoresInput, UserUpdateWithoutStoresInput>, UserUncheckedUpdateWithoutStoresInput>
  }

  export type ItemListUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ItemListCreateWithoutStoreInput, ItemListUncheckedCreateWithoutStoreInput> | ItemListCreateWithoutStoreInput[] | ItemListUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutStoreInput | ItemListCreateOrConnectWithoutStoreInput[]
    upsert?: ItemListUpsertWithWhereUniqueWithoutStoreInput | ItemListUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ItemListCreateManyStoreInputEnvelope
    set?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    disconnect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    delete?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    update?: ItemListUpdateWithWhereUniqueWithoutStoreInput | ItemListUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ItemListUpdateManyWithWhereWithoutStoreInput | ItemListUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
  }

  export type ItemListUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ItemListCreateWithoutStoreInput, ItemListUncheckedCreateWithoutStoreInput> | ItemListCreateWithoutStoreInput[] | ItemListUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ItemListCreateOrConnectWithoutStoreInput | ItemListCreateOrConnectWithoutStoreInput[]
    upsert?: ItemListUpsertWithWhereUniqueWithoutStoreInput | ItemListUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ItemListCreateManyStoreInputEnvelope
    set?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    disconnect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    delete?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    connect?: ItemListWhereUniqueInput | ItemListWhereUniqueInput[]
    update?: ItemListUpdateWithWhereUniqueWithoutStoreInput | ItemListUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ItemListUpdateManyWithWhereWithoutStoreInput | ItemListUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutItemListsInput = {
    create?: XOR<UserCreateWithoutItemListsInput, UserUncheckedCreateWithoutItemListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemListsInput
    connect?: UserWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutItemListsInput = {
    create?: XOR<StoreCreateWithoutItemListsInput, StoreUncheckedCreateWithoutItemListsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutItemListsInput
    connect?: StoreWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutItemListsNestedInput = {
    create?: XOR<UserCreateWithoutItemListsInput, UserUncheckedCreateWithoutItemListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemListsInput
    upsert?: UserUpsertWithoutItemListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutItemListsInput, UserUpdateWithoutItemListsInput>, UserUncheckedUpdateWithoutItemListsInput>
  }

  export type StoreUpdateOneRequiredWithoutItemListsNestedInput = {
    create?: XOR<StoreCreateWithoutItemListsInput, StoreUncheckedCreateWithoutItemListsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutItemListsInput
    upsert?: StoreUpsertWithoutItemListsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutItemListsInput, StoreUpdateWithoutItemListsInput>, StoreUncheckedUpdateWithoutItemListsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StoreCreateWithoutUserInput = {
    StoreId?: number
    ItemLists?: ItemListCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutUserInput = {
    StoreId?: number
    ItemLists?: ItemListUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutUserInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput>
  }

  export type StoreCreateManyUserInputEnvelope = {
    data: StoreCreateManyUserInput | StoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ItemListCreateWithoutUserInput = {
    ItemName: string
    Store: StoreCreateNestedOneWithoutItemListsInput
  }

  export type ItemListUncheckedCreateWithoutUserInput = {
    Id?: number
    ItemName: string
    StoreId: number
  }

  export type ItemListCreateOrConnectWithoutUserInput = {
    where: ItemListWhereUniqueInput
    create: XOR<ItemListCreateWithoutUserInput, ItemListUncheckedCreateWithoutUserInput>
  }

  export type ItemListCreateManyUserInputEnvelope = {
    data: ItemListCreateManyUserInput | ItemListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithWhereUniqueWithoutUserInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutUserInput, StoreUncheckedUpdateWithoutUserInput>
    create: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutUserInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutUserInput, StoreUncheckedUpdateWithoutUserInput>
  }

  export type StoreUpdateManyWithWhereWithoutUserInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutUserInput>
  }

  export type StoreScalarWhereInput = {
    AND?: StoreScalarWhereInput | StoreScalarWhereInput[]
    OR?: StoreScalarWhereInput[]
    NOT?: StoreScalarWhereInput | StoreScalarWhereInput[]
    StoreId?: IntFilter<"Store"> | number
    UserId?: IntFilter<"Store"> | number
  }

  export type ItemListUpsertWithWhereUniqueWithoutUserInput = {
    where: ItemListWhereUniqueInput
    update: XOR<ItemListUpdateWithoutUserInput, ItemListUncheckedUpdateWithoutUserInput>
    create: XOR<ItemListCreateWithoutUserInput, ItemListUncheckedCreateWithoutUserInput>
  }

  export type ItemListUpdateWithWhereUniqueWithoutUserInput = {
    where: ItemListWhereUniqueInput
    data: XOR<ItemListUpdateWithoutUserInput, ItemListUncheckedUpdateWithoutUserInput>
  }

  export type ItemListUpdateManyWithWhereWithoutUserInput = {
    where: ItemListScalarWhereInput
    data: XOR<ItemListUpdateManyMutationInput, ItemListUncheckedUpdateManyWithoutUserInput>
  }

  export type ItemListScalarWhereInput = {
    AND?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
    OR?: ItemListScalarWhereInput[]
    NOT?: ItemListScalarWhereInput | ItemListScalarWhereInput[]
    Id?: IntFilter<"ItemList"> | number
    ItemName?: StringFilter<"ItemList"> | string
    UserId?: IntFilter<"ItemList"> | number
    StoreId?: IntFilter<"ItemList"> | number
  }

  export type UserCreateWithoutStoresInput = {
    UserName: string
    Password: string
    ItemLists?: ItemListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStoresInput = {
    UserId?: number
    UserName: string
    Password: string
    ItemLists?: ItemListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
  }

  export type ItemListCreateWithoutStoreInput = {
    ItemName: string
    User: UserCreateNestedOneWithoutItemListsInput
  }

  export type ItemListUncheckedCreateWithoutStoreInput = {
    Id?: number
    ItemName: string
    UserId: number
  }

  export type ItemListCreateOrConnectWithoutStoreInput = {
    where: ItemListWhereUniqueInput
    create: XOR<ItemListCreateWithoutStoreInput, ItemListUncheckedCreateWithoutStoreInput>
  }

  export type ItemListCreateManyStoreInputEnvelope = {
    data: ItemListCreateManyStoreInput | ItemListCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStoresInput = {
    update: XOR<UserUpdateWithoutStoresInput, UserUncheckedUpdateWithoutStoresInput>
    create: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoresInput, UserUncheckedUpdateWithoutStoresInput>
  }

  export type UserUpdateWithoutStoresInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    ItemLists?: ItemListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoresInput = {
    UserId?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    ItemLists?: ItemListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ItemListUpsertWithWhereUniqueWithoutStoreInput = {
    where: ItemListWhereUniqueInput
    update: XOR<ItemListUpdateWithoutStoreInput, ItemListUncheckedUpdateWithoutStoreInput>
    create: XOR<ItemListCreateWithoutStoreInput, ItemListUncheckedCreateWithoutStoreInput>
  }

  export type ItemListUpdateWithWhereUniqueWithoutStoreInput = {
    where: ItemListWhereUniqueInput
    data: XOR<ItemListUpdateWithoutStoreInput, ItemListUncheckedUpdateWithoutStoreInput>
  }

  export type ItemListUpdateManyWithWhereWithoutStoreInput = {
    where: ItemListScalarWhereInput
    data: XOR<ItemListUpdateManyMutationInput, ItemListUncheckedUpdateManyWithoutStoreInput>
  }

  export type UserCreateWithoutItemListsInput = {
    UserName: string
    Password: string
    Stores?: StoreCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutItemListsInput = {
    UserId?: number
    UserName: string
    Password: string
    Stores?: StoreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutItemListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutItemListsInput, UserUncheckedCreateWithoutItemListsInput>
  }

  export type StoreCreateWithoutItemListsInput = {
    StoreId?: number
    User: UserCreateNestedOneWithoutStoresInput
  }

  export type StoreUncheckedCreateWithoutItemListsInput = {
    StoreId?: number
    UserId: number
  }

  export type StoreCreateOrConnectWithoutItemListsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutItemListsInput, StoreUncheckedCreateWithoutItemListsInput>
  }

  export type UserUpsertWithoutItemListsInput = {
    update: XOR<UserUpdateWithoutItemListsInput, UserUncheckedUpdateWithoutItemListsInput>
    create: XOR<UserCreateWithoutItemListsInput, UserUncheckedCreateWithoutItemListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutItemListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutItemListsInput, UserUncheckedUpdateWithoutItemListsInput>
  }

  export type UserUpdateWithoutItemListsInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Stores?: StoreUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutItemListsInput = {
    UserId?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Stores?: StoreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StoreUpsertWithoutItemListsInput = {
    update: XOR<StoreUpdateWithoutItemListsInput, StoreUncheckedUpdateWithoutItemListsInput>
    create: XOR<StoreCreateWithoutItemListsInput, StoreUncheckedCreateWithoutItemListsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutItemListsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutItemListsInput, StoreUncheckedUpdateWithoutItemListsInput>
  }

  export type StoreUpdateWithoutItemListsInput = {
    User?: UserUpdateOneRequiredWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateWithoutItemListsInput = {
    StoreId?: IntFieldUpdateOperationsInput | number
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type StoreCreateManyUserInput = {
    StoreId?: number
  }

  export type ItemListCreateManyUserInput = {
    Id?: number
    ItemName: string
    StoreId: number
  }

  export type StoreUpdateWithoutUserInput = {
    ItemLists?: ItemListUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutUserInput = {
    StoreId?: IntFieldUpdateOperationsInput | number
    ItemLists?: ItemListUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateManyWithoutUserInput = {
    StoreId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemListUpdateWithoutUserInput = {
    ItemName?: StringFieldUpdateOperationsInput | string
    Store?: StoreUpdateOneRequiredWithoutItemListsNestedInput
  }

  export type ItemListUncheckedUpdateWithoutUserInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ItemName?: StringFieldUpdateOperationsInput | string
    StoreId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemListUncheckedUpdateManyWithoutUserInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ItemName?: StringFieldUpdateOperationsInput | string
    StoreId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemListCreateManyStoreInput = {
    Id?: number
    ItemName: string
    UserId: number
  }

  export type ItemListUpdateWithoutStoreInput = {
    ItemName?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutItemListsNestedInput
  }

  export type ItemListUncheckedUpdateWithoutStoreInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ItemName?: StringFieldUpdateOperationsInput | string
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemListUncheckedUpdateManyWithoutStoreInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ItemName?: StringFieldUpdateOperationsInput | string
    UserId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreCountOutputTypeDefaultArgs instead
     */
    export type StoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreDefaultArgs instead
     */
    export type StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemListDefaultArgs instead
     */
    export type ItemListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemListDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}