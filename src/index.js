import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { config as AmapReactConfig } from '@amap/amap-react';

AmapReactConfig.version = '2.0'; // 默认2.0，这里可以不修改
AmapReactConfig.key = 'f39bd6867c1ff74d245282ac5beab9a5';
AmapReactConfig.plugins = [
  'AMap.ToolBar',
  'AMap.MoveAnimation',
  //english
  
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
