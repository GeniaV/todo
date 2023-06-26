import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/app/app';
import store, { AppDispatch, RootState } from './store/store';
import { Provider } from 'react-redux';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

if (process.env.NODE_ENV !== 'test') {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

reportWebVitals();


