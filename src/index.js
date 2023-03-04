import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GloblaStyles from "./components/GlobalStyles/GloblaStyles";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GloblaStyles>
            <App/>
        </GloblaStyles>
    </React.StrictMode>);

reportWebVitals();
