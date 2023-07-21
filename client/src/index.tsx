import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/main.css";
import { Toaster } from 'react-hot-toast';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import { tippy } from '@tippyjs/react';
import { BrowserRouter } from 'react-router-dom';
import OasisMenuProvider from 'oasismenu';
import App from './App';


tippy.setDefaultProps({
    arrow: false,
    animation: "shift-away",
    delay: [200, 0],
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <OasisMenuProvider theme="space" toggle trigger="click">
                <App />
            </OasisMenuProvider>
            <Toaster position="bottom-center" reverseOrder containerStyle={{ top: 76, bottom: 116 }} />
        </BrowserRouter>
    </React.StrictMode>
);