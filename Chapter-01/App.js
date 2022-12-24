const root = ReactDOM.createRoot(document.getElementById('root'));
const heading1 = React.createElement('h1', null, 'Heading 1');
const heading2 = React.createElement('h2', null, 'Heading 2');
const container = React.createElement(
  'div',
  { className: 'container', style: { backgroundColor: 'red', padding: 25 } },
  heading1,
  heading2
);
root.render(container);
