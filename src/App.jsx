import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Work from './Components/Work/Work';
import Experience from './Components/Experience/Experience';
import MasterLayout from './Components/MasterLayout/MasterLayout';
import NotFound from './Components/MasterLayout/MasterLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/', 
      element: <MasterLayout/>, 
      errorElement: <NotFound/>,
      children: [
        {index:true, element: <Home/>},
        {path: 'home', element: <Home/>},
        {path: 'about', element: <About/>},
        {path: 'skills', element: <Skills/>},
        {path: 'exp', element: <Experience/>},
        {path: 'work', element: <Work/>},
        ]
    }
  ]);

  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
      {/* <MasterLayout/> */}
    </>
  );
}

export default App
