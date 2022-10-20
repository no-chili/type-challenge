type MyPick<T, K extends keyof T> = {
  [P in K]:T[P]
}
/* 
extends 遍历约束
keyof 相当于object.keys 
*/
