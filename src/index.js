import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {FeedbackForm} from './components/FeedbackForm/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FeedbackForm />
  </React.StrictMode>
);
// ReactDOM.render(<FeedbackForm />, document.getElementById('root'));