import { initializeTimes, updateTimes } from './Reservation';

test('initializeTimes returns correct initial state', () => {
  const initialState = initializeTimes();
  expect(initialState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same state', () => {
  const initialState = ['17:00', '18:00', '19:00'];
  const action = { type: 'UPDATE_TIMES', payload: '2024-06-07' };
  const updatedState = updateTimes(initialState, action);
  expect(updatedState).toEqual(initialState);
});
