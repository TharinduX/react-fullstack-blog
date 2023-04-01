import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCNmG-ZAu7eSty194hBzBydaVmv50kuRZg',
  authDomain: 'my-react-blog-a546e.firebaseapp.com',
  projectId: 'my-react-blog-a546e',
  storageBucket: 'my-react-blog-a546e.appspot.com',
  messagingSenderId: '508552236491',
  appId: '1:508552236491:web:1ed993e9a5f931625ffa4e',
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
