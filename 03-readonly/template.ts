type MyReadonly<T> = {
  readonly [K in keyof T]:T[K]
}
/* 
readonly 只读属性修饰符
*/
