const { isPalindrome } = require('../utils')

describe('isPalindrome', () => {
	test('returns true for "racecar"', () => {
		expect(isPalindrome('racecar')).toBe(true)
	})

	test('returns false for "car"', () => {
		expect(isPalindrome('car')).toBe(false)
	})

	test('is case-insensitive ("RaceCar")', () => {
		expect(isPalindrome('RaceCar')).toBe(true)
	})

	test('returns false for empty string', () => {
		expect(isPalindrome('')).toBe(false)
	})

	test('throws for non-alphabetic input', () => {
		expect(() => isPalindrome('hello1')).toThrow()
	})

	test('throws for non-string input', () => {
		expect(() => isPalindrome(123)).toThrow()
	})
})
