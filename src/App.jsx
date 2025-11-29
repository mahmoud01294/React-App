import Home from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Accounts from "./Components/Accounts/Accounts";
import Layout from "./Components/Layout/Layout";
import Instructor from "./Components/Instructor/Instructor";
import Student from "./Components/Student/Student";
import Notfound from "./Components/Notfound/Notfound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let x = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "accounts", element: <Accounts />,children: [
        {path: "Instructor" , element: <Instructor />},
        {path: "Student" , element: <Student />}  
      ] },
      {path:"*" , element: <Notfound />}
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={x}></RouterProvider>;
    </>
  );
}

export default App;
