import React, { useEffect } from 'react';
import styles from './app.module.css';
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
import { Button } from 'forging-react';
import moment from 'moment';
import { useSubscriptionAPI } from './api/subscription';

const queryClient = new QueryClient();
const store = createReduxStore();

function App() {
  const dispatch = useDispatch<AppThunkDispatch>();

  const { user, subscription } = useSelector((store: RootState) => {
    return {
      user: store.auth.user,
      subscription: store.auth.subscription,
    }
  });

  const { updateUserCount, getSubscriptionInfo} = useSubscriptionAPI();

  useEffect(() => {
    const onChangeHandler = (changes: { [key: string]: chrome.storage.StorageChange }, namespace: "sync" | "local" | "managed" | "session") => {
      if (namespace == "sync") {
        for (const [key, { newValue }] of Object.entries(changes)) {
          if (key == "user") {
            dispatch(setAuthUser(newValue));
          }
          if (key == "char_count") {
            updateUserCount(newValue);
          }
        }
      }
    }

    chrome.storage.onChanged.addListener(onChangeHandler);

    chrome.storage.sync.get(['user', 'char_count']).then(
      (result) => {
        dispatch(setAuthUser({
          ...result.user,
          has_expired: result?.char_count < 0 || moment().isAfter(moment(subscription?.next_payment_date))
        }))
      })
      .catch((e) => console.log(e));

    return () => {
      chrome.storage.onChanged.removeListener(onChangeHandler);
    };
  }, [dispatch, subscription]);

  useEffect(() => {
    getSubscriptionInfo();
  }, []);

  const onLogout = () => {
    chrome.storage.sync.remove(["user", "char_count"])
      .then(() => dispatch(setAuthUser(null)))
      .catch((err) => console.error(err));
  }

  return (
    <React.Fragment>
      {user?.has_expired ? (
        <div className={styles.overlayContainer}>
          <p>Your character limit has exceeded</p>
          <Button onClick={onLogout}>Logout</Button>
        </div>
      ) : null}
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
