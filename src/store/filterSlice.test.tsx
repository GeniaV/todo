import reducer, { selectOption } from './filterSlice'

describe("FilterSlice", () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(
      { filter: 'All' }
    )
  })

  it('should handle a filter being changed', () => {
    const previousState = { filter: 'All' };
    expect(reducer(previousState, selectOption('Active'))).toEqual({ filter: 'Active' })
  })
}); 
