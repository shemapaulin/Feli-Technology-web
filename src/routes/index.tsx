import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './router';
import Layout from '@/layouts/layout';
import { Home, About, Achievements, Portfolio, Calculator, Contact,Prod,NetworkProd, MultimediaProd,Itsupport, ApplyForm} from '@/Pages';

import { NotFound } from '@/Components';
import Customers from '@/Pages/section/sectionPlus/customers';
import Parteners from '@/Pages/section/sectionPlus/parteners';

const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: router.about,
          element: <About />,
        },
        {
          path: router.achievements,
          element: <Achievements />,   
        },
        {
          path: router.calculator,
          element: <Calculator />,   
        },
        {
          path: router.portfolio,
          element: <Portfolio />,   
        },
        {
          path: router.contact,
          element: <Contact />,
        },
        {
          path: router.prod, 
          element: <Prod />,
        },
        {
          path: router.networkProd, 
          element: <NetworkProd/>,
        },
        {
          path: router.MultimediaProd, 
          element: <MultimediaProd />,
        },
        {
          path: router.Itsupport, 
          element: <Itsupport />,
        },
        {
          path: router.customers, 
          element: <Customers />,
        },
        {
          path: router.parteners,
          element: <Parteners />,
        },
        {
          path: router.ApplyForm,
          element: <ApplyForm />,
        }
      ],
    }
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default Routes;
