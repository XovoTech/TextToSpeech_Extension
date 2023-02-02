import React, { useEffect } from 'react';
import './app.module.css';
import { RouterProvider } from 'react-router-dom';

import { Provider, useDispatch, useSelector } from 'react-redux';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { createReduxStore } from './redux/store';
import Header from './component/Header/Header';
import { AppThunkDispatch, RootState } from './redux/types';
import { setAuthUser } from './redux/actions/auth';
import router from './router/routes';
import { getSubscriptionInfo } from './api/woocommerce_api';

const queryClient = new QueryClient();
const store = createReduxStore();

function App() {
  const dispatch = useDispatch<AppThunkDispatch>();
  const user = useSelector((store: RootState) => store.auth.user);

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

    chrome.storage.sync.get(['user']).then(
      (result) =>
        dispatch(setAuthUser(result.user)))
      .catch((e) =>
        console.log(e)
      );

    return () => {
      chrome.storage.onChanged.removeListener(onChangeHandler);
    };
  }, [dispatch]);

  useEffect(() => {
    if (user?.user_email) dispatch(getSubscriptionInfo())
  }, [user, dispatch]);

  return (
    <React.Fragment>
      <Header />
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

const ProvidedApp = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
)

export default ProvidedApp;
