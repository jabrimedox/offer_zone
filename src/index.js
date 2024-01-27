import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Redux from './redux/Redux';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {motion} from 'framer-motion';
import Instagram from './components/Instagram/Shop';



const store = configureStore({
  reducer: Redux,
});
const InstagramAnimated = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Instagram />
  </motion.div>
);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    
  },
  {
    path: '/Instagram',
    element: <InstagramAnimated />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <RouterProvider router={router} />
      
    </Provider>
  </React.StrictMode>,
);
