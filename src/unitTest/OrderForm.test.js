import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderForm from './OrderForm';

test('renders static text in OrderForm', () => {
  const date = '';
  const setDate = jest.fn();
  const availableTimes = ['17:00', '18:00', '19:00'];
  const dispatch = jest.fn();

  render(<OrderForm date={date} setDate={setDate} availableTimes={availableTimes} dispatch={dispatch} />);

  // 检查是否渲染了标签文本
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();

  // 检查是否渲染了提交按钮
  expect(screen.getByText(/make your reservation/i)).toBeInTheDocument();
});
