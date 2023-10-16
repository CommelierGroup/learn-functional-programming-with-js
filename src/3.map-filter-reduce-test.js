import { describe, it } from 'node:test'

const products = [
  { name: '핸드폰 케이스', price: 15000 },
  { name: '이어폰', price: 30000 },
  { name: '충전기', price: 20000 },
  { name: '키보드', price: 50000 },
  { name: '마우스', price: 25000 },
  { name: '노트북 스탠드', price: 18000 },
  { name: '모니터', price: 200000 },
  { name: 'USB 허브', price: 35000 },
  { name: '외장하드', price: 80000 },
  { name: '웹캠', price: 70000 },
]

describe('map function', () => {
  it.todo('should return only the names of the products')
  it.todo('should return only the prices of the products')
})

describe('filter function', () => {
  it.todo('should return products priced above 20000')
  it.todo('should return products priced below 50000')
})

describe('reduce function', () => {
  it.todo('should return the sum of prices for all products')
  it.todo('should return the sum of prices for products priced above 30000')
})
