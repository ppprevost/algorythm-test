import sub from '../src/sub'

describe('sub', () => {
  describe('closestToZero', () => {
    test('it must return 0', () => {
      expect(sub.closestToZero([])).toEqual(0)
    })
    test('it must return 5', () => {
      expect(sub.closestToZero([8, 5, 10])).toEqual(5)
    })
    test('it must return -1', () => {
      expect(sub.closestToZero([5, 4, -9, 6, -10, -1, 8])).toEqual(-1)
    })
    test('it must return 2', () => {
      expect(sub.closestToZero([8, 2, 3, -2])).toEqual(2)
    })
  })
})
