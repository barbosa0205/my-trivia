import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Explore from '../pages/Explore'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import TriviaPage from '../pages/TriviaPage'
export const MainRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: '/explore',
      element: <Explore />,
    },
    {
      path: '/trivia/:id',
      element: <TriviaPage />,
    },
  ])

  return <RouterProvider router={router} />
}
