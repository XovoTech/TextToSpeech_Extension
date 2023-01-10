import React from 'react';
import './app.module.css';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { createReduxStore  } from './redux/store';

const queryClient = new QueryClient()
// import * as dotenv from "dotenv";
// dotenv.config();
const store = createReduxStore();

const router = createMemoryRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
], {
  initialEntries: ['/login'],
  initialIndex: 0
});


function App() {
  return (
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    </Provider>
  )
}

export default App;
