import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

//Components
import Root, { rootLoader } from './routes/Root';
import Pokemon, { pokemonLoader } from './routes/Pokemon';
import Error from './routes/Error';

const JSXrouter = createBrowserRouter(createRoutesFromElements(
  <Route element={<Root />} path="/" loader={rootLoader} errorElement={<Error />}>
    <Route element={<Pokemon />} loader={pokemonLoader} path="pokemon/:name" />
  </Route>
))

//does the exact same thing as JSXrouter
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/pokemon/:name",
        element: <Pokemon />,
        errorElement: <Error />
      }
    ]
  }
])
*/

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={JSXrouter} />
  </React.StrictMode>,
)
