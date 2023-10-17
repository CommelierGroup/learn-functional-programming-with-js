export const makeAddN = (fn, n) => {
  return x => fn(x, n)
}

export const times = (fn, n) => {
  const result = []
  for (let i = 0; i < n; i++) {
    result.push(fn(i))
  }
  return result
}
