import reducer, { selectOption } from './filterSlice'

describe("FilterSlice", () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(
      { filter: 'All' }
    )
  })

  test('should handle a filter being changed', () => {
    const previousState = { filter: 'All' };
    expect(reducer(previousState, selectOption('Active'))).toEqual({ filter: 'Active' })
  })
}); 
