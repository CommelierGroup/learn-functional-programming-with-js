export const iterable = {
  [Symbol.iterator]() {
    let i = 0
    return {
      next() {
        return i === 3 ? { done: true } : { value: i++, done: false }
      },
      [Symbol.iterator]() {
        return this
      },
    }
  },
}

export function* generator() {}
