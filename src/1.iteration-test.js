import { describe, it } from 'node:test'
import assert from 'node:assert'
import { generator, iterable } from './1.iteration.js'

describe('Array, Set, Map', () => {
  it('should be iterable', () => {
    const array = new Array() // equal to []
    const set = new Set()
    const map = new Map()

    assert.notStrictEqual(array[Symbol.iterator], undefined)
    assert.notStrictEqual(set[Symbol.iterator], undefined)
    assert.notStrictEqual(map[Symbol.iterator], undefined)
  })

  it('should have the well-formed iterator', () => {
    const array = [1, 2, 3]
    const set = new Set(array)

    const arrayIterator = array[Symbol.iterator]()
    const setIterator = set[Symbol.iterator]()

    assert.deepEqual([...arrayIterator], array)
    assert.deepEqual([...setIterator], array)
  })
})

describe('iteration protocols', () => {
  it('should be iterable', () => {
    assert.notStrictEqual(iterable[Symbol.iterator], undefined)
  })

  it('should have the well-formed iterator', () => {
    const expected = [0, 1, 2]
    const iterator = iterable[Symbol.iterator]()

    assert.deepEqual([...iterator], expected)
  })
})

describe('generator', () => {
  it('should be iterable', () => {
    const gen = generator()
    assert.notStrictEqual(gen[Symbol.iterator], undefined)
  })

  it('should have the well-formed iterator', () => {
    const expected = [0, 1, 2]
    const gen = generator()
    const iterator = gen[Symbol.iterator]()

    assert.strictEqual(iterator, gen)
    assert.deepEqual([...iterator], expected)
  })
})
