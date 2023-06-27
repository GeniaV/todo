import reducer, { TTodos, addTodo, complete, deleteCompleted, editTodo } from './todosSlice'

describe("TodosSlice", () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ todos: [] });
  });

  test('should handle a todo being added to an empty list', () => {
    const previousState: TTodos = { todos: [] };

    expect(reducer(previousState, addTodo({ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: false }))).toEqual(
      { todos: [{ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: false }] }
    )
  });

  test('should handle a todo being added to an existing list', () => {
    const previousState: TTodos = { todos: [{ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: false }] };

    expect(reducer(previousState, addTodo({ text: "Написать тесты", id: "S1StGXR8_ZjdHi6B-myT", done: false }))).toEqual(
      {
        todos: [{ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: false },
        { text: "Написать тесты", id: "S1StGXR8_ZjdHi6B-myT", done: false }]
      })
  });

  test('should handle a todo that changes the status to completed', () => {
    const previousState: TTodos = { todos: [{ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: false }] };

    expect(reducer(previousState, complete({ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: false }))).toEqual(
      {
        todos: [{ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: true }]
      })
  });

  test('should handle a todo that changes the its text', () => {
    const previousState: TTodos = { todos: [{ text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: false }] };

    expect(reducer(previousState, editTodo({ text: "Написать великолепный код", id: "V1StGXR8_Z5jdHi6B-myT", done: false }))).toEqual(
      {
        todos: [{ text: "Написать великолепный код", id: "V1StGXR8_Z5jdHi6B-myT", done: false }]
      })
  });

  test('should handle a todo being deleted from existing list', () => {
    const previousState: TTodos = {
      todos: [
        { text: "Написать прекрасный код", id: "V1StGXR8_Z5jdHi6B-myT", done: true },
        { text: "Написать тесты", id: "S1StGXR8_ZjdHi6B-myT", done: false }
      ]
    };

    expect(reducer(previousState, deleteCompleted([
      { text: "Написать тесты", id: "S1StGXR8_ZjdHi6B-myT", done: false }
    ]))).toEqual(
      { todos: [{ text: "Написать тесты", id: "S1StGXR8_ZjdHi6B-myT", done: false }] })
  });
}); 