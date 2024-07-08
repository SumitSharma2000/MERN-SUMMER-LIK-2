import ReactDOM from 'react-dom/client';
import React from 'react';
const parent = document.getElementById('root');
const child = ReactDOM.createRoot(parent);



const App = () => <div>Hello From React</div>;
child.render(App());