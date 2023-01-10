import add from './add'

describe('add', () => {
  it('add a and b', () => {
    const a = 1
    const b = 2
    const result = add(a, b)
    expect(result).toBe(3)
  })
})

export {}
