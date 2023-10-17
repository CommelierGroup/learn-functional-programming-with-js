import { describe, it } from 'node:test'
import * as assert from 'node:assert'
import { makeAddN, times } from './0.higher-order-function.js'

describe('makeAddN', () => {
  it('should create a closure that performs x + 2', () => {
    const add = (a, b) => a + b
    const add2 = makeAddN(add, 2)

    const want = 12
    const got = add2(10)

    assert.equal(want, got)
  })
})

describe('times', () => {
  it('should perform pow(0), pow(1), pow(2), ..., pow(5)', () => {
    const want = [0, 1, 4, 9, 16, 25]
    const got = times(n => Math.pow(n, 2), 6)

    assert.deepEqual(want, got)
  })
})
