import { parseURLSearch } from '../src/core/url'

describe('test parseURLSearch function', () => {
  describe('test boundary scenes', () => {
    test('parse "" return {}', () => {
      expect(parseURLSearch('')).toEqual({})
    })
    test('parse "?" return {}', () => {
      expect(parseURLSearch('?')).toEqual({})
    })
  })

  describe('test single value of key', () => {
    test('parse "?a=b" return {"a": "b"}', () => {
      expect(parseURLSearch('?a=b')).toEqual({ a: 'b' })
    })
    test('parse "a=b" return {"a": "b"}', () => {
      expect(parseURLSearch('?a=b')).toEqual({ a: 'b' })
    })
  })

  describe('test multi value of key', () => {
    test('parse "?a=2&b=3" return {"a": "2", "b": 3}', () => {
      expect(parseURLSearch('?a=2&b=3')).toEqual({ a: '2', b: '3' })
    })
    test('parse "?a=2&a=3" return {"a": ["2", "3"]}', () => {
      expect(parseURLSearch('?a=2&a=3')).toEqual({ a: ['2', '3'] })
    })
  })
})
