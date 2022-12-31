import App from './app/app';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// const element = React.createElement(
//   'div',
//   { className: 'container' },
//   React.createElement('h1', { className: 'title' }, '宁皓网'),
// );

root.render(<App />);
