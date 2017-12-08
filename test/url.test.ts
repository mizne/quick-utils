import { parseURLSearch } from '../src/core/url'

test('parse ?a=b return {a: b}', () => {
  expect(parseURLSearch('?a=b')).toEqual({a: 'b'})
})
