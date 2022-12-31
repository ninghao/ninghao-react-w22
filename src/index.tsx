import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const element = React.createElement(
  'div',
  { className: 'container' },
  React.createElement('h1', { className: 'title' }, '宁皓网'),
);

console.log(element);

root.render(element);
