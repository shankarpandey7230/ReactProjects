import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  Cocktail,
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
