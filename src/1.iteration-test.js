import { describe, it } from 'node:test'
import assert from 'node:assert'

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
  it.todo('should be iterable')

  it.todo('should have the well-formed iterator')
})

describe('generator', () => {
  it.todo('should be iterable')

  it.todo('should have the well-formed iterator')
})
