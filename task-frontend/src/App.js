import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from "./components/forms/login";
import SignUp from "./components/forms/signUp";
import Home from "./components/pages/home";
import Task from "./components/pages/task";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "/login",
      element: <><Login/></>
    },
    {
      path: "/signUp",
      element: <><SignUp/></>
    },
    {
      path: "/task",
      element: <><Task/></>
    },
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
