import React from 'react';
import ReactDOM from 'react-dom';
import Calculadora from './calculadora';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculadora />, div);
  
  ReactDOM.unmountComponentAtNode(div);
});
