import React, { useEffect } from 'react';
import './app.module.css';
import { RouterProvider } from 'react-router-dom';

import { Provider, useDispatch } from 'react-redux';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { createReduxStore } from './redux/store';
import Header from './component/Header/Header';
import { AppThunkDispatch } from './redux/types';
import { setAuthUser } from './redux/actions/auth';
import router from './router/routes';

const queryClient = new QueryClient();
const store = createReduxStore();

function App() {
  const dispatch = useDispatch<AppThunkDispatch>();

  useEffect(() => {
    const onChangeHandler = (changes: { [key: string]: chrome.storage.StorageChange }, namespace: "sync" | "local" | "managed" | "session") => {
      if (namespace == "sync") {
        for (const [key, { newValue }] of Object.entries(changes)) {
          if (key == "user") {
            dispatch(setAuthUser(newValue));
          }
        }
      }
    }

    chrome.storage.onChanged.addListener(onChangeHandler);

    return () => {
      chrome.storage.onChanged.removeListener(onChangeHandler);
    };
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

const ProvidedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default ProvidedApp;
