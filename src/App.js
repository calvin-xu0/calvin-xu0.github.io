import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './App.scss';
import Layout from './components/layout';
import About from './routes/about'
import SoftwarePage from "./routes/software"
import ResearchPage from "./routes/research"
import ErrorPage from './errorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: "/software",
        element: <SoftwarePage />
      },
      {
        path: "/research",
        element: <ResearchPage />
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
