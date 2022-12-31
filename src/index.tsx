import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// const element = React.createElement(
//   'div',
//   { className: 'container' },
//   React.createElement('h1', { className: 'title' }, '宁皓网'),
// );

const name = '宁皓网';

const element = (
  <div className="container">
    <h1 className="title">{name}</h1>
  </div>
);

console.log(element);

root.render(element);
