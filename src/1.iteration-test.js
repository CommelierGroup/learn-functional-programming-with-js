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

  it.todo('should have the well-formed iterator')
})

describe('iteration protocols', () => {
  it.todo('should be iterable')

  it.todo('should have the well-formed iterator')
})

describe('generator', () => {
  it.todo('should be iterable')

  it.todo('should have the well-formed iterator')
})
