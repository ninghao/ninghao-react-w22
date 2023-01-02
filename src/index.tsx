import ReactDOM from 'react-dom/client';
import AppRouter from 'app/app.router';
import AppProvider from 'app/app.provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// const element = React.createElement(
//   'div',
//   { className: 'container' },
//   React.createElement('h1', { className: 'title' }, '宁皓网'),
// );

root.render(
  <AppProvider>
    <AppRouter />
  </AppProvider>,
);
