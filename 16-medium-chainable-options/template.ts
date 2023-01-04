type Chainable<T extends object = {}> = {
  option<K extends string, V>(key: K extends keyof T ? V extends T[K] ? K : never : K, value: V): Chainable<T & Record<K, V>>
  get(): T
}
