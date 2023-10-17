export const makeAddN = (fn, n) => {
  return x => fn(x, n)
}

export const times = (fn, n) => {
  return Array.from({ length: n }, (_, i) => fn(i))
}
